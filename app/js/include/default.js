$(window).on('scroll', function() {
  // Active header
  if( $(this).scrollTop() > 150) {
    $('.header').addClass('is-active')
  } else {
    $('.header').removeClass('is-active')
  }
  
  // Active btn to top
  if( $(this).scrollTop() > 300) {
    $('.back-to-top').addClass('show')
  } else {
    $('.back-to-top').removeClass('show')
  }
})

// Scroll next section
$('.js-scroll-next').click(function(e) {
  let next = $(this).closest('.hero').next('#popular').offset().top;
  $('html, body').animate({scrollTop: next - 102}, 'slow');
  e.preventDefault();
})
