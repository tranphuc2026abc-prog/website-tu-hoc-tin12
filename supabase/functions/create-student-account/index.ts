import "jsr:@supabase/functions-js/edge-runtime.d.ts";
const cors = {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, apikey, content-type, x-client-info","Access-Control-Allow-Methods":"POST, OPTIONS"};
const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{...cors,"Content-Type":"application/json"}});
Deno.serve(async(req:Request)=>{
 if(req.method==="OPTIONS")return new Response("ok",{headers:cors});
 if(req.method!=="POST")return reply({error:"Method not allowed"},405);
 const m=(req.headers.get("Authorization")||"").match(/^Bearer\s+(.+)$/i);if(!m)return reply({error:"Bạn cần đăng nhập."},401);
 const url=Deno.env.get("SUPABASE_URL");
 let secretKey=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")||"";
 let publishableKey=Deno.env.get("SUPABASE_ANON_KEY")||"";
 try { const secrets=JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS")||"{}"); secretKey=secretKey||secrets.default||Object.values(secrets)[0]||""; } catch (_) {}
 try { const pubs=JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS")||"{}"); publishableKey=publishableKey||pubs.default||Object.values(pubs)[0]||""; } catch (_) {}
 const key=secretKey,anon=publishableKey||key;
 if(!url||!key||!anon)return reply({error:"Máy chủ chưa được cấu hình."},500);
 const token=m[1],who=await fetch(url+"/auth/v1/user",{headers:{apikey:anon,Authorization:"Bearer "+token}});
 if(!who.ok)return reply({error:"Phiên đăng nhập không hợp lệ."},401);
 const caller=await who.json(),h={apikey:key,Authorization:"Bearer "+key,"Content-Type":"application/json"};
 const pr=await fetch(url+"/rest/v1/profiles?id=eq."+encodeURIComponent(caller.id)+"&select=id,role",{headers:h}),profiles=await pr.json();
 if(!pr.ok||!Array.isArray(profiles)||profiles[0]?.role!=="teacher")return reply({error:"Chỉ giáo viên đã được phân quyền mới được cấp tài khoản."},403);
 let b:Record<string,unknown>;try{b=await req.json();}catch{return reply({error:"Dữ liệu không hợp lệ."},400);}
 const name=String(b.display_name??"").trim(),email=String(b.email??"").trim().toLowerCase(),password=String(b.password??""),cls=String(b.class_name??"").trim();
 if(!name||name.length>100||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||password.length<8||password.length>72||!cls||cls.length>40)return reply({error:"Kiểm tra họ tên, email, lớp và mật khẩu (8–72 ký tự)."},400);
 const cr=await fetch(url+"/rest/v1/teacher_classes?teacher_id=eq."+encodeURIComponent(caller.id)+"&class_name=eq."+encodeURIComponent(cls)+"&select=id",{headers:h}),assigned=await cr.json();
 if(!cr.ok||!Array.isArray(assigned)||!assigned.length)return reply({error:"Lớp này chưa được phân công cho giáo viên."},403);
 const made=await fetch(url+"/auth/v1/admin/users",{method:"POST",headers:h,body:JSON.stringify({email,password,email_confirm:true,user_metadata:{display_name:name}})}),user=await made.json();
 if(!made.ok)return reply({error:user?.msg||user?.message||"Không thể tạo tài khoản."},made.status);
 const upd=await fetch(url+"/rest/v1/profiles?id=eq."+encodeURIComponent(user.id),{method:"PATCH",headers:{...h,Prefer:"return=minimal"},body:JSON.stringify({display_name:name,role:"student",class_name:cls})});
 if(!upd.ok){await fetch(url+"/auth/v1/admin/users/"+encodeURIComponent(user.id),{method:"DELETE",headers:h});return reply({error:"Không gán được lớp; hệ thống đã hoàn tác tài khoản."},500);}
 return reply({success:true,user_id:user.id,email:email,display_name:name,class_name:cls},201);
});