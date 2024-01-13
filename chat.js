const sendMessageButton = document.getElementById('sendMessageButton')
const chatMessage = document.getElementById('chatMessage')
const msgContainer = document.getElementsByClassName('msgContainer')[0]
const alertBox = document.getElementById('alertBox')
const apiURL = 'https://947d3923-78bd-4d3e-8961-7595662f8ab1-00-2oa1p6mpkxim5.picard.replit.dev'
const sender = 'abhi'
const receiver = 'chirag'


async function sendMessage() {
    if (!chatMessage.value) {
        //Display empty message logic here
        emptyMessageSent()
        return;
    }
    const response = await fetch(`${apiURL}/send`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId: msgContainer.children.length + 1, sender: sender, receiver: receiver, message: chatMessage.value })
    });


    chatMessage.value = ''
}

function emptyMessageSent() {
    alertBox.style.display = 'block'
    alertBox.textContent = 'Cannot Send Empty Message'

    setTimeout(() => {
        alertBox.textContent = ''
        alertBox.style.display = 'none'
    }, 2000)
}

function newMessages() {
    //Add logic to get the array of messages
    //.fetch('ururur@repl.it.com', METHOD = 'GET')

    //Check for new messages and display if any
}


async function loadMessages() {
    const response = await fetch(`${apiURL}/messages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender: sender, receiver: receiver })
    });

    const responseData = await response.json()
    if (response.status != 200) {
        console.log("Kuch to error h")
        return
    }

    msgContainer.innerHTML = ''
    responseData.forEach(function (messageJson) {
        var messageContent;
        if (messageJson.sender == sender.toLowerCase()) {
            messageContent = `<div class="sender"><span>${messageJson.sender}:</span>${messageJson.message}</div>`
        } else {
            messageContent = `<div><span>${messageJson.sender}:</span>${messageJson.message}</div>`
        }
        msgContainer.innerHTML += messageContent
    })



}

sendMessageButton.addEventListener('click', sendMessage);
chatMessage.addEventListener('keydown', () => {
    if (event.key === 'Enter') {
        sendMessage()
    }
})
setInterval(loadMessages, 250)
