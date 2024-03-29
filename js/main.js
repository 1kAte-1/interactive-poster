
    /*$(document).mousemove(function(e){
        $(".cursor").css({
          left: e.clientX,
          top: e.clientY,
          opacity: "100%",
        })
      });
      $(document).ready(function(){
        $(document).mousemove(function(e){
          $(".cursor").css({
            left: e.clientX,
            top: e.clientY,
            opacity: "100%",
          })});
        });
        $(document).mousemove(function(e){
          $(".cursor").css({
              left: e.clientX,
              top: e.clientY,
              opacity: "100%",
          })});*/

    /*    }*/        


    $(".ret").click(function() {
        $(".home").css("display", "block")
        $(".draw").css("display", "none")
        $(".burn").css("display", "none")
        $(".move").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $(".answer").click(function() {
        $(".home").css("display", "block")
        $(".draw").css("display", "none")
        $(".burn").css("display", "none")
        $(".move").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $(".title1, .title1-mob").click(function() {
        $(".draw").css("display", "block")
        $(".home").css("display", "none")
        $(".burn").css("display", "none")
        $(".move").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $(".title2, .title2-mob").click(function() {
        $(".burn").css("display", "block")
        $(".home").css("display", "none")
        $(".draw").css("display", "none")
        $(".move").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $(".title3, .title3-mob").click(function() {
        $(".move").css("display", "block")
        $(".home").css("display", "none")
        $(".burn").css("display", "none")
        $(".draw").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $("#but-draw").click(function() {
        $(".burn").css("display", "block")
        $(".home").css("display", "none")
        $(".draw").css("display", "none")
        $(".move").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $("#buty").click(function() {
        $(".move").css("display", "block")
        $(".home").css("display", "none")
        $(".burn").css("display", "none")
        $(".draw").css("display", "none")
        $(".scale-finish").css("display", "none")
    });

    $("#cld1").click(function() {
        $(".scale-finish").css("display", "block")
        $(".home").css("display", "none")
        $(".burn").css("display", "none")
        $(".move").css("display", "none")
        $(".draw").css("display", "none")
    });

   
    //движение фона
    $('body').mousemove(function(event) {
        $(document).mousemove(function(e) {
            $('.circle-bg, .circle__bg-mob, .circle-bg2, .circle-bg2-mob').css({
                left: 10 - e.pageX / 9,
                top: 10 - e.pageY / 9
            })
        })
    })

    $('.home').click(function(event) {
        $('.default__scene').css('transform', 'translateY(-62.5vw)')
    });

    $('.home').click(function(event) {
        $('.default__scene-mob').css('transform', 'translateY(-178vw)')
    });


    //рисование
    $(".draw").click(function() {
        $('.text-mini').fadeOut(800, function() {
        
        });
    });


  $(function(){
      $(".cloud1").draggable();
      $(".cloud2").draggable();
      $(".cloud3").draggable();
      $(".cloud4").draggable();
      $(".cloud5").draggable();
      $(".cloud6").draggable();
    });
    
    //взрывы
    $("#sh1").click(function() {
        $('#sh1').fadeOut(100, function() {
        $('#sh1').fadeIn(2000);
        });
    });

    $("#sh2").click(function() {
        $('#sh2').fadeOut(100, function() {
        $('#sh2').fadeIn(2000);
        });
    });

    $("#sh3").click(function() {
        $('#sh3').fadeOut(100, function() {
        $('#sh3').fadeIn(2000);
        });
    });

    $("#sh4").click(function() {
        $('#sh4').fadeOut(100, function() {
        $('#sh4').fadeIn(2000);
        });
    });

    $("#sh5").click(function() {
        $('#sh5').fadeOut(100, function() {
        $('#sh5').fadeIn(2000);
        });
    });

    $("#sh6").click(function() {
        $('#sh6').fadeOut(100, function() {
        $('#sh6').fadeIn(2000);
        });
    });

    $("#sh7").click(function() {
        $('#sh7').fadeOut(100, function() {
        $('#sh7').fadeIn(2000);
        });
    });

    $("#sh8").click(function() {
        $('#sh8').fadeOut(100, function() {
        $('#sh8').fadeIn(2000);
        });
    });

    $("#sh9").click(function() {
        $('#sh9').fadeOut(100, function() {
        $('#sh9').fadeIn(2000);
        });
    });

    $("#sh-1").click(function() {
        $('#sh-1').fadeOut(100, function() {
        $('#sh-1').fadeIn(2000);
        });
    });

    $("#sh-2").click(function() {
        $('#sh-2').fadeOut(100, function() {
        $('#sh-2').fadeIn(2000);
        });
    });

    $("#sh-3").click(function() {
        $('#sh-3').fadeOut(100, function() {
        $('#sh-3').fadeIn(2000);
        });
    });

    $("#sh-4").click(function() {
        $('#sh-4').fadeOut(100, function() {
        $('#sh-4').fadeIn(2000);
        });
    });

    $(".shine-circle").click(function() {
        $('.text-mini2').fadeOut(800, function() {
        
        });
    });


    // поиск облака
    $(function(){
      $("#cld").draggable();
      $("#cld1").draggable();
      $("#cld2").draggable();
      $("#cld3").draggable();
      $("#cld4").draggable();
      $("#cld5").draggable();
      $("#cld6").draggable();
      $("#cld7").draggable();
      $("#cld8").draggable();
      $("#cld9").draggable();
      $("#cld0").draggable();
      $("#cld-1").draggable();
      $("#cld-2").draggable();
      $("#cld01").draggable();
      $("#cld02").draggable();
    });

    $(".elements-cloud").click(function() {
        $('.text-mini3').fadeOut(800, function() {
        
        });
    });

    //finish
    function ZoomIn(){
        var p = $('.ending').offset();
        var w = $('.ending').width();
        var h = $('.ending').height();
        var $clone = $('.ending').clone();
        $clone.css({
            position: "absolute",
            left: p.left + "px",
            top: p.top + "px",
            "z-index": 2
        }).appendTo('body');
        $clone.data("origWidth",w);
        $clone.data("origHeight",h);
        $clone.data("origTop",p.top);
        $clone.data("origLeft",p.left);
        $clone.animate({
            top: "-=" + Math.floor(h * 3),
            left: "-=" + Math.floor(w * 3),
            width: Math.floor(w * 3),
            height: Math.floor(h * 3)
        },function(){
        });
        $clone.click(ZoomOut);
    }
    function ZoomOut(){
        var w = $('.ending').data("origWidth");
        var h = $('.ending').data("origHeight");
        var t = $('.ending').data("origTop");
        var l = $('.ending').data("origLeft");
        $(this).animate({
            top: t,
            left: l,
            width: w,
            height: h
        },function(){
            $('.ending').remove();
        });
    }
    $(function(){
        $('.ending').click(ZoomIn);
    });


