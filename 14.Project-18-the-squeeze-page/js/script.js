$('.menu').on('click', function () {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
})

$('.nav').on('click', function () {
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
})