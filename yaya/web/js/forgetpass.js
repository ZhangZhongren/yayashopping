
inputFocusFn(".forget_phone_input",".forget_phone",".forget_phone_img",".forget_phone_img");
inputBlurFn(".forget_phone_input",".forget_phone",".forget_phone_img",".forget_phone_img");

inputFocusFn(".forget_photo_input",".forget_photo",".forget_photo_img",".forget_photo_img");
inputBlurFn(".forget_photo_input",".forget_photo",".forget_photo_img",".forget_photo_img");

inputFocusFn(".forget_info_input",".forget_info",".forget_info_img",".forget_info_img");
inputBlurFn(".forget_info_input",".forget_info",".forget_info_img",".forget_info_img");
//  聚焦
function inputFocusFn(focusClass,borderClass,imgcon,img){
	$(focusClass).focus(function(){
		$(borderClass).css("border-color","#F77705");
		$(imgcon).css({"border-color":"#F77705","background-color":"#FEF8F3"});
		$(img).css("color","#F77705");
	});
}
//  失焦
function inputBlurFn(focusClass,borderClass,imgcon,img){
	$(focusClass).blur(function(){
		$(borderClass).css("border-color","#DCDDDC");
		$(imgcon).css({"border-color":"#DCDDDC","background-color":"#F9FAF9"});
		$(img).css("color","#434443");
	});
}

//  获取图片验证码
/******** 图片验证码 ***********/ 
$('#mpanel2').codeVerify({
	type : 1,
	width : '93px',
	height : '30px',
	fontSize : '10px',
	codeLength : 5,
	btnId : 'check-btn',
	ready : function() {
	},
	success : function() {
		alert('验证匹配！');
	},
	error : function() {
		alert('验证码不匹配！');
	}
});
var imgcode = document.getElementsByClassName('varify-input-code')[0];
imgcode.placeholder = "请输入图片验证码";