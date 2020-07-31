/*java file*/
const sendBtn = document.querySelector('#sendBtn');
const messageInput = document.querySelector('#messageInput');
const messageOutput = document.querySelector('#messageOutput');

sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
    let content = messageInput.value; 
    if(content === ''){
        alert('Please Enter a valid value that isnt empty.')

    }
    else{
        messageOutput.innerHTML = content; 
        //get the value, and place the value
        messageInput.value = '';
    }
}