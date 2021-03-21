class Phopup {
  constructor(selector = '.phopup-main', options = {}) {
    this.$el = document.querySelector(selector)
    this.options = options
    
    this.init()
  }
  
  opener() {
    const btn = document.querySelector(this.options.opener || '.phopup-open')
    
    this.$over.addEventListener('click', () => {
      this.open()
      document.body.style.position = 'static'
    })
    if (btn) {
      btn.addEventListener('click', () => {
        this.open()
        document.body.style.position = 'fixed'
      })
    }
  }
  
  open() {
    this.$el.classList.toggle('open')
    this.$over.classList.toggle('open')
  }
  
  init() {
    document.body.insertAdjacentHTML('beforeend', '<div class="phopup-over"></div>')
    this.$over = document.querySelector('.phopup-over')
    this.opener()
  }
}