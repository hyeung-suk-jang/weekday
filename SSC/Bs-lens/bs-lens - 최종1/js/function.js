$(function(){   
// bxSlider
$(".slider").bxSlider({
            speed:500,   
            pager:true, 
            moveSlides:1,  
            auto:true,     
            controls:true, 
            mode: 'fade'          
});

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


    $btnSub.on("click",function(){
        
        $(this).children().children().slideDown();
        $(this).siblings().children().children().slideUp();
        
        $(this).children().css({
            "color":"#333"
        })
        $(this).siblings().children().css({
            "color":"#fff"
            
        })
  
    });

//아이템

var $item=$("main>.main-section>.product-2>ul>li>a>img.on");
    
    $item.mouseover(function(){
        $(this).css({
            "opacity":"1"
        }).mouseleave(function(){
            $(this).css({
                "opacity":"0"
            })
        });
    });

 });

 //


