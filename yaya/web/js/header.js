	// 2、点击搜索，下面的页面数据改变
	$(".header_main_find_btn").click(function(){
		var url = encodeURI("list.html?goodsName="+$(".header_main_find_text").val());
		window.location.href = url;
		return false;
	});
	$(".jump_list").click(function(){
		window.location.href = "list.html?id=1";
	});
	// 右上角购物车中的数量的显示
	carNum();
	function carNum(){
		var url = `http://10.80.13.214:8081/shopcar/shopcarFindByUserId?userId=1`;
		getGata(url,changeNum);
	}
	function changeNum(data){
		$(".car_number").html(data.length);
	}
// getGata("http://10.80.13.214:8081/index/category",creat); //获取无线分类的数据
var str  = '[{"cId":1,"cName":"手机通讯","categoryList":[{"cId":5,"cName":"苹果","categoryList":[{"cId":39,"cName":"iphone X","categoryList":[],"parentId":5,"state":0},{"cId":40,"cName":"iphone8Plus","categoryList":[],"parentId":5,"state":0},{"cId":41,"cName":"iphone 6s","categoryList":[],"parentId":5,"state":0},{"cId":42,"cName":"iphone 8s","categoryList":[],"parentId":5,"state":0}],"parentId":1,"state":0},{"cId":6,"cName":"华为","categoryList":[{"cId":43,"cName":"华为Mate10","categoryList":[],"parentId":6,"state":0},{"cId":44,"cName":"华为Mate9","categoryList":[],"parentId":6,"state":0},{"cId":45,"cName":"华为P10Plus","categoryList":[],"parentId":6,"state":0}],"parentId":1,"state":0},{"cId":7,"cName":"小米","categoryList":[{"cId":46,"cName":"小米6","categoryList":[],"parentId":7,"state":0},{"cId":47,"cName":"小米MIX2","categoryList":[],"parentId":7,"state":0},{"cId":48,"cName":"红米5A","categoryList":[],"parentId":7,"state":0},{"cId":49,"cName":"小米Note3","categoryList":[],"parentId":7,"state":0}],"parentId":1,"state":0},{"cId":8,"cName":"三星","categoryList":[{"cId":50,"cName":"三星S8","categoryList":[],"parentId":8,"state":0},{"cId":51,"cName":"三星Note8","categoryList":[],"parentId":8,"state":0},{"cId":52,"cName":"三星S7","categoryList":[],"parentId":8,"state":0}],"parentId":1,"state":0},{"cId":9,"cName":"oppo","categoryList":[{"cId":53,"cName":"OPPO R11","categoryList":[],"parentId":9,"state":0},{"cId":54,"cName":"OPPO R11s","categoryList":[],"parentId":9,"state":0},{"cId":55,"cName":"OPPO R9s","categoryList":[],"parentId":9,"state":0}],"parentId":1,"state":0},{"cId":10,"cName":"vivo","categoryList":[{"cId":56,"cName":"vivo X20","categoryList":[],"parentId":10,"state":0},{"cId":57,"cName":"vivo X9s","categoryList":[],"parentId":10,"state":0},{"cId":58,"cName":"vivo X20Plus","categoryList":[],"parentId":10,"state":0}],"parentId":1,"state":0},{"cId":11,"cName":"魅族","categoryList":[{"cId":59,"cName":"魅族Note6","categoryList":[],"parentId":11,"state":0},{"cId":60,"cName":"魅族Pro 7","categoryList":[],"parentId":11,"state":0},{"cId":61,"cName":"魅蓝E","categoryList":[],"parentId":11,"state":0}],"parentId":1,"state":0},{"cId":12,"cName":"金立","categoryList":[{"cId":62,"cName":"金立S10C","categoryList":[],"parentId":12,"state":0},{"cId":63,"cName":"金立S9","categoryList":[],"parentId":12,"state":0},{"cId":64,"cName":"金立 M2017","categoryList":[],"parentId":12,"state":0}],"parentId":1,"state":0}],"parentId":0,"state":0},{"cId":2,"cName":"手机配件","categoryList":[{"cId":13,"cName":"保护壳","categoryList":[{"cId":65,"cName":"苹果适用","categoryList":[],"parentId":13,"state":0},{"cId":66,"cName":"华为适用","categoryList":[],"parentId":13,"state":0},{"cId":67,"cName":"小米适用","categoryList":[],"parentId":13,"state":0},{"cId":68,"cName":"魅族适用","categoryList":[],"parentId":13,"state":0},{"cId":69,"cName":"背壳","categoryList":[],"parentId":13,"state":0},{"cId":70,"cName":"皮套","categoryList":[],"parentId":13,"state":0}],"parentId":2,"state":0},{"cId":14,"cName":"钢化膜","categoryList":[{"cId":71,"cName":"苹果适用","categoryList":[],"parentId":14,"state":0},{"cId":72,"cName":"华为适用","categoryList":[],"parentId":14,"state":0},{"cId":73,"cName":"小米适用","categoryList":[],"parentId":14,"state":0},{"cId":74,"cName":"魅族适用","categoryList":[],"parentId":14,"state":0},{"cId":75,"cName":"防蓝光","categoryList":[],"parentId":14,"state":0},{"cId":76,"cName":"防油污","categoryList":[],"parentId":14,"state":0},{"cId":77,"cName":"其他贴膜","categoryList":[],"parentId":14,"state":0}],"parentId":2,"state":0},{"cId":15,"cName":"移动电源","categoryList":[{"cId":82,"cName":"5000mAh以下","categoryList":[],"parentId":15,"state":0},{"cId":83,"cName":"5000-9000mAh","categoryList":[],"parentId":15,"state":0},{"cId":84,"cName":"9000-12000mAh","categoryList":[],"parentId":15,"state":0},{"cId":85,"cName":"12000mAh","categoryList":[],"parentId":15,"state":0},{"cId":86,"cName":"多U口输出","categoryList":[],"parentId":15,"state":0},{"cId":87,"cName":"安全快充","categoryList":[],"parentId":15,"state":0},{"cId":88,"cName":"便携美观","categoryList":[],"parentId":15,"state":0},{"cId":89,"cName":"大容量","categoryList":[],"parentId":15,"state":0}],"parentId":2,"state":0},{"cId":16,"cName":"充电器","categoryList":[{"cId":95,"cName":"苹果充电器","categoryList":[],"parentId":16,"state":0},{"cId":96,"cName":"华为充电器","categoryList":[],"parentId":16,"state":0},{"cId":97,"cName":"小米充电器","categoryList":[],"parentId":16,"state":0},{"cId":98,"cName":"三星充电器","categoryList":[],"parentId":16,"state":0},{"cId":99,"cName":"其他品牌","categoryList":[],"parentId":16,"state":0}],"parentId":2,"state":0},{"cId":17,"cName":"数据线","categoryList":[{"cId":78,"cName":"Lightning接口","categoryList":[],"parentId":17,"state":0},{"cId":79,"cName":"Micro-USB接口","categoryList":[],"parentId":17,"state":0},{"cId":80,"cName":"Type-C接口","categoryList":[],"parentId":17,"state":0},{"cId":81,"cName":"多合-接口","categoryList":[],"parentId":17,"state":0}],"parentId":2,"state":0},{"cId":18,"cName":"蓝牙耳机","categoryList":[],"parentId":2,"state":0},{"cId":19,"cName":"储存类","categoryList":[{"cId":103,"cName":"手机U盘","categoryList":[],"parentId":19,"state":0},{"cId":104,"cName":"U盘","categoryList":[],"parentId":19,"state":0},{"cId":105,"cName":"两用U盘","categoryList":[],"parentId":19,"state":0}],"parentId":2,"state":0},{"cId":20,"cName":"耳机类","categoryList":[{"cId":90,"cName":"耳塞式耳机","categoryList":[],"parentId":20,"state":0},{"cId":91,"cName":"耳挂式耳机","categoryList":[],"parentId":20,"state":0},{"cId":92,"cName":"头戴式耳机","categoryList":[],"parentId":20,"state":0},{"cId":93,"cName":"迷你音响","categoryList":[],"parentId":20,"state":0},{"cId":94,"cName":"蓝牙耳机","categoryList":[],"parentId":20,"state":0}],"parentId":2,"state":0},{"cId":21,"cName":"其他配件","categoryList":[{"cId":100,"cName":"自拍杆","categoryList":[],"parentId":21,"state":0},{"cId":101,"cName":"创意插线板","categoryList":[],"parentId":21,"state":0},{"cId":102,"cName":"其他配件","categoryList":[],"parentId":21,"state":0}],"parentId":2,"state":0}],"parentId":0,"state":0},{"cId":3,"cName":"平板/笔记本","categoryList":[{"cId":22,"cName":"平板电脑","categoryList":[{"cId":106,"cName":"苹果","categoryList":[],"parentId":22,"state":0},{"cId":107,"cName":"小米","categoryList":[],"parentId":22,"state":0},{"cId":108,"cName":"华为","categoryList":[],"parentId":22,"state":0},{"cId":109,"cName":"微软Microsoft","categoryList":[],"parentId":22,"state":0},{"cId":110,"cName":"联想","categoryList":[],"parentId":22,"state":0}],"parentId":3,"state":0},{"cId":23,"cName":"平板配件","categoryList":[{"cId":128,"cName":"平板贴膜","categoryList":[],"parentId":23,"state":0},{"cId":129,"cName":"平板保护套","categoryList":[],"parentId":23,"state":0},{"cId":130,"cName":"平板其他配件","categoryList":[],"parentId":23,"state":0}],"parentId":3,"state":0},{"cId":24,"cName":"电脑品牌","categoryList":[{"cId":111,"cName":"苹果","categoryList":[],"parentId":24,"state":0},{"cId":112,"cName":"华硕","categoryList":[],"parentId":24,"state":0},{"cId":113,"cName":"联想","categoryList":[],"parentId":24,"state":0},{"cId":114,"cName":"微软","categoryList":[],"parentId":24,"state":0},{"cId":115,"cName":"华为","categoryList":[],"parentId":24,"state":0},{"cId":116,"cName":"戴尔","categoryList":[],"parentId":24,"state":0},{"cId":117,"cName":"小米","categoryList":[],"parentId":24,"state":0}],"parentId":3,"state":0},{"cId":25,"cName":"笔记本配件","categoryList":[{"cId":131,"cName":"电脑包","categoryList":[],"parentId":25,"state":0},{"cId":132,"cName":"笔记本其他配件","categoryList":[],"parentId":25,"state":0}],"parentId":3,"state":0},{"cId":26,"cName":"电脑配件","categoryList":[],"parentId":3,"state":0},{"cId":27,"cName":"产品定位","categoryList":[{"cId":118,"cName":"时尚丽人本","categoryList":[],"parentId":27,"state":0},{"cId":119,"cName":"家庭娱乐本","categoryList":[],"parentId":27,"state":0},{"cId":120,"cName":"二合-笔记本","categoryList":[],"parentId":27,"state":0},{"cId":121,"cName":"游戏影音本","categoryList":[],"parentId":27,"state":0},{"cId":122,"cName":"轻便商务本","categoryList":[],"parentId":27,"state":0},{"cId":123,"cName":"全能学生本","categoryList":[],"parentId":27,"state":0}],"parentId":3,"state":0},{"cId":28,"cName":"外设产品","categoryList":[{"cId":124,"cName":"移动硬盘","categoryList":[],"parentId":28,"state":0},{"cId":125,"cName":"U盘","categoryList":[],"parentId":28,"state":0},{"cId":126,"cName":"鼠标/键盘/鼠标垫","categoryList":[],"parentId":28,"state":0},{"cId":127,"cName":"USB分线器","categoryList":[],"parentId":28,"state":0}],"parentId":3,"state":0},{"cId":29,"cName":"所有笔记本","categoryList":[],"parentId":3,"state":0}],"parentId":0,"state":0},{"cId":4,"cName":"智趣潮品","categoryList":[{"cId":30,"cName":"热门单品","categoryList":[{"cId":133,"cName":"小D VR眼镜","categoryList":[],"parentId":30,"state":0},{"cId":134,"cName":"华为B3手环","categoryList":[],"parentId":30,"state":0},{"cId":135,"cName":"华为WATCH手表","categoryList":[],"parentId":30,"state":0},{"cId":136,"cName":"洛克 哆啦A梦系列自拍杆","categoryList":[],"parentId":30,"state":0},{"cId":137,"cName":"越野战神遥控车","categoryList":[],"parentId":30,"state":0}],"parentId":4,"state":0},{"cId":31,"cName":"智能穿戴","categoryList":[{"cId":145,"cName":"智能手表","categoryList":[],"parentId":31,"state":0},{"cId":146,"cName":"智能手环","categoryList":[],"parentId":31,"state":0},{"cId":147,"cName":"儿童手表","categoryList":[],"parentId":31,"state":0},{"cId":148,"cName":"其他","categoryList":[],"parentId":31,"state":0}],"parentId":4,"state":0},{"cId":32,"cName":"儿童手表","categoryList":[],"parentId":4,"state":0},{"cId":33,"cName":"智能手表","categoryList":[],"parentId":4,"state":0},{"cId":34,"cName":"智能健康","categoryList":[],"parentId":4,"state":0},{"cId":35,"cName":"智能家居","categoryList":[{"cId":149,"cName":"扫地机器人","categoryList":[],"parentId":35,"state":0},{"cId":150,"cName":"智能灯/LED灯","categoryList":[],"parentId":35,"state":0}],"parentId":4,"state":0},{"cId":36,"cName":"创意配件","categoryList":[{"cId":138,"cName":"创意插线头","categoryList":[],"parentId":36,"state":0},{"cId":139,"cName":"手机镜头","categoryList":[],"parentId":36,"state":0},{"cId":140,"cName":"暴风魔镜","categoryList":[],"parentId":36,"state":0},{"cId":141,"cName":"体感车","categoryList":[],"parentId":36,"state":0},{"cId":142,"cName":"航拍器","categoryList":[],"parentId":36,"state":0},{"cId":143,"cName":"自拍杆","categoryList":[],"parentId":36,"state":0},{"cId":144,"cName":"游戏手柄","categoryList":[],"parentId":36,"state":0}],"parentId":4,"state":0},{"cId":37,"cName":"车载配件","categoryList":[{"cId":151,"cName":"车充","categoryList":[],"parentId":37,"state":0},{"cId":152,"cName":"车载支架","categoryList":[],"parentId":37,"state":0},{"cId":153,"cName":"行车记录仪","categoryList":[],"parentId":37,"state":0}],"parentId":4,"state":0},{"cId":38,"cName":"蓝牙音箱","categoryList":[],"parentId":4,"state":0}],"parentId":0,"state":0}]';
var datas = JSON.parse(str);
creat(datas);
function creat(data){
	// 第一级分类
	var outhtml = "";
	var innerHtml = "";
	var length = data.length;
	for(var i = 0;i<length;i++){
		outhtml += `<div class="header_list_con_shoppshort_list_con">
						<div class="header_list_con_shoppshort_list_con_a">
							<a href="list.html?id=${data[i].cId}">${data[i].cName}</a></div>
						<div class="header_list_con_shoppshort_list_con_b">
							${haha(data[i].categoryList)}
						</div>
					</div>`;
		}
	innerHtml += `<div class="header_list_con_shoppshort_list_con_right">
						<div class="header_list_con_shoppshort_list_con_right_popluar">
							<!--  列表内容3 -->
								${hehe(data[0].categoryList)}
						</div>
						<div class="header_list_con_shoppshort_list_con_right_img">
							<div class="header_list_con_shoppshort_list_con_right_img_img"></div>
							<div class="header_list_con_shoppshort_list_con_right_img_con">苹果iPhone 8 Plus 全网通</div>
							<div>双面玻璃设置，无线充电更便捷！</div>
							<div><span>￥</span><span>6,39.00</span></div>
						</div>
						<div class="header_list_con_shoppshort_list_con_right_logo">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>`;
		function haha(data){
			var html = '';
			var length = data.length;
			for(var i = 0;i<length;i++){
				html += `<span><a href="list.html?id=${data[i].cId}">${data[i].cName}</a></span>`;
			}
			return html;
		}
		function hehe(data){
			var html = '';
			var length = data.length;
			for(var i = 0; i<length; i++){
				html += `<div class="header_list_con_shoppshort_list_con_right_popluar_con clearfix"><div id="font">${data[i].cName}</div><ul>`;
				for(var j =0; j < data[i].categoryList.length; j++){
					html += `<li><a href="product.html?id=${data[i].cId}">${data[i].categoryList[j].cName}</a></li>`;
				}
				html += `</ul></div>`;
			}
			return html;
		}
		$(".header_list_con_shoppshort_list").html(outhtml + innerHtml);
	}
	// 动态改变右边数据的函数
	 function changeRightDara(id){
	 	var innerHtml = "";
	 	var length = datas[id].categoryList.length;
	 	var data = datas[id].categoryList;
	 	for(var i = 0; i< length; i++){
	 		if(data[i].categoryList[0]){
	 			innerHtml += `<div class="header_list_con_shoppshort_list_con_right_popluar_con clearfix"><div id="font">${data[i].cName}</div>
								<ul>`;
				for(var j =0; j < data[i].categoryList.length; j++){
						innerHtml += `<li><a href="product.html?id=${data[i].cId}">${data[i].categoryList[j].cName}</a></li>`;
				}
				innerHtml += `</ul></div>`;
	 		}
		}
		$(".header_list_con_shoppshort_list_con_right_popluar").html(innerHtml);
		
	 }
	 // 控制下拉列表
		var list_time = 0;
		var list_time2 = 0;
		$(".header_list_con_shoppshort_head").mouseenter(function(){
			clearTimeout(list_time2)
			$(".header_list_con_shoppshort_list").css({"display":"block"})
		})
		$(".header_list_con_shoppshort_head").mouseleave(function(){
			list_time = setTimeout(function(){
				$(".header_list_con_shoppshort_list").css({"display":"none"});
			},100);
		})
		$(".header_list_con_shoppshort_list").mouseenter(function(){
			clearTimeout(list_time);
		});
		$(".header_list_con_shoppshort_list").mouseleave(function(){
			list_time2 = setTimeout(function(){
				$(".header_list_con_shoppshort_list").css({"display":"none"})
			},100)
		});
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
	});
	$(".header_main_find_list").mouseover(function(ev){
		$(".header_main_find_list").css("display","block");
	});
	$(".header_main_find_list").mouseout(function(ev){
		$(".header_main_find_list").css("display","none");
	});
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
// 3、热门词汇 最多出现8条数据
		//  判断：给个json串的长度超过620px,舍去一个值
