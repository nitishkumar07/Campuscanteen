let username= document.querySelector("#name");
let email = document.querySelector("#email");
let phone=document.querySelector("#phone");
let pw=document.querySelector("pw");
let cpw=document.querySelector("cpw")
let eid=document.querySelector("#eid");
let submitbtn=document.querySelector(".submitbtn");
let loginbtn = document.querySelector(".loginbtn");
let mess=document.querySelector(".message");
let registerbtn=document.querySelector(".registerbtn");
window.addEventListener("load",function(){
    loginbtn.addEventListener("click",loginbtnHandler);
    registerbtn.addEventListener("click",signupBtnHandler);
})
function loginbtnHandler(){
    window.location.href="../login.html";

}
function signupBtnHandler (e){
    e.preventDefault();
    if(username.value && email.value && pw.value && cpw.value)
    {
        window.location.href="../menu.html";
    }
    else{
        mess.innerHTML="All fiends are mandatory!";
    }
    
}
