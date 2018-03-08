//  **************************** 登录  ***********************************
		// 获取session值
		// JScript code
		// var userName = '<%=Session.getAttribute["UserName"] %>';  // getAttribute 获取指定属性名的属性值
		// alert("userName");
		// var userName = getCookie("UserName");
		var userName = "1225";
		if(userName){
			// a指向用户页面
			var userlogo = `您好！欢迎来到丫丫网，
							<span class="header_con_a"><a href="###" class="header_con_left_login">${userName}</a></span>
							<span class="header_con_b"><a href="###"  class="header_con_left_register user_exit">退出</a></span>`;
			$(".header_con_left").children("span").html(userlogo);
			// 点击退出，
			$(".user_exit").click(function(){
				var userExit = `您好！欢迎来到丫丫网，
								<span class="header_con_a">请<a href="###" class="header_con_left_login">【登录】</a>或</span>
								<span class="header_con_b"><a href="###"  class="header_con_left_register">【免费注册】</a></span>`;
				$(".header_con_left").children("span").html(userExit);
			});
		}
// 右上角购物车中的数量的显示
	carNum();
	function carNum(){
		// var userid = getCookie(userId);   // 获得用用户的ID
		var url = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId?userId=1`;
		getGata(url,changeNum);
	}
	function changeNum(data){
		$(".car_number").html(data.length);
	}
getData();// 获取商品的信息
function getData(){
	var url = `http://10.80.13.214:8081/order/findAddress?userId=1`;
	getGata(url,creatAdd);
	// GetRequest()  public 中的公用函数
	var link = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId${window.location.search}&userId=1`;
	// 发送请求获取数据
	getGata(link,creatCarData);// public里面的公用函数
	// 点击所有的框
	clickFn();
}
function creatAdd(data){  // 地址管理的
	for(var i=0;i<data.length;i++){
		var carhtml =  `<a href="javascript:void(0);" class="car_newadd car_remove" data-id="${data[i].addressId}" data-default="${data[i].defaultAddress}">
						   <div>
								<span></span>
								<span>${data[i].tel}</span>
								<span class="defaultAd">默认</span>
							</div>
							<ul>
								<li>${data[i].city}</li>
								<li>${data[i].fullAddress}</li>
								<li></li>
							</ul>
							<div></div>
							<i class="iconfont icon-zhuce new_zhuce"></i>
						</a>`;
		$(".first_carnewadd").before(carhtml);
	}
	// 判断是都为默认地址
	$(".car_remove").each(function(index,val){
		if($(val).attr("data-default") == 1){
			$(val).addClass("car_newadd_click");
			$(val).find(".defaultAd").css({"display":"block"});
		}
	})
	clickFn();
}
function clickFn(){
	var _this;
	$(".car_newadd").each(function(index,val){
		// 点击地址框
		$(this).click(function(){
			_this = this;
			// 判断收货地址是否为空 
			if($(this).is(".car_remove") == true){
				// **********	点击的框有收货地址
				// 点击框，背景图片改变
				$(".car_remove").each(function(index,val){
					$(this).click(function(){
						$(".car_remove").removeClass("car_newadd_click");
						$(this).toggleClass("car_newadd_click");
					});
				});
				// 点击图标，出现弹框
				alertBoxFn(".new_zhuce");
					// 点击多选框，将值保存在变量
					$("first_city").children();
				// 改变弹框的收货地址
				$(".save").unbind("click").click(function(){
					removerConFn(_this);
					// 点击确认退出弹框
					$(".bg").css({"display":"none"})
					$(".aleat").css({"display":"none"});
				});
			}else if($(this).is(".car_remove") == false){
				// ********	 点击的框没有收货地址
				// 点击box，出现弹框
				$(".bg").css({"display":"block"})
				$(".aleat").css({"display":"block"})			
				$(".bg").click(function(){
					$(".bg").css({"display":"none"})
					$(".aleat").css({"display":"none"})
				})
				$(".close").click(function(){
					$(".bg").css({"display":"none"})
					$(".aleat").css({"display":"none"})
				});
				$(".save").unbind("click").click(function(){
					// 在前面出现收货地址弹框
					addConFn(_this);
					// 点击确认退出弹框
					$(".bg").css({"display":"none"})
					$(".aleat").css({"display":"none"});
					ajaxData(); //向后台数据库发送更改的数据
				});
			}
		});
	});
}
	function sendCityDataFn(cityId,receiveName,recevicePhone,city,receviceAddress){
		console.log(receiveName,recevicePhone,city,receviceAddress,cityId);
		URl = "http://10.80.13.196:8081/user/updateUserAddress?userName="+receiveName+"&tel="+recevicePhone+"&city="+city+"&fullAddress="+receviceAddress+"&defaultAddress=0&addressId="+cityId;
		console.log(URl);
		$.ajax({
			type:"GET",
			url : URl,
			success:function(data){
				console.log(data);
			}
		});
	}
function creatCarData(data){  // 商品信息的 
	var len = data.length;
	var html = ``;
	var totalPrice = 0;
	for(var i=0;i<len;i++){
		html += `<ul class="pro_information clearfix ">
					<li class="fl pro_msg clearfix">
					<a href="" class="pro_msg_a fl" fl>
						<img src="${data[i].goodsList[i].imgList[i].imgUrl}" alt="">
					</a>
					<p class="pro_msg_p fl">${data[i].goodsList[i].describe}</p>
					</li>
					<li class="fl pro_specifications"><p class="pro_specifications_info"></p></li>
					<li class="fl pro_price" >¥${data[i].goodsList[i].goodsPrice}.00</li>
					<li class="fl pro_num">${data[i].numbers}</li>
					<li class="fl pro_preferential"><p class="pro_preferential_info"></p></li>
					<li class="fl pro_total"><span class="pro_total_span">¥ ${data[i].subtotal}.00</span></li>
					<li class="fl pro_warehouse"><span class="pro_warehouse_info">充足</span></li>
				</ul>`;
		totalPrice += data[i].subtotal;
	}
	$(".infos").html(html);
	var model = `商品金额：<strong>${totalPrice}.00</strong>元&nbsp;+&nbsp;&nbsp;&nbsp;运费：<strong>0.00</strong>元 - 优惠：<strong>0.00</strong>元 =  订单总额：<i class="price_info_i">¥ ${totalPrice}.00</i>`;
	$(".price_info").html(model);
	// 这里要设置 user id  *******************/*/*/**/*/*/*//****/*/***/*/*/*/*/*/*/*/***/*//**//*/*/*/**/*
	$(".update").click(function(){
		var url = `http://10.80.13.196:8081/order/insertOrder${window.location.search}&userId=1&sumPrice=${totalPrice}`;
		$.ajax({
			url:url,
			type:"GET",
			async:true
		});
		// ***********************************************************************************************************************
		// window.location.href = ``         //跳转到丫丫收银台的界面
	});
}
//弹框的控制事件
function alertBoxFn(box){
	$(box).click(function(){
		$(".bg").css({"display":"block"});
		$(".aleat").css({"display":"block"});
	});
	$(".bg").click(function(){
		$(".bg").css({"display":"none"});
		$(".aleat").css({"display":"none"});
	});
	$(".close").click(function(){
		$(".bg").css({"display":"none"});
		$(".aleat").css({"display":"none"});
	});
}
// 收货内容不为空 --- 点击收货框
function removerConFn(_this){
	console.log("有内容的地址");
	var cityId = $(_this).attr("data-id");
	var receiveName = $(":input[name=username]").val();
	var recevicePhone = $(":input[name=phone]").val();
	var city = $(".sel_city").children("option:selected").text() + $(".sel_county").children("option:selected").text() + $(".sel_countryside").children("option:selected").text();
	var receviceAddress = $(":input[name=address]").val();
	if(receiveName && recevicePhone && city && receviceAddress){
		// 当前内容改变
		var carhtml = `<div>
							<span>${receiveName}</span>
							<span>${recevicePhone}</span>
						</div>
						<ul>
							<li>${$(".sel_city").children("option:selected").text()}</li>
							<li>${$(".sel_county").children("option:selected").text()}</li>
							<li>${$(".sel_countryside").children("option:selected").text()}</li>
						</ul>
						<div>${receviceAddress}</div>
						<i class="iconfont icon-zhuce new_zhuce"></i>`;
		$(_this).html(carhtml);
		$(_this).addClass("car_remove");
		clickFn();
	}
	// **********************************************************  后台传值
	sendCityDataFn(cityId,receiveName,recevicePhone,city,receviceAddress);
}
// 收货地址内容为空 --- 点击收货框
clickCityFn();  // 点击到店自取 获取 城市的信息
function addConFn(_this){
	console.log("无内容的弹框")
	var receiveName = $(":input[name=username]").val();
	var recevicePhone = $(":input[name=phone]").val();
	var receviceCity = $(".sel_city").val() + $(".sel_county").val() + $(".sel_countryside").val();
	var receviceAddress = $(":input[name=address]").val();
	if(receiveName && recevicePhone && receviceCity && receviceAddress){
		var carhtml =  `<a href="javascript:void(0);" class="car_newadd car_remove">
						   <div>
								<span>${receiveName}</span>
								<span>${recevicePhone}</span>
							</div>
							<ul>
								<li>${$(".sel_city").val()}</li>
								<li>${$(".sel_county").val()}</li>
								<li>${$(".sel_countryside").val()}</li>
							</ul>
							<div>${receviceAddress}</div>
							<i class="iconfont icon-zhuce new_zhuce"></i>
						</a>`;
		$(_this).before(carhtml);
		clickFn();
	}
}
// 正则判断****************************************  ---- 手机号
regPhotoFn();
function regPhotoFn(){
	var regphoto = /^[1][3,4,5,7,8][0-9]{9}/g;
	$(":input[name=phone]").blur(function(){
	 	var photoVal = this.value;
	 	if(photoVal.match(regphoto)){
	 		$(":input").attr("disabled",false);
	 	}else{
	 		alert("请输入正确手机号!");
	 		$(":input").attr("disabled","disabled");
	 		$(this).attr("disabled",false);
	 	}
	});
}
function ajaxData(){  // 保用户添加的地址信息上传到后台数据库
	var city ="";
	for(var i=0;i<$(".first_city").children().length;i++){
		if($($(".first_city").children()[i]).val() == $(".first_city").val()){
			city += $($(".first_city").children()[i]).html();
		}
	}
	for(var i=0;i<$(".second_city").children().length;i++){
		if($($(".second_city").children()[i]).val() == $(".second_city").val()){
			city += $($(".second_city").children()[i]).html();
		}
	}
	for(var i=0;i<$(".three_city").children().length;i++){
		if($($(".three_city").children()[i]).val() == $(".three_city").val()){
			city += $($(".three_city").children()[i]).html();
		}
	}
	if($(".def")[0].checked){
		var def = 1;
	}else{
		del=0;
	}
	var url = `http://10.80.13.196:8081/user/updateUserAddress?userName=${$(".uesrname").val()}&tel=${$(".telephone").val()}&city=${city}&fullAddress=${$(".detail").val()}&defaultAddress=${def}&addressId=3`;
	$.ajax({
		tyoe:"GET",
		url:url,
	});
}
// *******************************************    到店自取：城市
function getAjaxCity(Url,fn){
	$.ajax({
		url : Url,
		type: "GET",
		dataType: "json",
		success: fn
	})
}
function cityCon(box,val){
	var firstCity = "";
	for(var i=0; i< val.length; i++){
		firstCity += `<option value="${val[i].cityId}">${val[i].cityName}</option>`;
		
		box.html(firstCity);
	}
}
// 二级城市的默认值
	getAjaxCity("http://10.80.13.196:8081/city/province?parentId=1",function(secondDefault){
		console
		cityCon($(".second_city"),secondDefault);
		// clickCityFn();
	})
