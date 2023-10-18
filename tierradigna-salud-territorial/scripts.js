var ancho;
var ancho2;

$(document).ready(function () {
  document.getElementById("texto").style.fontSize = document.body.clientWidth/80 + 'px';
  document.getElementById("texto2").style.fontSize = document.body.clientWidth/78 + 'px';

  ancho = document.body.clientWidth/88;
  ancho2 = document.body.clientWidth/75;

  $('.texto a').css({"font-size": ancho + 'px'});
  $('.texto2 a').css({"font-size": ancho2 + 'px'});

  function Resize() {
  document.getElementById("texto").style.fontSize = document.body.clientWidth/80 + 'px';
  document.getElementById("texto2").style.fontSize = document.body.clientWidth/78 + 'px';
  ancho = document.body.clientWidth/88;
  ancho2 = document.body.clientWidth/75;
  $('.texto a').css({"font-size": ancho  + 'px'});
  $('.texto2 a').css({"font-size": ancho2 + 'px'});
  }

  window.onresize=Resize;

  $('.menu-btn').click(function(){
    $('.menu').css({"right": 0, "opacity": 1});
  });

  $('.cerrar-btn, .menu a').click(function(){
    $('.menu').css({"right": "-100%", "opacity": 0});
  });

  $('.menu a').click(scrolling);

  function scrolling() {
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top
        }, 800);
        return false;
  }

});
