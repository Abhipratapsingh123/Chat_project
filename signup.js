

const apiURL = 'https://947d3923-78bd-4d3e-8961-7595662f8ab1-00-2oa1p6mpkxim5.picard.replit.dev'
const signUpButton = document.getElementById('signUpButton');

signUpButton.addEventListener('click', trySignUp);

async function trySignUp(){
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');

    const response = await fetch(`${apiURL}/signup`, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: usernameInput.value, password: passwordInput.value })
    });

    const responseData = await response.json()
    console.log(responseData,responseData.msg);
    if(responseData.msg === "Successfully Signed Up"){
        localStorage.setItem('loginDetails',JSON.stringify({name:usernameInput}))
        window.location.href = './index.html'
    }
}