// 三级城市的默认值
	getAjaxCity("http://10.80.13.196:8081/city/province?parentId=32",function(secondDefault){
		console
		cityCon($(".three_city"),secondDefault);
		// clickCityFn();
	})
function clickCityFn(){
	getAjaxCity("http://10.80.13.196:8081/city/province?parentId=0",function(data){
		// 一级城市默认值
		cityCon($(".first_city"),data);
		// 点击一级城市,二级城市内容改变
		$(".first_city").change(function(){
			var cityVal = $(this).val();
			getAjaxCity("http://10.80.13.196:8081/city/province?parentId=" + cityVal,function(secondCon){
				 cityCon($(".second_city"),secondCon);
			})
			// 点击二级城市，三级城市内容改变
			$(".second_city").change(function(){
				var cityVal = $(this).val();
				getAjaxCity("http://10.80.13.196:8081/city/province?parentId=" + cityVal,function(threeCon){
					if(threeCon.length != 0){
						cityCon($(".three_city"),threeCon);
					}else{
						$(".three_city").html();
					}
				})
			})
		})
	})
}
// 2、点击搜索，下面的页面数据改变
	document.getElementsByClassName("header_main_find_btn")[0].onclick=function(){
		window.location.href = "car.html";
		$(".header_main_find_form")[0].action = "list.html"
	}

