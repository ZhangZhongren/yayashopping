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
		// var userid = getCookie(userId);   
		var url = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId?userId=1`;
		getGata(url,changeNum);
	}
	function changeNum(data){
		console.log(data.length);
		$(".car_number").html(data.length);
	}
// 判断用户登录状态并用一个断句变量保存用户名
sendRequest();//解析url发送命令获取数据
function sendRequest(){// 拼接 参数
	// GetRequest()  public 中的公用函数
	var Url = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId?userId=1`;
	// 发送请求获取数据
	getGata(Url,creatCarData);// public里面的公用函数
}
function creatCarData(data){// 将购物车中的数据渲染到页面
	if(!data[0]){
		$("section").css("display","none");
		$(".shooptips").css("display","block");
	}
	var html = ``;
	var len = data[0].goodsList.length;
	for(var i =0;i<len;i++){
		html += `<div class="pro_item clearfix">
			<div class="one select fl">
				 <div class="to_select on"></div>
				<input type="checkbox" hidden="hidden" class="check" checked="true">
				<input type="text" class="goodsId" value="${data[i].goodsList[i].goodsId}" hidden="hidden">
			</div>
			<div class="two pro_img fl">
				<a href="product.html?id=${data[i].goodsList[i].goodsId}" target="_black">
					<img  src="${data[i].goodsList[i].imgList[i].imgUrl}" alt="">
				</a>
				<div class="pro_img_msg fl">
					<p><a href="" class="pro_name">${data[i].goodsList[i].goodsName}</a></p>
					<span class="pro_promise"><i class="iconfont icon-dunpai">购买延保</i></span>
				</div>
			</div>
			<div class="three specifications fl">
				<p class="specifications_p"></p>
			</div>
			<div class="four unit fl">
				<b>¥ 1,480.00</b>
			</div>
			<div class="five num fl">
				<div class="box fl">
					<span class="sup a fl">－</span>
					<input type="text" class="pro_number fl" value="${data[i].numbers}">
					<span class="sub a fl">＋</span>
				</div>
			</div>
			<div class="six preferential fl">
				<p class="preferential_p"></p>
			</div>
			<div class="seven subtotal fl">
				<span class="subtotal_sty">￥<i class="subtotal_p">${data[i].subtotal}</i>.00</span>
			</div>
			<div class="eight ctrl fl">
				<a href="javascript:void(0);" class="collection"><i class="iconfont icon-shoucang"></i>&nbsp;移入收藏夹</a>
				<a href="javascript:void(0);" class="del"><i class="iconfont icon-shanchu"></i>&nbsp;删除</a>
			</div>
		</div>`;
	}
	$(".itemmain").html(html); // 将数据渲染到页面
	colours() // 获取猜你喜欢的数据  // 购物车中的数据显示之后 在渲染猜你喜欢的数据
	// 移入收藏夹和删除的颜色改变效果
		$(".collection").mouseover(function(){
			$(this).css({"color":"#FF892A"});
		})
		$(".collection").mouseout(function(){
			$(this).css({"color":"#463333"});
		})
		$(".del").mouseover(function(){
			$(this).css({"color":"#FF892A"});
		})
		$(".del").mouseout(function(){
			$(this).css({"color":"#463333"});
		})
		// 加减的功能
		var danjian = $(".subtotal_p").html();
		$(".sup").click(function(){
			var val = $(this).next("input").val();
			$(this).next(".pro_number").val(val-1);
			if(val-1<=0){
				$(this).next("input").val(1);
			}
			// 改变小计
			$(this).parents(".pro_item").find(".subtotal_p").html(danjian*$(this).next("input").val());
			totalPrice() // 总价
			allGoods() //  商品总数
		});
		$(".sub").click(function(){
			$(this).prev(".pro_number").val(parseInt($(this).prev("input").val())+1);
			// 改变小计
			$(this).parents(".pro_item").find(".subtotal_p").html(danjian*$(this).prev("input").val());
			totalPrice() // 总价
			allGoods() //商品总数
		});
		// 总计功能
		totalPrice();
		function totalPrice(){
			var xiaoji = $(".subtotal_p");
			var allPic = 0
			for(var i =0;i<xiaoji.length;i++){
				if($(xiaoji[i]).parents(".pro_item").find(".check")[0].checked){
					allPic += parseInt(xiaoji[i].innerHTML);
				}
			}
			$(".all_price").html(allPic + ".00");
			$(".total").children("i").html("￥"+allPic+".00");
		}
		// 计算共有多少件商品
		allGoods();
		function allGoods(){
			var goods = $(".pro_number");
			var all=0
			for(var i=0;i<goods.length;i++){
				if($(goods[i]).parents(".pro_item").find(".check")[0].checked){
					all+=parseInt(goods[i].value);
				}
			}
			$(".selected_num").html(all);
		}
		// 删除功能
		$(".del").click(function(){
			$(this).parents(".pro_item").remove();
			totalPrice() // 总价
			var arr = [];
			arr.push($(this).parents(".pro_item").find(".goodsId").val());
			allGoods() //  商品总数
			delForData(arr); //调用从数据库中删除元素的函数
		});
		// 删除选中的商品
		$(".del_sel").click(function(){
			var all = $(".to_select").next("input");
			var arr = [];
			for(var i=0; i<all.length-1 ; i++){
				if(all[i].checked){
					arr.push(i);
					$(all[i]).parents(".pro_item").remove();
				}
			}
			// 全部都清空了就让复选框 变为不选中
			totalPrice();
			allGoods();
			var num = $(".check").length;
			if(num===1){
				console.log($(this).parents(".total_info").find(".to_select"));
				$(this).parents(".total_info").find(".to_select").removeClass("on");
			}
			totalPrice() // 总价
			allGoods() //  商品总数
			delForData(arr);//调用从数据库中删除元素的函数
		});
		// 复选框选中的功能
			for(var i=0 ;i< $(".to_select").length-1;i++ ){
				$(".to_select")[i].onclick=function(){
					$(this).toggleClass("on");
					$(this).next("input")[0].checked ?  $ (this).next("input")[0].checked = false : $(this).next("input")[0].checked = true;
					// 复选框全部选中 改为全选 
					var allchenk = $(".check");
					var num = 0;
					for(var i = 0; i< allchenk.length-1; i++){
						if(allchenk[i].checked){
							num ++;
						}
					}
					if(num == allchenk.length -1){
						$($(".to_select")[allchenk.length -1]).addClass("on");
					}else{
						$($(".to_select")[allchenk.length -1]).removeClass("on");
					}
					totalPrice();
					allGoods();
				}
			}
		// 全选功能
		$(".select_all").click(function(){
			if($(this).prev(".one").children("input")[0].checked == true){
				$(".to_select").removeClass("on");
				for(var i=0;i<$(".check").length;i++){
					$(".check")[i].checked = false;
				}
			}else{
				$(".to_select").addClass("on");
				for(var i=0;i<$(".check").length;i++){
					$(".check")[i].checked = true;
				}
			}
			totalPrice();
			allGoods();
		});
		// 点击最后一个复选框同样实现全选全不选的功能
		$($(".to_select")[$(".to_select").length-1]).click(function(){
			if($(this).next("input")[0].checked == true){
				$(".to_select").removeClass("on");
				for(var i=0;i<$(".check").length;i++){
					$(".check")[i].checked = false;
				}
			}else{
				console.log('456');
				$(".to_select").addClass("on");
				for(var i=0;i<$(".check").length;i++){
					$(".check")[i].checked = true;
				}
			}
			totalPrice();
			allGoods();
		});
}
//点击去结算 
// 去结算
$(".over").click(function(){
	var len = $(".check").length;
	var arr = [];
	for(var i=0;i<len-1;i++){
		if($(".check")[i].checked){
			arr.push($($(".check")[i]).next("input").val());
		}
	}
	var str = "arr=" + arr.toString() + "&";
	var url = `http://localhost:8081/order/insertOrder?${str}userId=1`;
	$.ajax({
		url:url,
		type:"GET",
		async:true,
	});
	var parameter = "arr=" + arr.toString();
	window.location.href="address.html?"+parameter+"";
});
	// 从数据库中删除商品
	function delForData(arr){
		var   str = "";
		for(var i=0;i<arr.length;i++){
			str += "arr=" + arr[i] + "&"; 
		};
		var url = `http://10.80.13.214:8081/shopcar/deleteShopcar?${str}userId=1`;
		console.log(url);
		$.ajax({
			type:"GET",
			url:url,
			async:true,
			success:function(){
				alert("删除成功");
			}
		})

	}
