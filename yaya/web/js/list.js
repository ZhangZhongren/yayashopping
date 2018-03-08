	setTimeout(function(){
		sendRequest();
	},1000);
	/********************************/
	var nowPages = 1;		
	var arr = []; //用来保存被选中的属性的id;
	var gussData = true;
	/********************************/	
	// 拼接 参数	
	function sendRequest(){	
		// GetRequest()  public 中的公用函数
		// 搜索框得到的是goodsname 执行得到搜索框数据的函数
		if(GetRequest().goodsName){
			searchGoods();
		}
		// 首页商品的是id 发送达到商品的命令
		if(GetRequest().id){
			var Url = `http://10.80.13.214:8081/goods/goodsList?cId=${GetRequest().id}&page=${nowPages}`;
			var styleUrl = `http://10.80.13.214:8081/style/styleCategory?cId=${GetRequest().id}`;
			getGata(styleUrl,creatStyleData);// 发送请求获取数据
			setTimeout(function(){
				getGata(Url,creatListData);// public里面的公用函数
			},1000);
		}
	}
	function searchGoods(){
		var url = decodeURI(window.location.href);
		var Url = `http://10.80.13.214:8081/goods/search?goodsName=${GetRequestGoods(url)}&page=${nowPages}`;
		var link = `http://10.80.13.214:8081/goods/likePage?goodsName=${GetRequestGoods(url)}`;
		getGata(link,setPage);// public里面的公用函数
		getGata(Url,creatListData);// public里面的公用函数
	}
	function GetRequestGoods(url){ // 解析 url 中的参数  汉字编码转换
		var url = url.split("?")[1].split("=")[1];
		return url; 
	}
	$(".pirce_sort").click(function(){// 价格由高到低排序
		if(!this.zzr){
			this.zzr=true;
			var order = "ASC";
		}else{
			this.zzr = false;
			var order = "DESC";
		}
		var link = `http://10.80.13.214:8081/goods/goodsListOrderByPrice?cId=${GetRequest().id}&page=${nowPages}&orders=${order}`;
		getGata(link,creatListData);// public里面的公用函数
	});

	$(".synthesize").click(function(){// 综合
		var link = `http://10.80.13.214:8081/goods/goodsList?cId=${GetRequest().id}&page=1`;
		nowPages = 1;
		getGata(link,creatListData);// public里面的公用函数
	});
