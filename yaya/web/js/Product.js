
sendRequest();//解析url发送命令获取数据
//判断用户登录状态
showStar()// 向后台拉取商品评论的信息并展示在页面



var id=1; // 假定用用户的id  用来测试
// 右上角购物车中的数量的显示
	carNum();
	function carNum(){
		// var userid = getCookie(userId);   
		var url = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId?userId=1`;
		getGata(url,changeNum);
	}
	function changeNum(data){
		$(".car_number").html(data.length);
	}



function sendRequest(){// 拼接 参数
	// GetRequest()  public 中的公用函数
	if(GetRequest().id){
		var Url = `http://10.80.13.214:8081/goods/detail?goodsId=${GetRequest().id}&page=1`;
	}
	// 发送请求获取数据
	getGata(Url,creatProData);// public里面的公用函数
}
function creatProData(data){
	// 动态替换数据
	id = data.goodsId;
	$(".msg_info").find("h2").html(data.goodsName);
	$(".pro_info_msg").html(data.describe);
	$(".price").html(data.goodsPrice+".00");
	$(".pro_big_img").find("img")[0].src = data.imgList[0].imgUrl;
	$(".xmall_img").find("img")[0].src = data.imgList[0].imgUrl;
}
	$(".join_Car").click(function(){/// 加入购物车  *****************
		// 判断登录状态
		if(false){//如果没登录 显示提示 如果登陆了先后台发送产品的数据
			var html =`<p class="join clearfix">登录失败 <i class="fr clo">&times;</i></p>
						<p class="jion_tip clearfix">您尚未登录<a href="login.html" class="fr">立即登录》</a></p>
						<div class="login clearfix">
							<button class="sure fl">确定</button>
							<button class="cancel fl">取消</button>
						</div>`;
			$(".dPrice").css({"display":"block"});
			$(".alert").css({"display":"block"});
			$(".join").children("i").click(function(){
				$(".dPrice").css({"display":"none"});
				$(this).parents(".alert").css({"display":"none"});
			});
			$(".sure").click(function(){
				window.location.href = "login.html"//登录页面的地址
			});
			$(".cancel").click(function(){
				$(".dPrice").css({"display":"none"});
				$(this).parents(".alert").css({"display":"none"});
			});
		}else{
			var html = `<p class="join clearfix">添加成功<i class="fr clo">&times;</i></p>
						<p class="jion_tip clearfix">已成功添加购物车<a href="car.html" class="fr">去购物车结算》</a></p>
						<div class="login clearfix">
							<button class="sure fl">确定</button>
							<button class="cancel fl">取消</button>
						</div>`
			$(".dPrice").css({"display":"block"});
			$(".alert").html(html);
			$(".alert").css({"display":"block"});

			$(".join").children("i").click(function(){
				$(".dPrice").css({"display":"none"});
				$(this).parents(".alert").css({"display":"none"});
			});
			$(".sure").click(function(){
				window.location.href = "car.html"//登录页面的地址
			});
			$(".cancel").click(function(){
				$(".dPrice").css({"display":"none"});
				$(this).parents(".alert").css({"display":"none"});
			});
			var url =`http://10.80.13.214:8081/shopcar/shopcarInsert?userId=1&goodsId=${id}&numbers=${$(".pro_number").val()}&subtotal=${$(".pro_number").val()*parseInt($(".price").html())}`;
			console.log(url);
			$.ajax({
				url:url,
				type:"GET",
				async:true,
				success:function(data){
					console.log(data);
				}
			});
		}
	});
	// $(".keycode").click(function(){  //一键购
	// 	if(false){//如果没登录 显示提示 如果登陆了先后台发送产品的数据
	// 		var html =`<p class="join clearfix">登录失败 <i class="fr clo">&times;</i></p>
	// 					<p class="jion_tip clearfix">您尚未登录<a href="car.html" class="fr">立即登录》</a></p>
	// 					<div class="login clearfix">
	// 						<button class="sure fl">确定</button>
	// 						<button class="cancel fl">取消</button>
	// 					</div>`;
	// 		$(".dPrice").css({"display":"block"});
	// 		$(".alert").html(html);
	// 		$(".alert").css({"display":"block"});
	// 		$(".join").children("i").click(function(){
	// 			$(".dPrice").css({"display":"none"});
	// 			$(this).parents(".alert").css({"display":"none"});
	// 		});
	// 		$(".sure").click(function(){
	// 			window.location.hrer = ""//登录页面的地址
	// 		});
	// 		$(".cancel").click(function(){
	// 			$(".dPrice").css({"display":"none"});
	// 			$(this).parents(".alert").css({"display":"none"});
	// 		});
	// 	}else{
	// 		var url = `http://10.80.13.214:8081/shopcar/shopcarInsert?userId=1&goodsId=${id}&numbers=${$(".pro_number").html()}&subtotal=${$(".pro_number").html()*parseInt($(".price").html())};`
	// 		$.ajax({
	// 			url:url,
	// 			type:"GET",
	// 			async:true,
	// 		});
	// 	}
	// });
	// 展示商品的评价信息
	function showStar(){
		var url = `http://10.80.13.196:8081//comment/findCategoryComment?goodsId=${GetRequest().id}`;
		getGata(url,showStars);// public里面的公用函数
	}
	function showStars(data){
		var html = ``;
		var len = data.length;
		for(var i=0;i<len;i++){
			html+=`<li class="clearfix">
							<div class="user_left fl">
								<div class="user_head">
									<img src="../image/product/userpic.jpg" alt="">
								</div>
								<p class="user_tel">
									${data[i].user.userName}
								</p>
							</div>
							<div class="user_right fl">
								<ul class="clearfix">
									${star(data[i].praiseLevel)}
								</ul>
								<p class="say_massage">
									${data[i].content}
								</p>
								<div class="time_pro">
									<span>${data[i].commentTime}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span>品牌：${data[i].goods.goodsName}</span>
								</div>
							</div>
						</li>`;
		}
		function star(len){
			var starNum = ``;
			for(var i=0;i<len;i++){
				starNum+= `<li class="fl"></li>`
			}
			return 	starNum;
		}
		$(".user_say").html(html);
	}
