/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/chat.js
class Chat {
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
;// ./src/js/collapse.js
class Collapse {
  constructor() {
    this.col = document.querySelector('.collapse-text-block');
    this.btn = document.querySelector('button');
  }
  init() {
    this.btn.addEventListener('click', () => {
      this.col.classList.toggle('collapse-active');
    });
  }
}
;// ./src/js/like.js
class Like {
  constructor() {
    this.likeBlock = document.querySelector('.like-block');
    this.likeBtn = this.likeBlock.querySelector('.heart-spawn-btn');
    this.trajectorysArr = ['first', 'second', 'thirth', 'fourth'];
    this.numArr = [];
  }
  init() {
    this.getRandomNum = this.getRandomNum.bind(this);
    this.numArr = this.range(1, 60);
    this.likeBtn.addEventListener('click', () => {
      const randomNum = this.getRandomNum();
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      div1.classList.add('for-correct-block');
      const randInt = Math.round(Math.random() * (this.numArr.length - 1));
      div1.style.left = this.numArr[randInt] + 'px';
      const className = [`heart-icon`, `random-like-${this.trajectorysArr[randomNum]}`];
      className.forEach(elem => div2.classList.add(elem));
      div2.textContent = '❤️';
      div1.append(div2);
      this.likeBlock.insertAdjacentElement('afterbegin', div1);
      setTimeout(() => {
        div1.remove();
      }, 450);
    });
  }
  range(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  getRandomNum() {
    return Math.round(Math.random() * (this.trajectorysArr.length - 1));
  }
}
;// ./src/js/app.js



const collape = new Collapse();
collape.init();
const chat = new Chat();
chat.init();
const like = new Like();
like.init();
;// ./src/index.js


/******/ })()
;