// 渲染数据的函数  
function creatListData(data,async){
		if(gussData){
			gussData = false;
			guess(data); // 渲染猜你喜欢的数据
		}
		setPage(data.allPage);//控制总页数
		if(data.goodsList){
			var data = data.goodsList; //渲染搜索框的数据
		}else{
			var data = data; //渲染商品的数据
		}
		var html =``;
		var len  = data.length>28 ? 28 : data.length = data.length;
		for(var i = 0;i<len;i++){
			html +=	`<li class="pro_pho fl" onmouseenter="showContrast(this)">
						<div class="pro_bg">
							<a href="product.html?id=${data[i].goodsId}" target="_blank">
								<img src="${data[i].imgList[0].imgUrl}" alt="">
							</a>
						</div>
						<ul class="small_bg clearfic">
							<li class="small_bg_pic ctrlBorder fl"><a href="###"><img src="${data[i].imgList[0].imgUrl}" alt=""></a></li>
						</ul>
						<h4 class="pro_name_info">
							<a href="###" data-id="${data[i].goodsId}" target="_blank">
								<span class="pro_name"><i class="pro_info">${data[i].goodsName}</span>
							</a>
						</h4>
						<p class="pir_tip clearfix">
							<span class="pro_price fl" onmouseover="showSimilar(this)">￥<i class="rmb">${data[i].goodsPrice}.00</i></span><span class="pro_say fr">已有<i class="who">0</i>人评价</span>
						</p>
						<ul class="similar">
							<li class="clearfix">
								<a href="">
									<span class="similar_name fl">苹果iPhone 8 Plus 全网通 64G 银色</span>
									<span class="similar_price fr">￥6130.00</span>
								</a>
							</li>
						</ul>
						<div class="func" >
							<p class="part_time">丫丫分期 : <i class="part_info">2+4ds65f1</i></p>
							<div class="contrast clearfix">
								<span class="pro_contrast fl"><i class="iconfont icon-duibi"></i>&nbsp;对比</span>
								<span class="pro_collection fr"><i class="iconfont icon-shoucang"></i>&nbsp;对比收藏</span>
							</div>
						</div>
					</li>`;
		}
		$(".product_content").html(html);// 将数据渲染到页面
		$(".small_bg_pic").mouseover(function(){// 图片变换的函数  鼠标放在小图片上 大图改变成当前的小图片
			$(this).parents(".small_bg").find(".small_bg_pic").css({"border":"1px solid white"});
			$(this).css({"border":"1px solid red"});
			$(this).parents(".pro_pho").find(".pro_bg").children("a").children("img")[0].src = $(this).find("img")[0].src;
		});
	}
	// 分页器
	function setPage(num){
		var setTotalCount = 301;
		if(num>0){
			 $('#box').paging({
	            initPageNo: nowPages, // 初始页码
	            totalPages: num, //总页数
	            totalCount: '合计' + setTotalCount + '条数据', // 条目总数
	            slideSpeed: 600, // 缓动速度。单位毫秒
	            jump: true, //是否支持跳转
	            callback: function(page){ // 回调函数
	            	$(".page_control").children("span").html("<i class=\"nowpage\">"+page+"</i>/"+num+""); //设置右上角的页数
	            	// 右上角的上一页下一页功能
					$(".tonext")[0].onclick=function(){//下一页
						if(0<nowPages && nowPages<num){
							nowPages++;
							sendRequest();
						}
					}
					$(".toprev")[0].onclick=function(){//上一页
						if(1<nowPages && nowPages<=num){
							nowPages --;
							sendRequest();
						}
					}
	                if(page>0&&page != nowPages){
	                	nowPages = page;
	                	sendRequest();
	                	$("html,body").animate({scrollTop:0},500);
	                }
	            }
	        });
		}
	}
	// 商品属性的list_tips的渲染
	function creatStyleData(data){
		var len = data.length;
			var html = `<ul>
							<li class="clearfix">
								<h3>搜索结果:</h3>
								<div class="list_tips_con clearfix">
									<span class="total_goods">共搜到219个商品</span>
									<div class="clearset">
										<i class="iconfont icon-icon"></i>
										<span>重置选择</span>
									</div>
								</div>
							</li>
						`;
			for(var i = 0 ; i<len; i ++){
				if(i<len-1){
					html += `<li class="clearfix">
								<h3>${data[i].styleName}:</h3>
								<div class="list_tips_con clearfix">
									${creatRsel(data[i].styleList)}
								</div>
							</li>`;
				}else{
					html += `<li class="clearfix">
						<h3>${data[i].styleName}</h3>
						<div class="list_tips_con clearfix " id="list_logo">
							<div class="anotherItem fl">
								${creatDown(data[i].styleList)}
							</div>
						</div>
						</li>
					</ul>`;
				}
			}
		function creatRsel(data){
			var lens = data.length;
			var inhtml = ``;
			for(var i= 0;i < lens; i++){
				inhtml += `<a href="javascript:void(0);" dat-parentId="${data[i].parent_id}" data-styleid="${data[i].styleId}" class="fl note" >
							<em class="ok fl"></em>
							<span class="fl">${data[i].styleName}</span>
						</a>`;
			}
			return inhtml;
		}
		function creatDown(data){
			var lens = data.length;
			var inhtml = ``;
			for(var i= 0;i < lens; i++){
				inhtml += `<strong class="fl">${data[i].styleName}<i class="upDown iconfont icon-down"></i>
							<ul class="selectDown clearfix">
								${downCreat(data[i].styleList)}
							</ul>
						</strong>
								`;
			}
			return inhtml;
		}
		function downCreat(data){
			var len = data.length;
			var downHtml = ``;
			for(var i=0;i<len;i++){
				downHtml+=`<li class="fl">
							<a href="javascript:void(0);" dat-parentId="${data[i].parent_id}" data-styleid="${data[i].styleId}" class="fl note" >
							<em class="ok fl"></em>
							<span class="fl">${data[i].styleName}</span>
							</a>
						</li>`;
			}
			return downHtml;
		}
		$(".list_tips").html(html);
		var timer = 0;
		// 控制list 最后的下拉选项
		$(".anotherItem").children("strong").mouseover(function(){
			clearTimeout(timer);
			$(".anotherItem").children("strong").children(".selectDown").css({"display":"none"});
			$(this).children("em").removeClass("icon-down");
			$(this).children("em").addClass("icon-totop");
			$(this).children(".selectDown").css({"display":"block"});
			$(this).css({"border-right":"1px solid #E7E7E7","border-bottom":"1px solid white","margin-bottom":"-1px"});
		});
		$(".anotherItem").children("strong").mouseleave(function(){
			$(".anotherItem").children("strong").css({"border-right":"1px solid white","border-bottom":"0","margin-bottom":"0"});
			timer = setTimeout(function(){
					$(".anotherItem").children("strong").children("em").removeClass("icon-totop");
					$(".anotherItem").children("strong").children("em").addClass("icon-down");
					$(".anotherItem").children("strong").children(".selectDown").css({"display":"none"});
			},100);
		});
		$(".selectDown").mouseenter(function(){
				$(this).css({"display":"block"});
				$(this).parents("strong").css({"border-right":"1px solid #E7E7E7","border-bottom":"1px solid white","margin-bottom":"-1px"});
				clearTimeout(timer);
			});
		$(".selectDown").mouseleave(function(){
				$(".anotherItem").children("strong").children("em").removeClass("icon-totop");
				$(".anotherItem").children("strong").children("em").addClass("icon-down");
				$(".anotherItem").children("strong").children(".selectDown").css({"display":"none"});
				$(".anotherItem").children("strong").css({"border-right":"1px solid white","border-bottom":"0","margin-bottom":"0"});
		});	
		$(".note").click(function(){
			if(this.zzr == 1){
			this.zzr = 0;
			$(this).children("em").css({"backgroundImage":"","border":"1px solid #DDDDDD"});
			$(this).css({"color":"#667297"});
			saveStyle(arr,$(this).attr("data-styleid"));
		}else{
			this.zzr = 1;
			$(this).children("em").css({"backgroundImage":"url(../image/list/duihao.jpg)","border":"1px solid #fff"});
			$(this).css({"color":"#FF7828"});
			saveStyle(arr,$(this).attr("data-styleid"));
		}
		});
		$(".clearset").click(function(){// 重置选择 
			for(var i = 0 ; i< $(".note").length;i++){
				$(".note")[i].zzr = 0;
			}
			$(".note").children("em").css({"backgroundImage":"","border":"1px solid #DDDDDD"});
			$(".note").css({"color":"#667297"});
			arr = [];
		});
	}
	function saveStyle(arr,styleId){ // 把选中的商品的属性保存到一个数组里面 冰并且向后台发送请求渲染数据
		var door = true;  // 定义一个开关判断属性是添加还是删除
		for(var i = 0 ; i < arr.length; i++){
			if(styleId===arr[i]){  // 如果属性的id存在了就将该属性去掉
				arr.splice(i,1);
				door = false;
			}
		}
		if(door){  //添加属性
			arr.push(styleId);
		}
		var str = arr.toString();
		console.log(str);
		// var link = `http://10.80.13.214:8081/style/styleCategory?cId=${GetRequest().id}`;
		// getGata(link,creatListData);// public里面的公用函数
	}
	// 猜你喜欢的数据渲染
