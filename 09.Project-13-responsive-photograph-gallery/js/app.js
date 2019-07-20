$('#view-work').on('click', () => {
  const images = $('#img').position().top;
  $('html, body').animate({
    scrollTop: images
  }, 900)
})