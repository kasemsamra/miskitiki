$(document).ready(function() {
  $('body').css('overflow', 'hidden');

  setTimeout(function() {
      $('#loading-screen').css('display', 'none');
      $('#content').css('display', 'block');
      
      $('body').css('overflow', '');
  }, 1500);
});