function guess(data){
	console.log(data.goodsList);
	var guessHtml = ``;
	for(var i = 1 ;i<6;i++){
		guessHtml += `<li class="list_l_pro">
							<a href="product.html?id=${data.goodsList[i].goodsId}"><img src="${data.goodsList[i].imgList[0].imgUrl}" alt=""></a>
							<a href="">
								<h3 class="protitle">${data.goodsList[i].goodsName}</h3>
							</a>
							<p class="proInfo clearfix">
								<span class="fl prc"><i class="rmb">￥</i>${data.goodsList[i].goodsPrice}</span>
								<span class="evaluate fr">1人评价</span>
							</p>
						</li>`;
	}
	$(".list_l_ul").html(guessHtml);
}


										// list 页 list部分  还差一个用cooki保存被选中的部分
/*选中的复选框改变背景和字体的颜色*/
function changeColor(elm){
		$(elm).children("em").css({"backgroundImage":"url(../image/list/duihao.jpg)","border":0});
		$(elm).css({"color":"#FF7828"});
}
// list logo 部分的样式改变效果
function changeBorder(elm){
	$(elm).css({"border":"1px solid #FF7828","margin":"-1px 0 0 -1px"});
	$(elm).children("em").css({"display":"block","borderRight":"1px solid #FF892A","border-bottom":"1px solid #FF892A"});
	$(elm).children("img").css({"display":"none"});
	$(elm).children(".product").css({"display":"block"});
	$(elm).mouseout(function(){
		$(this).css({"border-right":"1px solid #E7E7E7","border-bottom":"1px solid #E7E7E7","border-left":"0","border-top":"0","margin":"0"});
		$(this).children("em").css({"borderRight":"1px solid #fff","border-bottom":"1px solid #fff"});

		$(this).children("img").css({"display":"block"});
		$(this).children(".product").css({"display":"none"});
	});
	$(elm).click(function(){
		if(this.zzr){
			$(this).children("em").css({"backgroundImage":"url(../image/list/duihao.jpg)","border":"1px solid #FF892A"});
			$(this).children("em").css({"display":"block"});
		}else{
			$(this).children("em").css({"backgroundImage":"","borderRight":"1px solid #fff","border-bottom":"1px solid #fff"});
			$(this).children("em").css({"display":"none"});
		}
		$(elm).mouseout(null);
	});
}
// // 点击显示全部品牌
// $(".down_all").click(function(){
// 	if($(this).html() ==  "更多<i class=\"iconfont icon-down\"></i>"){
// 		$(this).html("收起<i class=\"iconfont icon-totop\"></i>");
// 	}else{
// 		$(this).html("更多<i class=\"iconfont icon-down\"></i>");
// 	}
// 	$(this).parents(".list_tips_con").toggleClass("all");
// });



									
													/*商品展示模块*/
	var navs = $(".bav_navbar");
	$(navs[0]).css({"backgroundColor":"#FF7828"});
	$(navs[0]).children("a").css({"color":"#fff"});
	for(var i = 1 ; i< navs.length ; i++){
		navs[i].index = i;
		navs[i].onmouseover=function(){
			$(navs[this.index]).children("a").css({"color":"#FF7828"});
		}
		navs[i].onmouseout=function(){
			$(navs[this.index]).children("a").css({"color":"#333333"});
		}
	}											
	$(".bav_navbar").click(function(){
		var lis = $(".bav_navbar").length;
		if(this.index ===5 ){
			$(this).children("a").css({"color":"#FF7828"});
			this.onmouseout = null;
			return;
		}
		for(var i = 0 ; i<lis ; i ++){
			var _shi = i;
			$(".bav_navbar")[i].onmouseover=function(){
				$(this).children("a").css({"color":"#FF7828"});
			}
			$(".bav_navbar")[i].onmouseout=function(){
				$(this).children("a").css({"color":"#333333"});
			}
		}
		$(".bav_navbar").css({"backgroundColor":"#F7F7F7"});
		$(".bav_navbar").children("a").css({"color":"#333333"});
		$(this).css({"backgroundColor":"#FF7828"});
		$(this).children("a").css({"color":"#fff"});
		$(this).parents(".product_exhibition_menu").children(".bav_navbar").children("i").css({"backgroundImage":"url(../image/list/download-1.jpg)"});
		if(this.index === 3){
			$(this).children("i").css({"backgroundImage":"url(../image/list/download.jpg)"});
		}
		this.onmouseover = null;
		this.onmouseout = null;
	});		
	function showContrast(elm){
		$(elm).css({"boxShadow":" 0 0 5px 1.5px #DDDDDD"});
		$(elm).find(".part_time").css({"display":"none"});
		$(elm).find(".contrast").css({"display":"block"});
		$(elm).mouseleave(function(){
			$(this).find(".part_time").css({"display":"block"});
			$(this).find(".contrast").css({"display":"none"});
			$(this).css({"boxShadow":""});
		})
	}
	function showSimilar(elm){
		$(elm).parents(".pro_pho").find(".similar").css({"display":"block"});
		$(elm).mouseout(function(){
			$(this).parents(".pro_pho").find(".similar").css({"display":"none"});
		})
	}

	























	
	

















