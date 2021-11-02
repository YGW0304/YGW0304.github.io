$(function(){
//--------------------------------------------
$("#m01").YTPlayer({
    videoURL:'https://youtu.be/kOCkne-Bku4',
    containment:'#visual',
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,


});



$('#visual i.xi-play').on('click',function(){
    $('#m01').YTPPlay();
});
$('#visual i.xi-pause').on('click',function(){
    $('#m01').YTPPause();
});
$('#visual i.xi-tv').on('click',function(){
    $('#m01').YTPFullscreen();
});

//--------------------------------------------
});