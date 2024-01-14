window.onload = loginCheck;

function loginCheck(){
    if(!localStorage.getItem("loginDetails")){
        window.location.href = './login.html'
    }
}