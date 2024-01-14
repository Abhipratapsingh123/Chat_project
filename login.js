

const apiURL = 'https://947d3923-78bd-4d3e-8961-7595662f8ab1-00-2oa1p6mpkxim5.picard.replit.dev'
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', tryLogin);

async function tryLogin(){
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');

    const response = await fetch(`${apiURL}/login`, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameInput.value, password: passwordInput.value })
    });

    const responseData = await response.json()
    console.log(responseData,responseData.msg);
    if(responseData.msg === "Password Correct"){
        localStorage.setItem('loginDetails',JSON.stringify({name:usernameInput.value}))
        window.location.href = './index.html'
    }else{

    }
}
