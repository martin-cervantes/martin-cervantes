$(document).ready(function() {
  /* Change active when click */
  $('.nav-item').click(function() {
    $('.nav-item.active').removeClass('border border-primary rounded active');
    $(this).addClass('border border-primary rounded active');
  });

  /* Change active when scroll */
  $('.home').mouseover(function(){
    $('.nav-item.active').removeClass('border border-primary rounded active');
    $('.nav-item.home').addClass('border border-primary rounded active');
  });

  $('.projects').mouseover(function(){
    $('.nav-item.active').removeClass('border border-primary rounded active');
    $('.nav-item.projects').addClass('border border-primary rounded active');
  });

  $('.contact').mouseover(function(){
    $('.nav-item.active').removeClass('border border-primary rounded active');
    $('.nav-item.contact').addClass('border border-primary rounded active');
  });

  /* Show project information */
  $('.project').mouseover(function() {
    $(this).find('.project-info').stop().slideDown('slow');
  });
  
  $('.project-info').mouseout(function() {
    $('.project-info').slideUp('slow');
  });
});
