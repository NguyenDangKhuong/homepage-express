
//add animation on load
window.onload = function () {
  function loadAnimate(elmClass, newClass){
    $('.'+elmClass).addClass(`${newClass}`)
  }
  setTimeout(function () {
    loadAnimate('header', 'animate-header')
    loadAnimate('top-background', 'animate-width-left-to-right')
    loadAnimate('top-background-img', 'animate-load-bottom')
  }, 1500)
}


//add animation on scroll
$(window).scroll(function () {

  function scrollAnimate(elmClass, newClass) {
    var hT = $('.' + elmClass).offset().top,
      hH = $('.' + elmClass).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if (wS + 450 > (hT + hH - wH)) {
      $('.' + elmClass).addClass(`${newClass}`)
    }
  }

  scrollAnimate('value-for-you', 'animate-scroll-bottom')
  scrollAnimate('value-challenge', 'animate-scroll-bottom')
  scrollAnimate('value-no1', 'animate-scroll-bottom')
  scrollAnimate('mission-wrapper', 'animate-width-right-to-left')
  scrollAnimate('product-background','animate-width-right-to-left')
  scrollAnimate('our-product', 'animate-scroll-bottom')
  scrollAnimate('product-list', 'animate-fade-in')

})

