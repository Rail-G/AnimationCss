export default class Chat {
  constructor() {
    this.clbMainBtn = document.querySelector('.clb-main-btn');
    this.chatBlock = document.querySelector('.chat-block');
    this.closeChat = document.querySelector('.chat-close');
  }
  init() {
    this.clbMainBtn.addEventListener('click', () => {
      this.chatBlock.classList.remove('chat-active');
      this.clbMainBtn.classList.remove('clb-active');
    });
    this.closeChat.addEventListener('click', () => {
      this.chatBlock.classList.add('chat-active');
      this.clbMainBtn.classList.add('clb-active');
    });
  }
}
