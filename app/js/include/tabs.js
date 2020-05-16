$('.js-tabsLink').on('click', function(e) {
  let id = $(this).attr('href');
  $(this).closest('.tabs').siblings('.personal-inner').find('.holder-content').find('.tabcontent').removeClass('is-display')
  $(this).addClass('is-active').siblings('.js-tabsLink').removeClass('is-active')
  $('#' + id).addClass('is-display')
  e.preventDefault();
})

$('.js-programsLink').on('click', function(e) {
  e.preventDefault();
  let id = $(this).attr('href');
  $(this).parent().siblings().find('.programs-content').removeClass('is-display');
  $(this).addClass('is-active').siblings('.js-programsLink').removeClass('is-active');
  $('#' + id).addClass('is-display')
})