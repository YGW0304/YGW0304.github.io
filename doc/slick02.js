$(function(){
//----------------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //vertical:true, -- 아래위로 움직임.
    fade:true, // 흐려졌다 나온다.
});


//제품슬라이드
$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 5,
    dots:true,
});

$('#content01 .btn i.xi-arrow-left').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-arrow-right').on('click',function(){
    $('.pr_slider').slick('slickNext');
});


   
//-----
})