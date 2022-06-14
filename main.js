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
