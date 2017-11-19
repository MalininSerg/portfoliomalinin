
  $(function() {
    $('.menu__button-button').on('click', function() {
      $(this).closest('.header__left').toggleClass('show-menu');
    });
  });

