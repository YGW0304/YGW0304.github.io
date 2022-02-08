$(function(){
    //-----------------------------------------------------
    
    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
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
        $("#cover").slideToggle(); //fadeToggle
    });
    
    
    let cloneMenu = $('nav>ul').clone();
    $('#cover').append(cloneMenu);
    
    $('#cover a').on('click', function(){
        $('#cover').slideUp(); 
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });
                
   $('#Wrap').sakura();
    
   
    //-----------------------------------------------------
    })