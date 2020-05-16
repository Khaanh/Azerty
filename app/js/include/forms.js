$('.js-showPass').on('click', function() {
  $(this).toggleClass('is-show')
  let passField = $(this).prev();

  if (passField.attr('type') == 'text') {
    passField.attr('type','password')
  } else {
    passField.attr('type','text')
  }
})