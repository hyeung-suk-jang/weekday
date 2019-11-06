$(function(){   


// wow 플러그인
$(window).on('load',function(){
    new WOW().init();
});

// gnb 메뉴
var $btn=$(".menu-btn>a");
var $gnb=$(".gnb");

$btn.on("click", function(evt){
    evt.preventDefault();
    $(this).toggleClass("on");
    $gnb.fadeToggle();
    $btnSub.children().children().slideUp();
    
});

//gnb sub메뉴

var $btnSub=$(".gnb>div>ol>li")


    $btnSub.on("click",function(evt){
       evt.preventDefault();
        $(this).children().children().slideDown();
        $(this).siblings().children().children().slideUp();
        
        $(this).children().css({
            "color":"#333"
        })
        $(this).siblings().children().css({
            "color":"#fff"
        })
    });
//스크롤 버튼
/*
var $btnScroll=$(".scrolldown>a")

var $sectionTop=[];
    arrTopval$(".main-section").offset();

    function pageAni(topVal){
        $("html,body").stop().animate({
            scrollTop:topVal
        });
    }

    $btnScroll.on("click",function(evt){
        evt.preventDefault();
        pageAni(arrTopval);


    });
    */
 });

 //


