class Phopup {
  constructor(selector = '.phopup-main', options = {}) {
    this.$el = document.querySelector(selector)
    this.options = options
    
    this.init()
    this.$over = document.querySelector('.phopup-over')
  }
  
  opener() {
    const btn = document.querySelector(this.options.opener || '.phopup-open')
    
    this.$over.addEventListener('click', () => this.open())
    if (btn) {
      btn.addEventListener('click', () => {
        this.open()
        (function pointerEvents() {
          const $wrapper = document.querySelector('.wrapper')
          
          this.$over.classList.contains('open')
            ? $wrapper.style.pointerEvents = 'none' 
            : $wrapper.style.pointerEvents = 'auto' 
        }())
      })
    }
  }
  
  open() {
    this.$el.classList.toggle('open')
    this.$over.classList.toggle('open')
  }
  
  init() {
    document.body.insertAdjacentHTML('beforeend', '<div class="phopup-over"></div>')
    this.opener()
  }
}