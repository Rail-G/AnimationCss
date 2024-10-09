export default class Collapse {
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
