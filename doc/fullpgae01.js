$(function(){

$('.main_full').fullpage({
    anchors:['p01', 'p02', 'p03', 'p04'],
    // navigation: true,
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
});



})