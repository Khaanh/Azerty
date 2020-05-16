// Validation input
if ($('.js-validateTel').length) {
  $('.js-validateTel').mask('(+000)-000-00-00');
}


// Toggle Password
$('.js-showPass').on('click', function() {
  $(this).toggleClass('is-show')
  let passField = $(this).prev();

  if (passField.attr('type') == 'text') {
    passField.attr('type','password')
  } else {
    passField.attr('type','text')
  }
})
