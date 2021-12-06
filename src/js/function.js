$(function() {
  // loading=>top
  window.onload = function() {
    setTimeout(function(){
      // PC
      $('#ka_pc').removeClass('pc-navi__ka-navi_loading').addClass('pc-navi__ka-navi_top');
      $('#about_pc').removeClass('pc-navi__about-navi_loading').addClass('pc-navi__about-navi_top');
      $('#works_pc').removeClass('pc-navi__works-navi_loading').addClass('pc-navi__works-navi_top');
      $('#contact_pc').removeClass('pc-navi__contact-navi_loading').addClass('pc-navi__contact-navi_top');
    },1500);
  }
});
