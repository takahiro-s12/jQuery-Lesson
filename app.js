$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'width': '200px',
      'height': '100px',
      'background-color': '#0000FF'
    }).slideUp();
  });
});