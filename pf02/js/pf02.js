$(function(){
$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0) {
        $('#header').addClass('on');
    }else{
        $('#header').removeClass('on');
    }
});


    
    //-------------------------------------------
        $('#bgndVideo').YTPlayer({
            videoURL:'https://youtu.be/Q6-ybgNbKew',
            containment:'#main_visual',
            autoPlay:true, 
            mute:true, 
            startAt:0, 
            opacity:1,
            showControls:false,
        });
    
        $('#main_visual i.xi-pause').on('click', function(){
            $('#bgndVideo').YTPPause();
        });
        $('#main_visual i.xi-play').on('click', function(){
            $('#bgndVideo').YTPPlay();
        });
        $('#main_visual i.xi-tv').on('click', function(){
            $('#bgndVideo').YTPFullscreen();
        });
    //----------------------------------

  
    

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 5,
                
            }
        }
    ]
});
    
$('#link select').on('change',function(){
    var lnk = $(this).val();
    if(lnk) {window.open(lnk)}
        
});



});