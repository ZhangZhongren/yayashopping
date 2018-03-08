

//  登录name
inputFocusFn(".logo_name",".logo_center_con_name",".logo_center_con_name_a",".logo_name_img");
inputBlurFn(".logo_name",".logo_center_con_name",".logo_center_con_name_a",".logo_name_img");
//  登录 passworld
inputFocusFn(".logo_passworld",".logo_center_con_passworld",".logo_center_con_passworld_a",".logo_passworld_img");
inputBlurFn(".logo_passworld",".logo_center_con_passworld",".logo_center_con_passworld_a",".logo_passworld_img");

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
		$(img).css("color","#989998");
	});
}



// *************************************************
//  点击登录  -- form表单请求数据
$(".logo_center_btn").click(function(){
	getLoginFn();
})

document.onkeydown = function(ev){
	var evObj = document.ev || event;
	if(evObj.keyCode == 13){
		getLoginFn();
	}
}


// 获取后台数据
function getLoginFn(){

	var Url= "http://10.80.13.196:8081/user/login?userName=" + $(".logo_name").val() + "&password=" + $(":input[name=password]").val();
	$.ajax({
	   type: "POST",
	   url: Url,
	   data: "",
	   dataType:"json",
	   success:function(msg){
	   		console.log(msg);	
	    	// if(msg.result){

	    	// 	// 显示登录成功，1s后跳转页面
			   //  $(".logo_success").css({"display":"block"});
			   //  setTimeout(function(){
		    //  		$("#subBtn").trigger("click");
		    //  	},2000);
	    	// }else{
	    	// 	$("#subBtn").unbind("click");
	    	// 	 $(".logo_success").css({"display":"block"});
	    	// 	 $(".logo_success").html("登录失败<span></span>");
	    	// }
	  	}
	});
}

