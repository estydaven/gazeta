$('.menu-icon').click(function () {
  if ($('.header__nav').is(':hidden')) {
    $('.header__nav').show('slideToggle');
    $('.header__logo').addClass('header__logo_mob');
    $('.header').addClass('header_mob');
    $('.menu-icon__burger').addClass('menu-icon__burger_open');
  } else {
    $('.header__nav').hide('slideToggle');
    $('.header__logo').removeClass('header__logo_mob');
    $('.header').removeClass('header_mob');
    $('.menu-icon__burger').removeClass('menu-icon__burger_open');
  }
});

$(document).ready(function () {
  var flag = true;
  function showPopup() {
    $(window).mouseout(function (e) {
      if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
        $('.modal').fadeIn(300);
        flag = false;
      }
    });
    $(".modal-flex").on('click', function (event) {
      if ($(event.target).is($(".modal-flex")) || $(event.target).is(".modal-close")) {
        $('.modal').fadeOut(300);
      }
    });
  }

  //проверка браузера с которого зашли и разрешения экрана
  if (($(window).width() > 1023)) {
    showPopup();
  }
});
var close = document.querySelector(".modal-close");
var button = document.querySelector(".modal-btn");
function hidePopup() {
  $(".modal").fadeOut(300);
}

button.addEventListener('click', hidePopup);
close.addEventListener('click', hidePopup);


let sizeNews = 120,
    newsContent= $('.main-title'),
    newsText = newsContent.text();
    
if(newsText.length > sizeNews){
	newsContent.text(newsText.slice(0, sizeNews) + ' ...');
}