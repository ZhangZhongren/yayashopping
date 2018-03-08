





window.onload=function(){
	$(".rightmenu").height($(window).height());
}
window.onresize=function(){
	$(".rightmenu").height($(window).height());
}
$(".top").click(function(){
	$("html,body").animate({scrollTop:0}, 500);
});

$(".r_vip").mouseenter(function(){
	$(this).find(".r_vip_move").css({"transform":"translateX(-140px)"})
	$(this).find(".huiyan_a").css({"transform":"translateX(-40px)"})
})
$(".r_vip").mouseleave(function(){
	$(this).find(".r_vip_move").css({"transform":"translateX(0"})
	$(this).find(".huiyan_a").css({"transform":"translateX(0)"})
});
$(".pho").mouseenter(function(){
	$(this).find(".call").css({"transform":"translateX(-292px)"})
	$(this).find(".huiyan_a").css({"transform":"translateX(-40px)"})
});
$(".pho").mouseleave(function(){
	$(this).find(".call").css({"transform":"translateX(0"})
	$(this).find(".huiyan_a").css({"transform":"translateX(0)"})
});