// 3、热门词汇 最多出现8条数据
		//  判断：给个json串的长度超过620px,舍去一个值
//   *************************** 城市  **********************************
	 // 点击给个class名，
		// 将之前的class名去除  ----- .city_fram_on
		//  将伪类的内容设为 ""
// 鼠标移入  header_main_city，  city_box为block
var cityTime = "";
$(".header_main_city").mouseenter(function(){
	clearTimeout(cityTime);
	$(".city_box").css({"display":"block"});
})
$(".header_main_city").mouseleave(function(){
	cityTime = setTimeout(function(){
		$(".city_box").css({"display":"none"});
	},100);
});
// ajax获取一级内容
	$.ajax({
	url:"http://10.80.13.196:8081/city/province?parentId=0",
	type:'GET',
	async:true,
	dataType:'json',
	success:function(data){
		// 获取一级内容
		firstCity(data);
		// 点击一级标题
		$($(".city_fram a")[0]).click(function(){ 
			firstCity(data);
			$(".city_box").unbind("click");
		});
		}
	})
	$(".city_fram a").each(function(index,val){
	$(".city_fram a")[index].onclick = function(){
		var _this = this;
		addcity_fram_onFn($(_this));
	}
})
// ************************************************************ 城市的选择han'shu
// ****************************   点击一级内容
function oneClickFn(data,list){
	$('.city_con_first a').each(function(index,val){
		$(this).click(function(){
			var coneId = $(this).attr("data-id");
			// 将一级标题变成点击的城市
			$($(".city_fram a")[list]).html(data[index].cityName);
			// 二级标题、内容
			secondConFn(coneId);
		})
	})
};
// 二级内容
function secondConFn(coneId){
	// ajax 获取二级城市
	$.ajax({
		url:"http://10.80.13.196:8081/city/province?parentId="+coneId,
		type:'GET',
		async:true,
		dataType:'json',
		success:function(datasecond){
			secondCity(datasecond);
			// 点击二级标题
			$($(".city_fram a")[1]).click(function(){
				secondCity(datasecond);
			});
		}
	})
}
// // 一级城市：点击一级标题，内容变成一级内容
function firstCity(data){
	var oneCon = "";
	for(var i=0;i < data.length; i++){
		oneCon += `<a href="###" data-id="${data[i].cityId}">${data[i].cityName}</a>`;
	}
	$(".city_con_first").html(oneCon);
	// 一级标题内容
	$($(".city_fram a")[0]).html(data[0].cityName);
	// 点击一级内容
	oneClickFn(data,0);
}
// // 二级城市：
function secondCity(datasecond){
	// 将二级标题，的标题改变
	addcity_fram_onFn($(".city_fram a")[1]);
	$($(".city_fram a")[1]).html(datasecond[0].cityName);
	// 将二级标题的内容改变
	var secondCon = "";
	for(var i=0;i<datasecond.length;i++){
		secondCon += `<a href="###" data-id="${datasecond[i].cityId}" con-data="two">${datasecond[i].cityName}</a>`;
	}
	$(".city_con_first").html(secondCon);
	// 点击二级内容,三级内容改变
	secondClick(datasecond);
};
// 三级内容
function secondClick(datasecond){
	$('.city_con_first a').each(function(index,val){
		$(this).click(function(){
			var coneId = $(this).attr("data-id");
			// 将二级标题变成点击的城市
			$($(".city_fram a")[1]).html(datasecond[index].cityName);
			// 三级标题内容
			threeConFn(coneId);
		})
	})
}
function threeConFn(coneId){
	// ajax 获取三级城市
	$.ajax({
		url:"http://10.80.13.196:8081/city/province?parentId="+coneId,
		type:'GET',
		async:true,
		dataType:'json',
		success:function(datasecond){
			threeCity(datasecond);
			// 点击二级标题
			$($(".city_fram a")[2]).click(function(){
				threeCity(datasecond,coneId);
			});
		}
	})
}
function threeCity(datasecond,coneId){
	// 将二级标题，的标题改变
	addcity_fram_onFn($(".city_fram a")[2]);
	// 将二级标题的内容改变
	var secondCon = "";
	if(datasecond.length != 0){
		$(".city_box").unbind("click");
		$($(".city_fram a")[2]).html(datasecond[0].cityName);
		for(var i=0;i<datasecond.length;i++){
			secondCon += `<a href="###" data-id="${datasecond[i].cityId}" con-data="three">${datasecond[i].cityName}</a>`;
		}
		$(".city_con_first").html(secondCon);
	}else{
		$(".city_con_first").html("");
		$(".city_box").click(function(){
			$(".city_box").css({"display":"none"});
		});
	}
	// 点击三级
	$(".city_con_first a").each(function(index,val){

		$(this).click(function(){
			$(".city_box").css({"display":"none"});
		})
	})
};
// **********************************************************************
// 二级：点击二级默认样式
$($(".city_fram a")[1]).click(function(){
	secondConFn(2);
});
// 三级：点击三级默认样式
$($(".city_fram a")[2]).click(function(){

	var threeCity = [{"cityCode":101220609,"cityId":400,"cityName":"桐城市","parentId":35},{"cityCode":101220605,"cityId":401,"cityName":"怀宁县","parentId":35},{"cityCode":101220604,"cityId":403,"cityName":"潜山县","parentId":35},{"cityCode":101220603,"cityId":404,"cityName":"太湖县","parentId":35},{"cityCode":101220606,"cityId":405,"cityName":"宿松县","parentId":35},{"cityCode":101220607,"cityId":406,"cityName":"望江县","parentId":35},{"cityCode":101220608,"cityId":407,"cityName":"岳西县","parentId":35}];
	
	// 将三级标题，的标题内容改变
	addcity_fram_onFn($(".city_fram a")[2]);
	$($(".city_fram a")[2]).html(threeCity[0].cityName);
	// 三级标题内容改变
	var threeCon = "";
	for(var i=0;i<threeCity.length;i++){
		threeCon += `<a href="###" data-id="${threeCity[i].parentId}" con-data="three">${threeCity[i].cityName}</a>`;
	}
	$(".city_con_first").html(threeCon);

	// 点击三级
	$(".city_con_first a").each(function(index,val){
		$(this).click(function(){
			$(".city_box").css({"display":"none"});
		})
	})
});
// 点击一级
// oneClickFn();
//  点击边框样式
function addcity_fram_onFn(index){
	$(".city_fram a").removeClass("city_fram_on");
	$(index).addClass("city_fram_on");
}
// 点击二级
function secondClickFn(){
// 三级城市
	$(".city_con_first a").each(function(index,val){
		$(this).click(function(){
			threeConFn();
		})
	})
}
// 模块的缩放功能
// 配送方式
$(".dispatching").children("h2").click(function(){
	$(".dispatching_con").toggleClass("mb");

	$(".dispatching_less").toggleClass("mb");
	$(".dispatching_plus").toggleClass("mb");
});
// 商品清单
$(".pro_list").children("h2").click(function(){
	$(".pro_information").toggleClass("mb");
	$(".pro_list_tit").toggleClass("mb");
	$(".pro_less").toggleClass("mb");
	$(".pro_plus").toggleClass("mb");
});
// 买家留言
$(".leave_msg").children("h2").click(function(){
	$(".say_some").toggleClass("mb");
	$(".leave_less").toggleClass("mb");
	$(".leave_push").toggleClass("mb");
});
// 发票信息
$(".invoice").children("h2").click(function(){
	$(".invoice_info").toggleClass("mb");
	$(".invoice_less").toggleClass("mb");
	$(".invoice_push").toggleClass("mb");
});
// 送货上门 和 到店自取的切换功能
$(".The_door").click(function(){
	$(".car_one").css({"display":"block"});
	$(".car_two").css({"display":"none"})
	$(this).addClass("border");
	$(".self").removeClass("border");
	$(this).next("i").addClass("on");
	$(".self").next("i").removeClass("on");
})
$(".self").click(function(){
	$(".car_one").css({"display":"none"});
	$(".car_two").css({"display":"block"})
	$(this).addClass("border");
	$(".The_door").removeClass("border");
	$(this).next("i").addClass("on");
	$(".The_door").next("i").removeClass("on");
});
$("input").focus(function(){
	$(this).addClass("border");
})
$("input").blur(function(){
	$(this).removeClass("border");
})
$("select").focus(function(){
	$(this).addClass("border");
})
$("select").blur(function(){
	$(this).removeClass("border");
})

