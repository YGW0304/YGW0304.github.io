$(function(){


//배열 : 번호가 있는 자료형 0,1,2,...left_text[0]
var left_text=['01구역','02구역','03구역','04구역']



$('.main_full').fullpage({
    anchors:['p01', 'p02', 'p03', 'p04'],
    // background-attachment:fixed 활성
    css3:false,
    // navigation: true,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.footer .left span').text(left_text[idx]);
        $('.footer .left strong').text('0' + (idx+1));
    },
});

$(".umovie").YTPlayer({
    videoURL:'https://youtu.be/O-teI3owmYE',
    containment:"body",
    autoPlay:true, 
    mute:true, 
    startAt:0, 
    opacity:1,
    showControls:false,


});



})