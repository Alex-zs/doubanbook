

// $(".logo_look").width(($(window).width()-0)*0.127);

// $(".logo_look img").width(($(window).width()-0)*0.127);
// $(".container").height($(window).height())
(function(){

var i=5,timer=null,number=document.getElementById('number'),url='/';

function runNewpage(){

if(i<=0){
window.location.href=url;
clearInterval(timer);
}
number.innerHTML=i;
i--;
console.log(i);

}
timer=setInterval(runNewpage,1000);

})();