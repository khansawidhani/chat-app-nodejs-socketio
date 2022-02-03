
var socket = io();

const submit = document.getElementById('send');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');
const audio = new Audio('/res/messenger_tone.mp3');


const append = (message, sender,  position) => {
    var messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.classList.add(position);
    var messageFrom = document.createElement('h4');
    messageFrom.innerText = sender;  
    messageFrom.classList.add('message-from');
    var messagePara = document.createElement('p');
    messagePara.innerText = message;
    messagePara.classList.add('message');
    messageBox.append(messageFrom); 
    messageBox.append(messagePara)
    messageContainer.append(messageBox);
    console.log(messageBox);
    if(position == 'left') {
        audio.play();
    }
}

console.log(submit);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    append('hello world', 'Inayat', 'left');
    console.log('done');
    socket.emit('')
})
