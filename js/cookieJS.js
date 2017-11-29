



	//设置cookie
//参数 cookieName  cookieCal path 作用域 expires(天数)
			function setCookie(name,val,path,expires){
				var current_date = new Date();
				current_date.setDate(current_date.getDate()+expires);
				//将日期转换成字符串
				var expires_str = current_date.toGMTString();
				//设置cookie 的过期日期
				document.cookie = name +"="+ val +"; path ="+path+"; expires"+ expires_str ;
			}
			
	//获取cookie
			
			function getCookie(name){
				var str =document.cookie;
				var start = str.indexOf(name + "=") + name.length + 1;
				var end = str.indexOf(";",start);
				end = end == (-1) ? str.length : end;
				var tring = str.substring(start,end);
				return tring;
			}

	//获取cookie
	function getCookie(name){
			   var arr = document.cookie.split('; ');
				var  val = "是不是键值错了啊";
			   for(var i = 0; i < arr.length; i++){
			       var tempArr = arr[i].split('=');
			       if (tempArr[0] == name){
			           val = decodeURIComponent(tempArr[1]);
			       }
				}
			return val;
	}

	//获取cookie
	function getCookie(cookieName){
			    //获取cookie字符串
			    var strCookie=document.cookie;
			    //将多cookie切割为多个名/值对
			    var arrCookie=strCookie.split("; ");
			    var cookieValue = null;
			    //遍历cookie数组,处理每个cookie对
			    for(var i=0;i<arrCookie.length;i++){
			        var arr=arrCookie[i].split("=");
			        //找到cookie,并返回它的值
			        if(cookieName==arr[0]){
			            cookieValue=(arr[1]);
			            break;
			        }
			    }
			    if(!cookieValue){
			        cookieValue = "";
			    }
			    cookieValue = decodeURIComponent(cookieValue);
			    return cookieValue;
			};


	