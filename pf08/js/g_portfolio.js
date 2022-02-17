$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        responsiveWidth: 768,
        css3:false,
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    
    
    //WEB is My MONEY
    new Typed('.slogan_txt',{
        strings: ['Lee Gyuwon', '2022 UX/UI WEB-DESIGN PORTFOLIO'],
        typeSpeed:100,
    });
    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');
        $("#cover").slideToggle(); //fadeToggle
    });
    
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp(); 
        $('#m_btn').toggleClass('on');
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });


    // if($(window).width() > 700) {
    //     $('#Wrap').sakura();
    // }
             
    var sakura = new Sakura('.sakura_m');
   
    
   
    //-----------------------------------------------------
    })