let email = document.querySelector("#email");
let pw= document.querySelector("#pass");
let submitbtn= document.querySelector(".submitbtn");
let registerbtn=document.querySelector(".registerbtn");
let message=document.querySelector(".message");
let loginbtn=document.querySelector(".loginbtn");

window.addEventListener("load",function(){
    submitbtn.addEventListener("click",submitbtnHandler);
    registerbtn.addEventListener("click",registerbtnHandler);

})
function registerbtnHandler(){
    window.location.href="/home/nitish/Downloads/Campuscanteen-main/register/register.html";

}
async function submitbtnHandler(e){
    try{
        e.preventDefault();
        if(email.value && pw.value){
        console.log(email.value,pw.value);
        let obj = await axios.post( "https://foodcolony.herokuapp.com/user/login" , {email:email.value , password:pw.value});
        console.log(obj);
        if(obj.data.data){
            window.location.href="/home/nitish/Downloads/Campuscanteen-main/menu/menu.html";

        }
        else{
            message.innerHTML=obj.data.message;

        }
    }
    }catch(error){
        HTMLFormControlsCollection.log(error);
    }
}