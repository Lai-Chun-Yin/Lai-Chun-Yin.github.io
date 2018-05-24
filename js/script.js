$(function () {
var scroll = new SmoothScroll('a[href*="#"]');
$('#html-icon').mouseover(function(){
    $('#lang').html("HTML");
    $('#html-icon').removeClass('rotateIn');
    $('#html-icon').addClass("bounce infinite"); 
});
$('#css-icon').mouseover(function(){
    $('#lang').html("CSS");
    $('#css-icon').removeClass('rotateIn');
    $('#css-icon').addClass("bounce infinite");
});
$('#javascript-icon').mouseover(function(){
    $('#lang').html("JAVASCRIPT");
    $('#javascript-icon').removeClass('rotateIn');
    $('#javascript-icon').addClass("bounce infinite");
});
$('#jquery-icon').mouseover(function(){
    $('#lang').html("JQUERY");
    $('#jquery-icon').removeClass('rotateIn');
    $('#jquery-icon').addClass("bounce infinite");
});
$('#node-icon').mouseover(function(){
    $('#lang').html("NODE");
    $('#node-icon').removeClass('rotateIn');
    $('#node-icon').addClass("bounce infinite");
});
$('#react-icon').mouseover(function(){
    $('#lang').html("REACT");
    $('#react-icon').removeClass('rotateIn');
    $('#react-icon').addClass("bounce infinite");
});
$('#html-icon').mouseleave(function(){
    $('#html-icon').removeClass('bounce infinite');
});
$('#css-icon').mouseleave(function(){
    $('#css-icon').removeClass('bounce infinite');
});
$('#javascript-icon').mouseleave(function(){
    $('#javascript-icon').removeClass('bounce infinite');
});
$('#jquery-icon').mouseleave(function(){
    $('#jquery-icon').removeClass('bounce infinite');
});
$('#node-icon').mouseleave(function(){
    $('#node-icon').removeClass('bounce infinite');
});
$('#react-icon').mouseleave(function(){
    $('#react-icon').removeClass('bounce infinite');
});

});
