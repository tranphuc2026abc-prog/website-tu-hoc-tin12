(() => {
    'use strict';

    const $ = (id) => document.getElementById(id);
    const params = new URLSearchParams(location.search);
    const chat = $('chat');
    const status = $('status');
    const form = $('form');
    const questionBox = $('question');
    let history = [];
    let searchWorker;
    let requestId = 0;
    let lesson = params.get('lesson') || '';

    if (!/^ICT(10|11|12)_B[0-9]{2}$/.test(lesson)) lesson = '';
    const currentGrade = () => lesson ? Number(lesson.slice(3, 5)) : null;

    function showContext() {
        $('context').hidden = !lesson;
        $('context-link').href = 'course.html?grade=' + currentGrade() + '#/lesson/' + lesson;
        $('context-link').textContent = lesson ? 'Bài ' + Number(lesson.slice(-2)) : '';
    }

    function setBusy(busy) {
        for (const id of ['send', 'clear', 'context-remove', 'mic']) $(id).disabled = busy;
        form.setAttribute('aria-busy', String(busy));
    }

    function reset() {
        history = [];
        chat.replaceChildren();
        status.textContent = '';
    }

    function getSearchWorker() {
        searchWorker ??= new Worker('assets/js/ktc-retrieval-worker.mjs', { type: 'module' });
        return searchWorker;
    }

    questionBox.addEventListener('input', () => {
        const connection = navigator.connection;
        if (connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType)) return;
        try {
            getSearchWorker().postMessage({ grade: currentGrade() });
        } catch {
            // Submission still reports an error if the browser cannot create the Worker.
        }
    }, { once: true });

    function search(query) {
        return new Promise((resolve, reject) => {
            getSearchWorker();
            const id = ++requestId;
            const finish = (callback, value) => {
                clearTimeout(timer);
                searchWorker.removeEventListener('message', onMessage);
                searchWorker.removeEventListener('error', onError);
                callback(value);
            };
            const onMessage = ({ data }) => {
                if (data.id !== id) return;
                if (data.error) finish(reject, new Error(data.error));
                else finish(resolve, data.sources);
            };
            const onError = () => {
                finish(reject, new Error('Trình duyệt chưa mở được công cụ tìm học liệu.'));
                searchWorker.terminate();
                searchWorker = undefined;
            };
            const timer = setTimeout(onError, 120000);
            searchWorker.addEventListener('message', onMessage);
            searchWorker.addEventListener('error', onError);
            searchWorker.postMessage({ id, grade: currentGrade(), lesson, query });
        });
    }

    function message(author, text) {
        const article = document.createElement('article');
        article.dataset.author = author;
        const name = document.createElement('strong');
        name.textContent = author === 'student' ? 'Bạn' : 'KTC';
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        article.append(name, paragraph);
        chat.append(article);
        return article;
    }

    function addSources(article, sources) {
        if (!sources.length) return;
        const list = document.createElement('ul');
        const labels = { key: 'Kiến thức trọng tâm', err: 'Lỗi thường gặp', sum: 'Tóm tắt', ex: 'Ví dụ' };
        for (const source of sources) {
            const id = source.lesson;
            if (!/^ICT(10|11|12)_B[0-9]{2}$/.test(id)) continue;
            const link = document.createElement('a');
            const item = document.createElement('li');
            link.href = 'course.html?grade=' + id.slice(3, 5) + '#/lesson/' + id;
            link.textContent = (Number.isInteger(source.id) ? '[' + source.id + '] ' : '') + source.title +
                (labels[source.section] ? ' · ' + labels[source.section] : '');
            item.append(link);
            list.append(item);
        }
        article.append(list);
    }

    $('context-remove').addEventListener('click', () => {
        lesson = '';
        showContext();
        reset();
    });
    $('clear').addEventListener('click', reset);
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    $('mic').hidden = !Recognition;
    $('mic').addEventListener('click', () => {
        const recognition = new Recognition();
        recognition.lang = 'vi-VN';
        recognition.onresult = (event) => {
            questionBox.value = event.results[0][0].transcript.slice(0, 1000);
        };
        recognition.onerror = () => { status.textContent = 'Không nhận được giọng nói.'; };
        try { recognition.start(); } catch { status.textContent = 'Chưa mở được micrô.'; }
    });
    showContext();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const question = questionBox.value.trim();
        if (!question) return;
        setBusy(true);
        message('student', question);
        status.textContent = 'Đang tìm học liệu. Lần đầu cần tải mô hình tìm kiếm…';
        let sources = [];
        try {
            const previous = history.filter((turn) => turn.role === 'user').at(-1);
            const query = previous && question.length < 100 ? question + '\n' + previous.content : question;
            sources = await search(query);
            if (!sources.length) {
                status.textContent = 'Chưa tìm thấy học liệu cho bài đang chọn. Hãy thử tìm trong mọi bài.';
                return;
            }

            if (!window.KTC_API_URL) {
                addSources(message('ktc', 'Dịch vụ hỏi đáp AI chưa mở. Em có thể xem học liệu liên quan bên dưới.'), sources);
            } else {
                status.textContent = 'Đang soạn câu trả lời…';
                const response = await fetch(new URL('/ask', window.KTC_API_URL), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        grade: currentGrade(), lesson, question, history,
                        sourceIds: sources.map((source) => source.id),
                    }),
                    signal: AbortSignal.timeout(15000),
                });
                if (response.status === 429) throw new Error('Đã đạt giới hạn lượt hỏi. Em thử lại sau nhé.');
                if (!response.ok) throw new Error('KTC chưa trả lời được. Em có thể mở học liệu liên quan.');
                const { answer, sources: citations } = await response.json();
                history.push(
                    { role: 'user', content: question.slice(0, 320) },
                    { role: 'assistant', content: answer.slice(0, 320) },
                );
                history = history.slice(-4);
                const article = message('ktc', answer);
                addSources(article, citations);
                if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
                    const speak = document.createElement('button');
                    speak.type = 'button';
                    speak.className = 'btn';
                    speak.textContent = 'Đọc câu trả lời';
                    speak.addEventListener('click', () => {
                        const utterance = new SpeechSynthesisUtterance(answer);
                        utterance.lang = 'vi-VN';
                        window.speechSynthesis.cancel();
                        window.speechSynthesis.speak(utterance);
                    });
                    article.append(speak);
                }
            }
            questionBox.value = '';
            status.textContent = '';
        } catch (error) {
            status.textContent = error.message || 'KTC chưa phản hồi. Em thử lại sau nhé.';
            if (sources.length) addSources(message('ktc', 'Học liệu liên quan'), sources);
        } finally {
            setBusy(false);
            questionBox.focus();
        }
    });
})();
