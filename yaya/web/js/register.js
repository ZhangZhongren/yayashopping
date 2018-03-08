//  失焦、聚焦颜色改变
inputFocusFn(".register_phone_put",".register_phone",".register_phone_img",".register_phone_img");
inputBlurFn(".register_phone_put",".register_phone",".register_phone_img",".register_phone_img");

inputFocusFn(".register_info_put",".register_info",".register_info_img",".register_info_img");
inputBlurFn(".register_info_put",".register_info",".register_info_img",".register_info_img");

inputFocusFn(".register_passworld_put",".register_passworld",".register_passworld_img",".register_passworld_img");
inputBlurFn(".register_passworld_put",".register_passworld",".register_passworld_img",".register_passworld_img");

inputFocusFn(".register_okpassworld_put",".register_okpassworld",".register_okpassworld_img",".register_okpassworld_img");
inputBlurFn(".register_okpassworld_put",".register_okpassworld",".register_okpassworld_img",".register_okpassworld_img");

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


/******** 图片验证码 ***********/ 
var imgcodeValue = 0;
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
		imgcodeValue = 1;
	},
	error : function() {
		imgcodeValue = 0;
	}
});

var imgcode = document.getElementsByClassName('varify-input-code')[0];
imgcode.placeholder = "请输入图片验证码";

//  图片验证码
inputFocusFn(".varify-input-code",".register_photo",".register_photo_img",".register_photo_img");
inputBlurFn(".varify-input-code",".register_photo",".register_photo_img",".register_photo_img");


// input失焦，判断内容，符合继续执行，
	// 不符合 -- 判断浏览器宽度，低于  出现左边弹框。否则出现右边弹框
	// 后面的input不能点
	var regphoto = /^[1][3,4,5,7,8][0-9]{9}$/g;
	//  手机验证
	$("input[name=register_phone]").blur(function(){
		var phonevalue = this.value;
		if(phonevalue.match(regphoto)){
			$(".phone_alter").css({"display":"none"});
			//  下面都可用
			$("input").each(function(index,value){
				value.disabled = "";
			});
		}else{
			//  下面禁用
			$("input").each(function(index,value){
				value.disabled = "disabled";
			});
			$("input")[0].disabled = "";
			// 提示错误框 - 判断
			if(document.body.clientWidth <= 888){
				$(".phone_alter_left").css({"display":"block"});
				$(".phone_alter_right").css({"display":"none"});
			}else{
				$(".phone_alter_right").css({"display":"block"});
				$(".phone_alter_left").css({"display":"none"});
			}
			window.onresize = function(){
				if(document.body.clientWidth <= 888){
					$(".phone_alter_left").css({"display":"block"});
					$(".phone_alter_right").css({"display":"none"});
				}else{
					$(".phone_alter_right").css({"display":"block"});
					$(".phone_alter_left").css({"display":"none"});
				}
			}		
		}
	});

	//  设置密码验证
	// 6-16 位
	var regpassword = /^[0-9A-Za-z]{6,16}$/g;

	$("input[name=register_passworld]").blur(function(){
		var passwordvalue = document.getElementsByClassName('register_passworld_put')[0].value;
		if(passwordvalue.match(regpassword)){

			$("input").each(function(index,value){
				value.disabled = "";
			});
			$(".passworld_alter").css({"display":"none"});
			
		}else{
				//  下面禁用
			$("input").each(function(index,value){
				value.disabled = "disabled";
			});

			$("input")[3].disabled = "";

			if(document.body.clientWidth <= 888){
				$(".passworld_alter_left").css({"display":"block"});
				$(".passworld_alter_right").css({"display":"none"});
			}else{
				$(".passworld_alter_right").css({"display":"block"});
				$(".passworld_alter_left").css({"display":"none"});
			}


			window.onresize = function(){


				if(document.body.clientWidth <= 888){
					$(".passworld_alter_left").css({"display":"block"});
					$(".passworld_alter_right").css({"display":"none"});
				}else{
					$(".passworld_alter_right").css({"display":"block"});
					$(".passworld_alter_left").css({"display":"none"});
				}
			}
		}
	});

	// 确认密码
	$("input[name=register_okpassworld]").blur(function(){

		var passwordvalue = document.getElementsByClassName('register_passworld_put')[0].value;
		var okpasswordvalue = document.getElementsByClassName('register_okpassworld_put')[0].value;
		if(passwordvalue == okpasswordvalue){
			$(".okpassworld_alter").css({"display":"none"});
		}else{
			if(document.body.clientWidth <= 888){
				$(".okpassworld_alter_left").css({"display":"block"});
				$(".okpassworld_alter_right").css({"display":"none"});
			}else{
				$(".okpassworld_alter_right").css({"display":"block"});
				$(".okpassworld_alter_left").css({"display":"none"});
			}
			window.onresize = function(){
				if(document.body.clientWidth <= 888){
					$(".okpassworld_alter_left").css({"display":"block"});
					$(".okpassworld_alter_right").css({"display":"none"});
				}else{
					$(".okpassworld_alter_right").css({"display":"block"});
					$(".okpassworld_alter_left").css({"display":"none"});
				}
			}
		}
	})

	//  点击注册
	$(".register_con_success").click(function(){
		if(imgcodeValue == 1){
			$(".register_alter").css({"display":"none"});
			// 将值传给后台
			sendData();

		}else{
			if(document.body.clientWidth <= 888){
				$(".register_alter_left").css({"display":"block"});
				$(".register_alter_right").css({"display":"none"});
			}else{
				$(".register_alter_right").css({"display":"block"});
				$(".register_alter_left").css({"display":"none"});
			}
			window.onresize = function(){
				if(document.body.clientWidth <= 888){
					$(".register_alter_left").css({"display":"block"});
					$(".register_alter_right").css({"display":"none"});
				}else{
					$(".register_alter_right").css({"display":"block"});
					$(".register_alter_left").css({"display":"none"});
				}
			}

			$(".register_alert_right").css({"display":"block"});
		}
	})


	// ************************************************
	// 注册 ---  后台判断是否注册成功
	function sendData(){
		var url = "http://10.80.13.196:8081/user/reg?userName=" + $(":input[name=register_phone]").val() + "&password=" + $(":input[name=register_okpassworld]").val();
		console.log(url);
		$.ajax({
		   type: "GET",
		   url: url,
		   data: {},
		   success: function(msg){
		   	console.log(msg);
		     setTimeout(function(){
				$(".register_success").css({"display":"block"});
		     },500);

		     setTimeout(function(){
				$(".register_success").css({"display":"none"});
		     },5000);
		    
		   }
		});
	}