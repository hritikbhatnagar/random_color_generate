
$("#w").click(function(){
var a=Math.random()*256;
a=Math.floor(a);

var b=Math.random()*256;
b=Math.floor(b);
var c=Math.random()*256;
c=Math.floor(c);
var t="rgb("+a+","+b+","+c+")";
$("body").css("background-color",t);
});