//  列表
window.onload=function(){
	var aaTime = 0;
	var bbTime = 0;
	var header_con = document.getElementsByClassName("header_list_con_shoppshort_list_con");
	var header_list = document.getElementsByClassName("header_list_con_shoppshort_list_con_right")[0];
	for(index in header_con){
		//  内部跳到外部，关闭内部定时器
		//  外部跳到外部，关闭外部定时器
		//  进入外部
		header_con[index].aaa = index;
		header_con[index].onmouseenter = function(){
			clearTimeout(bbTime);
			clearTimeout(aaTime);
			changeRightDara(this.aaa);
			header_list.style.display = "block";
			for(var i = 0;i<header_con.length;i++){
				header_con[i].zzr = 0;
				$(".header_list_con_shoppshort_list_con").css({"background-color":"black"})
				$(".header_list_con_shoppshort_list_con").find("a").css({"color":"#fff"})
			}
			$(this).css({"background-color":"#fff"})
			$(this).find("a").css({"color":"black"})
			this.zzr = 1;
		};
		//  外部离开
		header_con[index].onmouseleave = function(){	
			aaTime = setTimeout(function(){
				header_list.style.display = "none";
			},100);
		};	
		//  进入内部
		header_list.onmouseenter = function(){
			for(var i = 0;i<header_con.length;i++){
				if(header_con[i].zzr == 1){
					$(header_con[i]).css({"background-color":"#fff"})
					$(header_con[i]).find("a").css({"color":"#333"});
				}
			}
			clearTimeout(aaTime);
			header_list.style.display = "block";
		};
		//  内部离开
		header_list.onmouseleave = function(){
			
			bbTime = setTimeout(function(){
				header_list.style.display = "none";
			},100);
		}
	}
}
	//  列表3 内部的颜色效果
	$(".header_list_con_shoppshort_list_con_right_popluar_con").children("ul").children("li").children("a").each(function(index,value){
		if($(this).css("color") != "rgb(255, 0, 0)"){
			$(this).mouseover(function(){
				$(this).css("color","#ED8300");
			});

			$(this).mouseout(function(){
				$(this).css("color","rgb(101, 102, 101)");
			});
		};
	});
	// 头部的滚动条随着屏幕运动的
	$(window).scroll(function(){
		if($(window).scrollTop()>340){
			$(".scroll").css({"position":"fixed","left":"0","top":"0","borderBottom":"2px solid #3DC9AE","z-index":"99999999"});
		}else{
			$(".scroll").css({"position":"","borderBottom":"0","z-index":"1"});
		}
	});
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
})
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

