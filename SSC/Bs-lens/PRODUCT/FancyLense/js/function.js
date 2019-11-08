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
//스크롤 버튼

var $btnScroll=$(".scrolldown");
    
$btnScroll.on("click",function(){

    var $offset=$(".main-section").offset();
    $('html,body').animate({scrollTop:$offset.top},400)
    
});




// goTop 버튼
var $goTop=$(".goTop");

$(window).scroll(function(){
	if($(this).scrollTop()>200){
		$goTop.fadeIn();
	}else{
		$goTop.fadeOut();
	}
});

$goTop.click(function(){
	$('html,body').animate({scrollTop:0},400    );
    return false;
});
//

});


