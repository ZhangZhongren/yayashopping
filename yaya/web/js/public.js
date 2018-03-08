// 获取cookie getCookie(name)  name  设置cookie时候的键值
// 解析url中的参数的函数  不需要参数 返回值是一个对象 就是url中参数键值对的形式
//  jqGET方式发送请求 参数 第一个是拼接好的路径加上命令 第二个是得到数据之后执行的回调函数	



// get 方式获取数据的函数
	function getGata(url,callback){
		$.ajax({
			url:url,
			type:"GET",
			async:true,
			dataType:"json",
			success:function(data){
				callback && callback(data);
			}
		});
	}
// 解析 url 中的参数
function GetRequest(){ 
		var url = location.search; //获取url中"?"符后的字串 
		var theRequest = new Object(); 
		if (url.indexOf("?") != -1) { 
			var str = url.substr(1); 
			strs = str.split("&"); 
			for(var i = 0; i < strs.length; i ++) { 
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			} 
	}
		return theRequest; 
	}
function getCookie(name){
				var str =document.cookie;
				var start = str.indexOf(name + "=") + name.length + 1;
				var end = str.indexOf(";",start);
				end = end == (-1) ? str.length : end;
				var tring = str.substring(start,end);
				return tring;
			}



