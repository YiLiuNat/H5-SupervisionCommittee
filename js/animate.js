//layer1
$(document).ready(function() {
    //iScroll Configuration
    loaded();
    var myScroll;
    var my2ndScroll;

    function loaded() {
        var font_size = parseInt($('html').css('fontSize'));
        var start_point = -8.5 * font_size;
        console.log(start_point, font_size);
        myScroll = new IScroll('#wrapper', {
            scrollX: true,
            scrollY: false,
            tap: true,
            startX: start_point
        });
        my2ndScroll = new IScroll('#card_content', {
            bounce: false,
            tap: true
        });

    }

    function isPassive() {
        var supportsPassiveOption = false;
        try {
            addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassiveOption = true;
                }
            }));
        } catch (e) {}
        return supportsPassiveOption;
    }
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, isPassive() ? {
        capture: false,
        passive: false
    } : false);

    //Animations
    var font_size_scroll = parseInt($('html').css('fontSize'));
    var scrolling_left = (-6.7) * font_size_scroll;
    var scrolling_right = (-9.8) * font_size_scroll;
    var scrolling_mid = (-8.5) * font_size_scroll;
    $("#start_btn").click(function() {

        $(".content_pic_img").animate({
            width: '21%',
            height: '21%',
            left: '39%',
            top: '55%'
        }, 1);
        $(".start").fadeOut();
        $("#sensor").attr('src','../img/sensor_on.png');
        $(".content_pic").fadeIn(1);
        $(".door_l").animate({
            left: '13.9%'
        });
        $(".door_r").animate({
            left: '59.8%'
        });
        $(".people").delay(800).fadeOut(500);

        //layer_1 zoom in
        setTimeout(function() {
            $(".layer_1").addClass('zoom');
        },800)
        
        $(".content_pic_img").delay(700).animate({
            width: '100%',
            height: '100%',
            left: '0%',
            top: '0%'
        }, 1000);
        $(".content_pic_img").fadeOut(3000);
        $(".layer_2").delay(2000).fadeIn(1, function() {
            myScroll.refresh();
            myScroll.scrollTo(scrolling_mid, 0);
            setTimeout(function() {
                myScroll.scrollTo(scrolling_left, 0, 1400, IScroll.utils.ease.quadratic);
            }, 1);
            setTimeout(function() {
                myScroll.scrollTo(scrolling_right, 0, 1400, IScroll.utils.ease.quadratic);
            }, 1200);
            setTimeout(function() {
                myScroll.scrollTo(scrolling_mid, 0, 1200, IScroll.utils.ease.quadratic);
            }, 2700);
        });
        
        // $("#sensor").delay(800).animate({
        //     width:'200%',
        //     height:'50%',
        //     left:'-100%',
        //     top:'-400%'
        // }, 2500);
        // $(".bg_img").delay(800).animate({
        //     width: '800%',
        //     height: '800%',
        //     left: '-400%',
        //     top: '-470%'
        // }, 1000);
        // $(".door_l").delay(400).animate({
        //     width: '400%',
        //     height: '400%',
        //     left: '-600%',
        //     top: '-180%'
        // }, 2000);
        // $(".door_l_img").delay(800).animate({
        //     width: '100%',
        //     height: '100%'
        // });
        // $(".door_r").delay(400).animate({
        //     width: '400%',
        //     height: '400%',
        //     left: '300%',
        //     top: '-180%'
        // }, 2000);
        // $(".door_r_img").delay(800).animate({
        //     width: '100%',
        //     height: '100%'
        // });
        // $(".people").delay(800).animate({
        //     width: '800%',
        //     height: '800%',
        //     left: '-800%',
        //     top: '800%'
        // },1000);
        // $(".people_img").delay(800).animate({
        //     width: '800%',
        //     height: '800%'
        // },1000);
        // $(".car_img").delay(800).animate({
        //     width: '800%',
        //     height: '800%',
        //     top: '800%'
        // });
        // $(".layer_1").delay(2000).fadeOut(1);
    })



    // var current_loc_positive = parseFloat($('#scroller').css('transform'));
    // var current_loc = -current_loc_positive;

    //layer_3
    //share
    $("#share_btn").click(function(){
        $("#share_bg").css("z-index","50");
    })
    $("#share_bg").click(function(){
        $("#share_bg").css("z-index","-30");
    })
    //close door
    $(".card_close").click(function() {
        $(".layer_3").fadeOut('slow', function() {
            setTimeout(function() {
                my2ndScroll.scrollTo(0, 0);
            }, 1);
        });
        $(".indoor_door").removeClass("open");
    });

    $('#scroller').on('tap', '.indoor_door', function () {
        $(this).addClass('open');
        var _index = parseInt($(this).attr('data'));
        $(".dep")[0].className = 'dep dep_'+_index;
        $('.cardImg').attr('src','../img/cardimg_'+_index+'.png');
        $(".layer_3").delay(600).fadeIn('slow', function() {
            setTimeout(function() {
                my2ndScroll.refresh();
            }, 100);
        });
    })
    //door_1
    // $(".indoor_door").on("tap", function() {
    //     $(".indoor_door").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/f21.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // //door_2
    // $(".indoor_door_2").on("tap", function() {
    //     $(".indoor_door_2").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/f22.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/people.png\")");
    //     $("#card_scroller").css("height", "15.12rem", function() {
    //         my2ndScroll.scrollTo(0, 0)
    //     });
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // //door_3
    // $(".indoor_door_3").on("tap", function() {
    //     $(".indoor_door_3").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/f23.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // //door_4
    // $(".indoor_door_4").on("tap", function() {
    //     $(".indoor_door_4").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/f24.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/f24_content.png\")");
    //     $("#card_scroller").css("height", "8.76rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });



    // //door_5
    // $(".indoor_door_5").on("tap", function() {
    //     $(".indoor_door_5").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/f25.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // //door_6
    // $(".indoor_door_6").on("tap", function() {
    //     $(".indoor_door_6").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/l01.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // $(".indoor_door_7").on("tap", function() {
    //     $(".indoor_door_7").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/l02.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // $(".indoor_door_8").on("tap", function() {
    //     $(".indoor_door_8").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/l03.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });

    // $(".indoor_door_9").on("tap", function() {
    //     $(".indoor_door_9").addClass("open");
    //     $(".dep").css("background-image", "url(\"../img/l04.png\")");
    //     $("#card_scroller").css("background-image", "url(\"../img/background_without_door.png\")");
    //     $("#card_scroller").css("height", "13.34rem");
    //     $(".layer_3").delay(600).fadeIn('slow', function() {
    //         setTimeout(function() {
    //             my2ndScroll.refresh();
    //         }, 100);
    //     });
    // });



    var x = document.getElementById("media");
    var mSart = document.getElementById("mSart");
    var mCar = document.getElementById("mCar");
    var mDoor = document.getElementById("mDoor");
    // var canPlay = false;
    // mCar.oncanplay = function(){
    //         canPlay = true;
    // };

    //触屏后自动播放
    // $('html').one("touchstart",function(){
    //     x.play();
    // });

    //微信自动播放音乐
    document.addEventListener("WeixinJSBridgeReady", function() {
        mCar.play();
        // setTimeout(function(){
        //     if(canPlay === true){
        //         mCar.play();
        //     };
        // },800);
    }, false);
    //bgm播放开关
    $("#audio_syb").click(function() {
        $("#audio_btn").toggleClass("rotate");
        if ($("#audio_btn").hasClass("rotate")) {
            $("#audio_btn").css('background-image','url(\"../img/music_on.png\")');
            x.play();
        } else {
            $("#audio_btn").css('background-image','url(\"../img/music.png\")');
            x.pause();
        }
    });
    //开门音效
    $(".indoor_door").on("tap", function() {
        mDoor.play();
    });
    //开始音效
    $("#start_btn").click(function() {
        mStart.play();
        x.play();
        $("#audio_btn").css('background-image','url(\"../img/music_on.png\")');
        $("#audio_btn").addClass("rotate");
    });
});