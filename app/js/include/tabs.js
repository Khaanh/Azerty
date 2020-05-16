$('.js-tabsLink').on('click', function(e) {
  let id = $(this).attr('href')
  $(this).closest('.tabs').siblings('.personal-inner').find('.holder-content').find('.tabcontent').removeClass('is-display')
  $(this).addClass('is-active').siblings('.js-tabsLink').removeClass('is-active')
  $('#' + id).addClass('is-display')
  e.preventDefault();
})