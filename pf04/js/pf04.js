$(function(){
    //---------------------------------------------------------
$('#top_banner i').on('click', function(){
    $('#top_banner').slideUp();
});
$('.mopen').on('click',function(){
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
});

$('.gnb>ul>li>a').on('click',function(){
    if($('nav').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depth02').slideUp();
    }
    
});

// $('.main_slider').slick({
//     arrows:false,
//     autoplay:true,
//     autoplaySpeed:2000,
//     pauseOnHover:false,
//     pauseOnFocus:false,
    
// });

$(function(){
    //slick slider syncing
    $('.main-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 7,
        arrows: false,
        fade: true,
        pauseOnFocus: false,
        asNavFor: '.nav-wrap'
    });
    $('.nav-wrap').slick({
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:6,
        slidesToScroll:1,
        asNavFor:'.main-slide',
        dots:false,
        focusOnSelect:true,
        infinite:true,
        prevArrow:'.nav-wrap__prev',
        nextArrow:'.next'
    });
})

$('.se_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px",
    pauseOnHover:false,
    pauseOnFocus:false,
});
$('.se_slider figure').eq(7).addClass('on');
$('.se_slider').on('afterChange', function(e,s,c){
    //c=1,2...
    $('.se_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $('#se01 .slide_bar>span').css({left:c*100})
});







$(window).on('resize',function(){
    $('.depth02').removeAttr('style');
});

//---------------------------------------
});