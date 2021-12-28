$(function(){
    // ----------------------------------------------------------------------------
        $('#main').fullpage({
            anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
            // navigation:true,
            afterLoad: function(origin, destination, direction){
                let txt =$('.navbar>li').eq(destination.index).find('a').text();
                $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
                $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
                $('.now').text(txt);
                destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
                destination.index===0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
                $('.mopen').on('click',function(){
                    $('.header>nav>ul').toggleClass('on');
                    $(this).toggleClass('on');
                });
            },
            
        });
    
    // ----------------------------------------------------------------------------
        $('.con01 .slider').slick({

            arrows:false,
            autoplay:true,
            slidesToShow:1,
        });
    
        $('.b_slider').slick({
            arrows:false,
            asNavFor:'.b_slider',
            autoplay:true,
    
        });
    
        $('.medical_information li').on('click', function(){
            $(this).addClass('on').siblings().removeClass('on');
            let idx=$(this).index();
            $('.b_slider').slick('slickGoTo',idx);
    
        });
    
        $('.b_slider').on('afterChange',function(e,s,c){
            $('.medical_information li').eq(c).addClass('on').siblings().removeClass('on');
        })
    
        $('.header>a').on('click',function(){
            $(this).toggleClass('on');
            $('.all_menu').slideToggle();
            if($('.header>a').hasClass('on')){
                $.fn.fullpage.setAllowScrolling(false); 
            }else{
                $.fn.fullpage.setAllowScrolling(true);
            }
        });
    
        $('all_menu a').on('click',function(){
            $('.all_menu').slideUp();
            $.fn.fullpage.setAllowScrolling(true);
            $('.header>a').removeClass('on'); 
        })
    
    
    
    // ----------------------------------------------------------------------------
    
    
    
    
    
    
    });