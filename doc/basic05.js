$(function(){
//---------------------------------------------------------
$('#top_banner i').on('click', function(){
    // $('#top_banner').hide();
    $('#top_banner').slideUp();
});


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px",
    pauseOnHover:false,
    pauseOnFocus:false,
});
$('.pr_slider figure').eq(7).addClass('on');
$('.pr_slider').on('afterChange', function(e,s,c){
    //c=1,2...
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $('#product03 .slide_bar>span').css({left:c*100})
})






$('.pic').slick({
    arrows:false,
    autoplay:true,
    // autoplaySpeed:2000,
    //centerMode:true,
    //centerPadding:"100px",
    pauseOnHover:false,
    pauseOnFocus:false,
    asNavFor:'.pic',
});



    





// function topBannerClose(){
    // $('#top_banner').hide();
// }
//---------------------------------------
});