// 图片放大效果
var amplification = $(".border")[0];
amplification.onmouseover=function(){
	$(".border").children("img").css({"width":"900px","height":"900px"});
	var img = $(".border").children("img");
	amplification.onmousemove=function(ev){
		var X =-0.5*ev.offsetX;
		var Y =-0.5*ev.offsetY;
		$(img).css({"left":X+"px","top":Y+"px"});
	};
}
// 点击大图全屏展示效果
$(".border").children("img").click(function(){
	$(".full_screen").css({"display":"block"});
	$(".dPrice").css({"display":"block"});
	$(".full_screen")[0].src=this.src;
})
// 点击图片 图片和背景都消失
$(".full_screen").click(function(){
	$(this).css({"display":"none"});
	$(".dPrice").css({"display":"none"});
})
// 点击背景区域 图片和背景都消失
$(".dPrice").click(function(){
	$(this).css({"display":"none"});
	$(".full_screen").css({"display":"none"});
	$(".notice").css({"display":"none"});
});
// 小图边框切换效果
$(".border").mouseout(function(){
	$(".border").children("img").css({"width":"450px","height":"450px","left":"0px","top":"0px"});
});
// 点击小图切换大图
$(".xmall_img").click(function(){
	$(this).parents(".pro_big_img").children(".border").children("img")[0].src = $(this).children("img")[0].src;
});
// 小图滚动效果

// 向右
$(".sle_small").css("width",($(".xmall_img").length+5)*$(".xmall_img").innerWidth());
$(".next").click(function(){
	var width = $(".xmall_img").innerWidth();
	var out = $(".sel_zone").innerWidth();
	var X =$('.sle_small').innerWidth() + $('.sle_small')[0].offsetLeft - width*4;
	if(X>out){
		$(".sle_small").css({"left":$('.sle_small')[0].offsetLeft - width -12 +"px"});
	}
});
// 向左
$(".prev").click(function(){
	var width = $(".xmall_img").innerWidth();
	var X =$('.sle_small')[0].offsetLeft;
	if(X<0){
		$(".sle_small").css({"left":$('.sle_small')[0].offsetLeft + width +12 +"px"});
	}
});
// 改变小图的边框
function changeImg(elm){
	$(".xmall_img").css({"border":"1px solid #fff"});
	$(elm).css({"border":"1px solid #FF7828"});
}
function go(elm){
	$(elm).css({"backgroundColor":"#38B99F","color":"#fff"});
	$(elm).mouseout(function(){
		$(this).css({"backgroundColor":"#fff","color":"#666"});
	})
}
// 种类被选中的效果
	function selected(elm){
		$(elm).parents(".ptolist_two_r").find("em").removeClass("on");
		$(elm).children("em").toggleClass("on");
	}
