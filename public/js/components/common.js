
AOS.init();

//on sroll event
$(window).scroll(function () {
  //scale header on scroll
  header = document.getElementById('header')
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.className = 'header header-mini'
    }
    else {
      header.className = 'header header-full'
    }
  }, false);


  // animate on scroll
  function scrollAnimate(elmClass, newClass) {
    var hT = $('.' + elmClass).offset().top,
      hH = $('.' + elmClass).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if (wS + 450 > (hT + hH - wH)) {
      $('.' + elmClass).addClass(`${newClass}`)
    }
  }

  // scrollAnimate('footer', 'animate-scroll-bottom')
})

window.onload = function () {
  function loadAnimate(elmClass, newClass){
    $('.'+elmClass).addClass(`${newClass}`)
  }
  setTimeout(function () {
    loadAnimate('header', 'animate-header')
  }, 1500)
}