//  header-左侧登录、注册
$(".header_con_left_login").mouseover(function(){
	$(this).css("color","#4EB89E");
});
$(".header_con_left_login").mouseout(function(){
	$(this).css("color","#656665");
});
$(".header_con_left_register").mouseover(function(){
	$(this).css("color","#4EB89E");
});
$(".header_con_left_register").mouseout(function(){
	$(this).css("color","#656665");
});
//  header-右侧鼠标移入
$(".header_con_right_li").each(function(index,obj){
	$(this).mouseover(function(){
		$(this).children(".header_con_right_li1_list").css("display","block");
		$(this).children(".header_con_right_li1_list").children("li").css("background-color","white");
		$(this).children("a").css({"color":"white","border":"none"});
		$(this).css("background-color","#4EB89E");
	});
	$(this).mouseout(function(){
		$(this).children(".header_con_right_li1_list").css("display","none");
		$(this).children("a").css({"color":"#656665","border-right":"1px solid #DCDDDC"});
		$(this).css("background-color","white");
	});
});
//  搜索框
	// 1、text表单键盘抬起，给后台传value值，后台返回json串，写入下拉框
	$(".header_main_find_text").keydown(function(){
		$(".header_main_find_list").css("display","block");
	})
	$(".header_main_find_list").mouseover(function(ev){
		$(".header_main_find_list").css("display","block");
	})
	$(".header_main_find_list").mouseout(function(ev){
		$(".header_main_find_list").css("display","none");
	})
