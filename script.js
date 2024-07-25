document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chatWindow');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    const loadMessages = () => {
        chatWindow.innerHTML = '';
        messages.forEach(message => {
            displayMessage(message);
        });
    };

    const displayMessage = (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.user}: ${message.text}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const addMessage = (user, text) => {
        const message = { user, text };
        messages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        displayMessage(message);
    };

    sendButton.addEventListener('click', () => {
        const text = messageInput.value.trim();
        if (text) {
            addMessage('Utente', text);
            messageInput.value = '';
            setTimeout(() => {
                addMessage('Bot', 'Risposta automatica: ' + text);
            }, 1000);
        }
    });

    loadMessages();
});
