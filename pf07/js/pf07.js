$(function () {
  // 메인 슬라이더
  $('.main_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    fade: true,
  });

  // 모바일 메뉴 toggle
  const isMobile = () => window.innerWidth <= 1024;

  $('.gnb-menu > li > a').on('click', function (e) {
    if (isMobile()) {
      const submenu = $(this).next('.gnb-submenu');
      if (submenu.length > 0) {
        e.preventDefault();

        // 열려 있던 다른 메뉴 닫기
        $('.gnb-submenu').not(submenu).slideUp();
        submenu.stop().slideToggle();
      }
    }
  });

  // PC hover용 fallback: 서브메뉴 초기화
  $(window).on('resize', function () {
    if (!isMobile()) {
      $('.gnb-submenu').removeAttr('style');
    }
  });
});
