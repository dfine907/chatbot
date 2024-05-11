
function addMessage(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatLog.append(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
}
function handleInput() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    addMessage(message, 'You');
    // This is were function needs to go to send message to Chattybot and get response
    userInput.value = ''; 
}


document.getElementById('send-btn').addEventListener('click', handleInput);


document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleInput();
    }
});
