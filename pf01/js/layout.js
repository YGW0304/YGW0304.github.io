$(function(){

    $('#top_banner .container i').on('click',function(){
        $(this).parent().parent().slideUp();
   
    });
// 닫기 버튼에도 손가락 나오게 만들기
    $('#top_banner .container a').on('click',function(){
        $(this).parent().parent().slideUp();
       
    });
    $('.section01').slick({

        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        centerMode:true,
        centerPadding: '300px',
        //slidesToShow:1
        
    });
    $('#main_visual figure').eq(2).find('.case').addClass('on');
    $('.section01').on('afterChange', function(e,s,c){
        $('#main_visual figure').eq(c+2).find('.case').addClass('on').parent().siblings().find('.case').removeClass('on');
    });

    $('#main_visual .btn i.xi-angle-left').on('click', function(){
        $('.section01').slick('slickPrev');
    });
    $('#main_visual .btn i.xi-angle-right').on('click', function(){
        $('.section01').slick('slickNext');
    });
    
    //--------------------------
});