function burger(){
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    var menu = $('.main-menu');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
    return false;
  });

  $(window).resize(function() {
    var menu = $('.main-menu');
    var w = $(window).width();
    if(w > 540) {
      menu.removeAttr('style');
      $('.burger').removeClass('open');
      $('.burger').removeClass('active');
    }
  });
}

function burgerFooter(){
  $('.burger-foot').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('foot-open');
    var menu = $('.footer-list-wrap');

    if ($('.burger-foot').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
    return false;
  });

  $(window).resize(function() {
    var menu = $('.footer-list-wrap');
    var w = $(window).width();
    if(w > 540) {
      menu.removeAttr('style');
      $('.burger-foot').removeClass('foot-open');
      $('.burger-foot').removeClass('active');
    }
  });
}

function loyaltyTabs(){
  $('.tab-item').not(':first').hide();
  $('.js-tab .tab').click(function(){
    $('.js-tab .tab').removeClass('active').eq($(this).index()).addClass('active');
    $('.js-tab .tab-item').hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass('active');
}

function scrollHeader(){
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if(scrolled > 30){
      $('.header').addClass('active');
    }else{
      $('.header').removeClass('active');
    }
  });
}

var w = $(window).width();
if(w < 540) {
  $(document).click( function(event){
    if( $(event.target).closest(".main-menu").length ) 
    return;
    $(".main-menu").slideUp("fast");
    $('.burger').removeClass('open active');
    event.stopPropagation();

    if( $(event.target).closest(".footer-list-wrap").length ) 
    return;
    $(".footer-list-wrap").slideUp("fast");
    $('.burger-foot').removeClass('foot-open active');
    event.stopPropagation();
  });
}

$(document).ready(function(){
  burger();
  burgerFooter();
  
  var myMap;
  var myMap2;
  ymaps.ready(function() {
    if ($('.partner').length ) {
      myMap = new ymaps.Map("mymap", {
          center: [55.755814, 37.617635],
          zoom: 15
      });
      myMap2 = new ymaps.Map("mymap2", {
          center: [55.755814, 37.617635],
          zoom: 15
      });
      var myPlacemark = new ymaps.Placemark([55.755814, 37.617635]);
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
    }
  });

  scrollHeader();

  $(".phone").mask("+7(999) 999-99-99");
  $("#card").mask("999-999");
  $(".sms").mask("9 9 9 9");

  $(".phone").on('change', function() {
    var phone = $(this).val().replace(/\D/g, '');
    console.log(phone);
  });
  
  loyaltyTabs();

  $('#contactsMap').fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    autoSize:true,
    width : 1170,
    height : 516,
    maxWidth : '100%',
    wrapCSS:'contacts-popup',
    'closeBtn' : false,
    fitToView:true,
    padding:'0',
    afterShow: function(){
      ymaps.ready(function() {
        myMap2 = new ymaps.Map("mymap2", {
            center: [55.202046, 34.303699],
            zoom: 17,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([55.202046, 34.303699]);
        myMap2.geoObjects.add(myPlacemark);
      });
    }
  });

});

$(window).load(function(){

});

$(window).resize(function(){

});