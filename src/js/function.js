export default () => {
  $(function() {
    // loading=>top animation
    window.onload = function() {
      setTimeout(function(){
        // PC
        $('#ka_pc').removeClass('pc-navi__ka-navi_loading').addClass('pc-navi__ka-navi_top');
        $('#about_pc').removeClass('pc-navi__about-navi_loading').addClass('pc-navi__about-navi_top');
        $('#works_pc').removeClass('pc-navi__works-navi_loading').addClass('pc-navi__works-navi_top');
        $('#contact_pc').removeClass('pc-navi__contact-navi_loading').addClass('pc-navi__contact-navi_top');
        //- / PC

        // SP
        $('#ka_sp').removeClass('sp-navi__ka-navi_loading').addClass('sp-navi__ka-navi_top');
        $('#about_sp').removeClass('sp-navi__about-navi_loading').addClass('sp-navi__about-navi_top');
        $('#works_sp').removeClass('sp-navi__works-navi_loading').addClass('sp-navi__works-navi_top');
        $('#contact_sp').removeClass('sp-navi__contact-navi_loading').addClass('sp-navi__contact-navi_top');
        //- / SP
      },1500);
    }

    // top=>navi animation
    $('#about_pc, #works_pc, #contact_pc, #about_sp, #works_sp, #contact_sp').on( "click", function() {
      // PC
      $('#ka_pc').removeClass('pc-navi__ka-navi_top').addClass('pc-navi__ka-navi_contents');
      $('#about_pc').removeClass('pc-navi__about-navi_top').addClass('pc-navi__about-navi_contents');
      $('#works_pc').removeClass('pc-navi__works-navi_top').addClass('pc-navi__works-navi_contents');
      $('#contact_pc').removeClass('pc-navi__contact-navi_top').addClass('pc-navi__contact-navi_contents');
      //- / PC

      // SP
      $('#about_sp').removeClass('sp-navi__about-navi_top').addClass('sp-navi__about-navi_contents');
      $('#works_sp').removeClass('sp-navi__works-navi_top').addClass('sp-navi__works-navi_contents');
      $('#contact_sp').removeClass('sp-navi__contact-navi_top').addClass('sp-navi__contact-navi_contents');
      //- / SP
    });

    // top=>contents fade-in
    // PC
    $('#about_pc').on( "click", function() {
      if ($('.contents__works-section, .contents__contact-section').hasClass('is-fadein')) {
        $('.contents__works-section, .contents__contact-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__about-section').addClass('is-fadein');
      },500);
    });

    $('#works_pc').on( "click", function() {
      if ($('.contents__about-section, .contents__contact-section').hasClass('is-fadein')) {
        $('.contents__about-section, .contents__contact-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__works-section').addClass('is-fadein');
      },500);
    });

    $('#contact_pc').on( "click", function() {
      if ($('.contents__about-section, .contents__works-section').hasClass('is-fadein')) {
        $('.contents__about-section, .contents__works-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__contact-section').addClass('is-fadein');
      },500);
    });
    //- / PC

    // SP
    $('#about_sp').on( "click", function() {
      if ($('.contents__works-section, .contents__contact-section').hasClass('is-fadein')) {
        $('.contents__works-section, .contents__contact-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__about-section').addClass('is-fadein');
      },500);
    });

    $('#works_sp').on( "click", function() {
      if ($('.contents__about-section, .contents__contact-section').hasClass('is-fadein')) {
        $('.contents__about-section, .contents__contact-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__works-section').addClass('is-fadein');
      },500);
    });

    $('#contact_sp').on( "click", function() {
      if ($('.contents__about-section, .contents__works-section').hasClass('is-fadein')) {
        $('.contents__about-section, .contents__works-section').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('.contents, .contents__contact-section').addClass('is-fadein');
      },500);
    });
    //- / SP

    // contents => top
    // PC
    $('#ka_pc').on( "click", function() {
      if ($('.contents__about-section, .contents__works-section, .contents__contact-section').hasClass('is-fadein')) {
        $('.contents').removeClass('is-fadein');
      }
      setTimeout(function(){
        $('#ka_pc').removeClass('pc-navi__ka-navi_contents').addClass('pc-navi__ka-navi_top');
        $('#about_pc').removeClass('pc-navi__about-navi_contents').addClass('pc-navi__about-navi_top');
        $('#works_pc').removeClass('pc-navi__works-navi_contents').addClass('pc-navi__works-navi_top');
        $('#contact_pc').removeClass('pc-navi__contact-navi_contents').addClass('pc-navi__contact-navi_top');
      },250);
    });
  });
}
