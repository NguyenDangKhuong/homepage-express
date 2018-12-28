jQuery(document).ready(function () {
  jQuery(".downbtn, .menu1 li a, .sec1 .mbr-gallery-filter li a").on("click", function (e) {
    if ("" !== this.hash) {
      e.preventDefault();
      var t = this.hash;
      jQuery("html, body").animate({scrollTop: jQuery(t).offset().top}, 800, function () {
        window.location.hash = t
      })
    }
  })
}), $(document).ready(function () {
  function e() {
    windowHeight = $(window).innerHeight(), $(".banner_img").css("min-height", windowHeight)
  }

  e(), $(window).resize(function () {
    e()
  })
}), $(document).ready(function () {
  $("#parentHorizontalTab").easyResponsiveTabs({
    type: "accordion",
    width: "auto",
    fit: !0,
    tabidentify: "hor_1",
    activate: function (e) {
      var t = $(this), i = $("#nested-tabInfo");
      $("span", i).text(t.text()), i.show()
    }
  }), $("#ChildVerticalTab_1").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: !0,
    tabidentify: "ver_1",
    activetab_bg: "#fff",
    inactive_bg: "#F5F5F5",
    active_border_color: "#c1c1c1",
    active_content_border_color: "#5AB1D0"
  }), $("#parentVerticalTab").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: !0,
    closed: "accordion",
    tabidentify: "hor_1",
    activate: function (e) {
      var t = $(this), i = $("#nested-tabInfo2");
      $("span", i).text(t.text()), i.show()
    }
  }), $("#parentVerticalTab2").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: !0,
    closed: "accordion",
    tabidentify: "hor_1",
    activate: function (e) {
      var t = $(this), i = $("#nested-tabInfo2");
      $("span", i).text(t.text()), i.show()
    }
  })
}), $(".center").slick({
  centerMode: !0,
  centerPadding: "127px",
  slidesToShow: 1,
  responsive: [{
    breakpoint: 1023,
    settings: {arrows: !0, centerMode: !1, centerPadding: "40px", slidesToShow: 1}
  }, {breakpoint: 480, settings: {arrows: !0, centerMode: !1, centerPadding: "10px", slidesToShow: 1}}]
}), $(".mf-office-location-slider").each(function () {
  $(this).slick({
    infinite: !1,
    dots: !1,
    arrows: !0,
    slide: "li",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    autoplaySpeed: 5e3,
    focusOnSelect: !0,
    mobileFirst: !0,
    responsive: [{breakpoint: 1200, settings: {slidesToShow: 4, slidesToScroll: 1}}, {
      breakpoint: 1024,
      settings: {slidesToShow: 3, slidesToScroll: 1}
    }, {breakpoint: 600, settings: {slidesToShow: 2, slidesToScroll: 1}}, {
      breakpoint: 480,
      settings: {slidesToShow: 1, slidesToScroll: 1}
    }]
  })
}), $("#topmenu1").click(function () {
  $("#service-menu").show("fast")
}), $("#topmenu2").click(function () {
  $("#products-menu").show("fast")
}), $(".closetopmenu").click(function () {
  $(".top-menu-area").hide("fast")
});