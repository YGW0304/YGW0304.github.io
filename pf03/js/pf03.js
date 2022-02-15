$(function(){
    //------------------------------------------------
    //$('#popup01 span').on('click', function(){
        //$('#popup01').hide();
    //});
    
    // $('.popup_close').on('click', function(){
        // $(this).parent().hide();
    // });
    
    

    $('#top_banner i').on('click',function(){
        $('#top_banner .case').slideToggle(200);
        $(this).toggleClass('on');
    });
   

    $('.main_slider').on('init reinit afterChange', function(e,s,c){
        console.log(c,s.slideCount);
        var i= (c?c:0);
        $('.snum').text(i+1 + "/" + s.slideCount)    
    });
    
    var mS=$('.main_slider').slick({
        autoplay:true,
        fade:true,
        arrows:false,
        pauseOnHover:false,
    });
    
    
    
    
    $('.main_slider figure').eq(0).addClass('animation_active');
    $('#main_visual .sbar').addClass('animation_active');
    $('#main_visual .sbar span').css({height:100})
    mS.on('beforeChange', function(e,s,c,n){
        $('#main_visual .sbar').removeClass('animation_active');
    });
    
    
    
    
    
    mS.on('afterChange', function(e,s,c){
        $('.main_slider figure').eq(c).addClass('animation_active')
        .siblings().removeClass('animation_active');
        $('#main_visual .btn li').eq(c).addClass('animation_active')
        .siblings().removeClass('animation_active');
        $('#main_visual .sbar').addClass('animation_active');
        $('#main_visual .sbar2 span').css({height:100*(c+1)})
        
    });
    
    $('#main_visual .btn li').on('click', function(){
        var idx=$(this).index();
        mS.slick('slickGoTo', idx)
    });
    

    $('.gnb>ul>li>a').on('click',function(e){
        if($('.gnb').hasClass('on')) {
            e.preventDefault();
            // $('.submenu').hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.submenu02').stop().slideUp();    
        }
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
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });
    $('.pr_slider figure').eq(7).addClass('on');
    $('.pr_slider').on('afterChange', function(e,s,c){
        //c=1,2...
        $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
        $('#content02 .slide_bar>span').css({left:c*(100 / 6)+"%"})
    })
    
    
    $('#bottom_banner i').on('click',function(){
        $('#bottom_banner .case').slideToggle(200);
        $(this).toggleClass('on');
    });
    
    $('#toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},600)
    
    });

    $('#link select').on('change',function(){
        var lnk = $(this).val();
        if(lnk) {window.open(lnk)}
        
    });
    
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        // if(sct>400) {
        //     $('#toTop').fadeIn()
        // }else{
        //     $('#toTop').fadeOut()
        // }
        sct>400 ?  $('#toTop').fadeIn() : $('#toTop').fadeOut();
        $('#scroll_banner').css({top:300+sct})
    });
    
    $('.mopen').on('click',function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('h1').toggleClass('on')
    });

    
    

    
    });