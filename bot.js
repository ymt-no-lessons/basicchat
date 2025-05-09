function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  if (!message) return;

  addMessage('user', message);
  input.value = '';

  const botReply = getBotReply(message);
  addMessage('bot', botReply);
}

function addMessage(sender, text) {
  const chatLog = document.getElementById('chat-log');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender;
  messageDiv.textContent = text;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes('こんにちは')) {
    return 'こんにちは！ご用件は何ですか？';
  } else if (msg.includes('名前')) {
    return '私はシンプルなチャットボットです。';
  } else {
    return 'すみません、よくわかりません。';
  }
}



