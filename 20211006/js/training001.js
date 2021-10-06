$(function(){

$(".이규원").on("click",function(){
   $("h1").hide();
});

$("#떡볶이").on("click",function(){
   $("h1").show();
});

$(".나는버튼").on("click" ,function(){
   $("figure").toggleClass("on")


});