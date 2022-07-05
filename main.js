$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth')
  })

  // toggle menu/navbar script
  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  $('.container').click(() => {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['Gamer', 'Desenvolvedor', 'Front-end', 'Freelancer', 'T.I'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed = new Typed('.typing-2', {
    strings: ['Gamer', 'Desenvolvedor', 'Front-end', 'Freelancer', 'T.I'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #about .title, #about .text,
  #services .title, #services .card,
  #project .title,
  #contact .title, #contact .text
  `,
  { interval: 100 }
)
