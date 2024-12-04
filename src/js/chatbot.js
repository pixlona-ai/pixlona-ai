export class Chatbot {
  constructor() {
    this.container = document.getElementById('chatbot-container');
    this.toggle = document.getElementById('chatbot-toggle');
    this.close = document.getElementById('chatbot-toggle-close');
    this.messages = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.send = document.getElementById('chatbot-send');
    
    this.responses = {
      'hi': 'Hello! Welcome to Pixlona AI. How can I assist you today?',
      'hello': 'Hi there! What can I help you with?',
      'services': 'We offer AI-generated images and custom chatbot development. Would you like more details?',
      'pricing': 'Our pricing is tailored to your needs. Please schedule a consultation to discuss further.',
      'image generation': 'Our AI can generate high-quality images in seconds. Want to learn more?',
      'contact': 'You can contact us via email at pixlonaphotography@gmail.com.',
      'default': 'I\'m your Pixlona AI assistant. I can help you with our services, image generation, and more.'
    };

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.toggle.addEventListener('click', () => this.showChatbot());
    this.close.addEventListener('click', () => this.hideChatbot());
    this.send.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  showChatbot() {
    this.container.style.display = 'flex';
    setTimeout(() => {
      this.container.style.opacity = '1';
      this.container.classList.add('translate-y-0');
    }, 10);
    this.toggle.style.display = 'none';
  }

  hideChatbot() {
    this.container.style.opacity = '0';
    this.container.classList.remove('translate-y-0');
    setTimeout(() => {
      this.container.style.display = 'none';
      this.toggle.style.display = 'block';
    }, 300);
  }

  addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type, 'animate-fade-in');
    messageElement.textContent = message;
    this.messages.appendChild(messageElement);
    this.messages.scrollTop = this.messages.scrollHeight;
  }

  getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    for (let key in this.responses) {
      if (lowerMessage.includes(key)) {
        return this.responses[key];
      }
    }
    return this.responses['default'];
  }

  sendMessage() {
    const userMessage = this.input.value.trim();
    if (!userMessage) return;

    this.addMessage(userMessage, 'user-message');
    this.input.value = '';

    setTimeout(() => {
      const botResponse = this.getBotResponse(userMessage);
      this.addMessage(botResponse, 'bot-message');
    }, 800);
  }
}