// 购物车是空的点击去购物 跳转到  list页面  
$(".shooptips").click(function(){
	window.location.href = "list.html?id=1";
});


function colours(){
	var url = `http://10.80.13.196:8081/user/selectYouLike`;
	getGata(url,guss);
}
function guss(data){
	if(!data[0]){
		return false;
	}
	var len = data.length
	var html =`<div class="ring clearfix fl" >`;
	for(var i = 1 ;i<= 5 ; i++){
		html += `<div class="pro_scroll fl">
					<a href=""><img src="${data[i-1].imgList[0].imgUrl}" alt=""></a>
					<p class="pro_title">${data[i-1].goodsName}</p>
					<p class="product_tips clearfix">
						<span class="fl product_tips_val">￥${data[i-1].goodsPrice}</span><span class="fr shopped">已有3人评价</span>
					</p>
					<span class="join_the_car"><i class=""></i>加入购物车</span>
				</div>`;
		if(i%5==0){
			html+= `</div><div class="ring clearfix fl" >`;
		}
	}
	html += `</div>`;
	$(".list").html(html);
}
// 2、点击搜索，下面的页面数据改变
	document.getElementsByClassName("header_main_find_btn")[0].onclick=function(){
		window.location.href = "car.html";
		$(".header_main_find_form")[0].action = "list.html"
	}
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
setTimeout(function(){
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
},1000)
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

















