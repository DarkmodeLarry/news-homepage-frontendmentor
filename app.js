const close = document.getElementById('close')
const navSlide = document.getElementById('nav-slide')
const menuBtn = document.getElementById('menu-button')

menuBtn.addEventListener('click', () => {
  if (navSlide.style.display === 'none') {
    navSlide.style.display = 'block'
    navSlide.setAttribute('aria-hidden', 'false')
  } else {
    navSlide.style.display = 'none'
    navSlide.setAttribute('aria-hidden', 'true')
  }
})

close.addEventListener('click', function () {
  if (navSlide.style.display === 'block') {
    navSlide.style.display = 'none'
    navSlide.setAttribute('aria-hidden', 'true')
  } else {
    navSlide.style.display === 'none'
    navSlide.setAttribute('aria-hidden', 'false')
  }
})
