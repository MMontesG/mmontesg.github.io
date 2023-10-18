var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var i6 = 0;
var i7 = 0;

$(document).ready(function() {
    document.getElementById("text").style.fontSize = document.body.clientWidth/13 + '%';

    var stage = document.getElementsByClassName('stage');

    stageHeight();

    window.onresize=Resize;

    function Resize() {
        document.getElementById("text").style.fontSize = document.body.clientWidth/13 + '%';
        stageHeight();
    }

    function stageHeight() {
      for (var i = 0; i < stage.length; i++) {
        stage[i].style.height = window.innerHeight + 'px';
      }
    }

    var intervalo = setInterval(runSlider, 8000);

    $('#menu-btn').click(abrirMenu);
    $('#menu-close').click(cerrarMenu);
    $('.pedidos-btn').click(pedidos);
    $('.salir-ped').click(salirP);

    function abrirMenu() {
      $('.menu').animate({
        left: 0
      }, 400);
    }

    function cerrarMenu() {
      $('.menu').animate({
        left: '-100%'
      }, 400);
    }

    setInterval(resizeIframe, 500);
    window.onload=resizeIframe;
    window.onresize=resizeIframe;
    function resizeIframe() {
      document.getElementById('ifr').style.height = document.getElementById('ifr').contentWindow.document.body.clientHeight + 'px';
    }

    setInterval(resizeIframe2, 500);
    window.onload=resizeIframe2;
    window.onresize=resizeIframe2;
    function resizeIframe2() {
      document.getElementById('ifr2').style.height = document.getElementById('ifr2').contentWindow.document.body.clientHeight + 'px';
    }

    function pedidos() {
      $('#form-p').css({"display": "block"});
      $('#form-p').animate({opacity: 1}, 1000);
      enlace  = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(enlace).offset().top
      }, 500, function(){
        $('#menu-hogares').animate({opacity: 0}, function(){
          $('#menu-hogares').css({"display": "none"});
        });
        $('#menu-btn').css({"display": "none"});
        $('#contacto-btn').css({"display": "none"});
      });
    }

    function salirP() {
      $('#form-p').animate({opacity: 0}, 1000, function(){
        $('#form-p').css({"display": "none"});
      });
      $('#menu-hogares').css({"display": "block"});
      $('#menu-hogares').animate({opacity: 1}, 1000, function(){
        $('#menu-btn').css({"display": "block"});
        $('#contacto-btn').css({"display": "block"});
      });
    }

    $('.inst-btn').click(function() {
      $('#menu-inst').css({"display": "block"});
      $('#menu-inst').animate({left: 0}, function(){
        $('.stage, .cuadriculas').css({"display": "none"});
      });
    });

    $('.hogar-btn').click(function() {
      $('#menu-hogares').css({"display": "block"});
      $('#menu-hogares').animate({left: 0}, function(){
        $('.stage, .cuadriculas').css({"display": "none"});
      });
    });

    $('.temp-btn').click(function() {
      $('#menu-temporada').css({"display": "block"});
      $('#menu-temporada').animate({left: 0}, function(){
        $('.stage, .cuadriculas').css({"display": "none"});
      });
    });

    $('.salir-inst').click(function() {
      $('.stage, .cuadriculas').css({"display": "block"});
      $('#menu-inst').animate({left: "-100%"}, function(){
        $('#menu-inst').css({"display": "none"});
      });
    });

    $('.salir-hogar').click(function() {
      $('.stage, .cuadriculas').css({"display": "block"});
      $('#menu-hogares').animate({left: "-100%"}, function(){
        $('#menu-hogares').css({"display": "none"});
      });
    });

    $('.salir-temp').click(function() {
      $('.stage, .cuadriculas').css({"display": "block"});
      $('#menu-temporada').animate({left: "-100%"}, function(){
        $('#menu-temporada').css({"display": "none"});
      });
    });

    $('#contacto-btn, .cf').click(function() {
      $('.form-contacto').fadeIn();
    });

    $('#fade, .salir-form').click(function() {
      $('.form-contacto').fadeOut();
    });

    $('.menu ul li a, #inicio-btn, .scrollTo').click(scrolling);
    $('.menu ul li a, #inicio-btn').click(cerrarMenu);

    function scrolling() {
  		    enlace  = $(this).attr('href');
  		    $('html, body').animate({
  		        scrollTop: $(enlace).offset().top
  		    }, 1000);
    }

    function runSlider() {
        $(".slider").animate({marginLeft:'-100%'},1000,function(){
    			$(this).find("div:last").after($(this).find("div:first"));
    			$(this).css({marginLeft:0});
  		});
    }


    $('#next').click(nextG);
    $('#prev').click(prevG);

    function nextG() {
      var galeria = parseInt(document.getElementById('galeria').style.marginLeft);
      if (galeria == 0) {
        $('#galeria').animate({marginLeft: '-100%'}, 800);
        $('#prev').animate({left: 0}, 300);
        $('#g1').fadeOut(300);
        $('#g2').fadeIn(300);
      }

      if (galeria == -100) {
        $('#galeria').animate({marginLeft: '-200%'}, 800);
        $('#next').animate({right: '-4rem'}, 300);
        $('#g2').fadeOut(300);
        $('#g3').fadeIn(300);
      }
    }

    function prevG() {
      var galeria = parseInt(document.getElementById('galeria').style.marginLeft);
      if (galeria == -100) {
        $('#galeria').animate({marginLeft: 0}, 800);
        $('#prev').animate({left: '-4rem'}, 300);
        $('#g2').fadeOut(300);
        $('#g1').fadeIn(300);
      }

      if (galeria == -200) {
        $('#galeria').animate({marginLeft: '-100%'}, 800);
        $('#next').animate({right: 0}, 300);
        $('#g3').fadeOut(300);
        $('#g2').fadeIn(300);
      }
    }

    $('.cuadriculas').eq(0).click(function() {$('#galeria-p').fadeIn();});
    $('.cuadriculas').eq(1).click(function() {$('#galeria-carbo').fadeIn();});
    $('.cuadriculas').eq(2).click(function() {$('#galeria-cp').fadeIn();});
    $('.cuadriculas').eq(3).click(function() {$('#galeria-v').fadeIn();});
    $('.cuadriculas').eq(4).click(function() {$('#galeria-c').fadeIn();});
    $('.cuadriculas').eq(5).click(function() {$('#galeria-ls').fadeIn();});
    $('.cuadriculas').eq(6).click(function() {$('#galeria-g').fadeIn();});

    $('#next-g1').click(function() {
        i1++;
        if(i1 == 6) {
            i1 = 0;
        }
        $("#galeria-1 li").fadeOut();
        $("#galeria-1 li").eq(i1).fadeIn(1000);
    });

    $('#prev-g1').click(function() {
        i1--;
        if(i1 == -6) {
            i1 = 0;
        }
        $("#galeria-1 li").fadeOut();
        $("#galeria-1 li").eq(i1).fadeIn(1000);
        console.log(i1);
    });

    $('#next-g2').click(function() {
        i2++;
        if(i2 == 6) {
            i2 = 0;
        }
        $("#galeria-2 li").fadeOut();
        $("#galeria-2 li").eq(i2).fadeIn(1000);
    });

    $('#prev-g2').click(function() {
        i2--;
        if(i2 == -6) {
            i2 = 0;
        }
        $("#galeria-2 li").fadeOut();
        $("#galeria-2 li").eq(i2).fadeIn(1000);
    });

    $('#next-g3').click(function() {
        i3++;
        if(i3 == 4) {
            i3 = 0;
        }
        $("#galeria-3 li").fadeOut();
        $("#galeria-3 li").eq(i3).fadeIn(1000);
    });

    $('#prev-g3').click(function() {
        i3--;
        if(i3 == -4) {
            i3 = 0;
        }
        $("#galeria-3 li").fadeOut();
        $("#galeria-3 li").eq(i3).fadeIn(1000);
    });

    $('#next-g4').click(function() {
        i4++;
        if(i4 == 6) {
            i4 = 0;
        }
        $("#galeria-4 li").fadeOut();
        $("#galeria-4 li").eq(i4).fadeIn(1000);
    });

    $('#prev-g4').click(function() {
        i4--;
        if(i4 == -6) {
            i4 = 0;
        }
        $("#galeria-4 li").fadeOut();
        $("#galeria-4 li").eq(i4).fadeIn(1000);
    });

    $('#next-g5').click(function() {
        i5++;
        if(i5 == 4) {
            i5 = 0;
        }
        $("#galeria-5 li").fadeOut();
        $("#galeria-5 li").eq(i5).fadeIn(1000);
    });

    $('#prev-g5').click(function() {
        i5--;
        if(i5 == -4) {
            i5 = 0;
        }
        $("#galeria-5 li").fadeOut();
        $("#galeria-5 li").eq(i5).fadeIn(1000);
    });

    $('#next-g6').click(function() {
        i6++;
        if(i6 == 14) {
            i6 = 0;
        }
        $("#galeria-6 li").fadeOut();
        $("#galeria-6 li").eq(i6).fadeIn(1000);
    });

    $('#prev-g6').click(function() {
        i6--;
        if(i6 == -14) {
            i6 = 0;
        }
        $("#galeria-6 li").fadeOut();
        $("#galeria-6 li").eq(i6).fadeIn(1000);
    });

    $('#next-g7').click(function() {
        i7++;
        if(i7 == 4) {
            i7 = 0;
        }
        $("#galeria-7 li").fadeOut();
        $("#galeria-7 li").eq(i7).fadeIn(1000);
    });

    $('#prev-g7').click(function() {
        i7--;
        if(i7 == -4) {
            i7 = 0;
        }
        $("#galeria-7 li").fadeOut();
        $("#galeria-7 li").eq(i7).fadeIn(1000);
    });

    $('.fade-g, .salir-g').click(function() {
      $('.galerias').fadeOut();
    });



    $(window).scroll(scrollWindow);
    function scrollWindow() {
      if ($(this).scrollTop() >= $('#como-funciona').offset().top + 250) {
        $('.scrollA').addClass('scrollA-a');
      }else {
        $('.scrollA').removeClass('scrollA-a');
      }
    }
});