// 降价通知控制
$(".msg_touser").click(function(){
	$(".dPrice").css({"display":"block"});
	$(".notice").css({"display":"block"});
})
$(".cha").click(function(){
	$(".dPrice").css({"display":"none"});
	$(".notice").css({"display":"none"});
})
// 下拉框效果
$(".borders").mouseenter(function(){
	$(this).children(".borders_chl").css({"display":"block"});
})
$(".borders").mouseleave(function(){
	$(this).children(".borders_chl").css({"display":"none"});
})
$(".city_sel").mouseenter(function(){
	$(this).css({"border":"1px dashed #FF892A"});
	$(this).children(".city_select_chl").css({"display":"block","border":"1px dashed #FF892A"});
	$(this).addClass("city_select_af");
});
$(".city_sel").mouseleave(function(){
	$(this).css({"border":"1px solid #E7E7E7"})
	$(this).children(".city_select_chl").css({"display":"none"});
	$(this).removeClass("city_select_af");
});
$(".particulars").prev("a").mouseover(function(){
	$(".particulars").css({"display":"block"});
})
$(".particulars").prev("a").mouseout(function(){
	$(".particulars").css({"display":"none"});
});
// 手机购买显示二维码
$(".use_phone").mouseover(function(){
	$(this).addClass("city_select_af");
	$(this).css({"border-radius":"5px 5px 0 0","borderBottom":"1px solid #fff"});
	$(this).children("div").css({"display":"block"});
})
$(".use_phone").mouseout(function(){
	$(this).removeClass("city_select_af");
	$(this).css({"border-radius":"5px","border":"1px solid #333"});
	$(this).children("div").css({"display":"none"});
});
//  数量的控制
$(".sub_num").click(function(){
	$(".pro_number").val(parseInt($(".pro_number").val())+1);
})
$(".sup_num").click(function(){
	$(".pro_number").val(parseInt($(".pro_number").val())-1);
	if($(".pro_number").val()<1){
		$(".pro_number").val(1);
	}
});
//左下角商品的选项卡
$(".sam_price").click(function(){
	$(".listing").css({"display":"none"});
	$(".one").css({"display":"block"});
});
$(".sam_pro").click(function(){
	$(".listing").css({"display":"none"});
	$(".two").css({"display":"block"});
});
$(".sam_class").click(function(){
	$(".listing").css({"display":"none"});
	$(".three").css({"display":"block"});
});
	// 点击改变选显卡
	function changeCar(elm){
		var j = $(".menu_li").children("a").length;
		for(var i=0;i<j;i++){
			if(!$(".menu_li").children("a")[i].className){
				$($(".menu_li").children("a")[i]).addClass("out");
			}
		}
		$(elm).removeClass("out");
		$(".menu_li").children("a").css({"backgroundColor":"#fff","color":"#666B99"});
		$(elm).css({"backgroundColor":"#38B99F","color":"#fff"});
	}
//   *************************** 城市  **********************************
	 // 点击给个class名，
		// 将之前的class名去除  ----- .city_fram_on
		//  将伪类的内容设为 ""
// 鼠标移入  header_main_city，  city_box为block
var cityTime = "";
$(".show_city").mouseenter(function(){
	// getCityData();
	clearTimeout(cityTime);
	$(".city_box").css({"display":"block"});
})
$(".show_city").mouseleave(function(){
	cityTime = setTimeout(function(){
		$(".city_box").css({"display":"none"});
	},100);
});
/// ajax获取一级内容
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
// ************************************************************
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



