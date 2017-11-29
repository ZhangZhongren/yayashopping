

//绑定监听shijian addEvevt(element,fn,type) element 需要绑定事件的元素  type 绑定事件的名称（没有on）fn 要绑定的事件对应的函数
//解除绑定监听事件 removeEvent(element,type,fn)  element 需要绑定事件的元素   type 绑定事件的名称（没有on） fn 要绑定的事件对应的函数
// 取消冒泡 stopBubble(e) e 取消冒泡事件对象
// 获取css里面的样式 getStyle(element,key,fake)  element 获取样式的元素 key 获取的样式  fake 伪类
// 随机生成不重复的随机数  makeRandom(num,a,b) num 生成几个随机数 a 起始数字 b 终止数字
// 通过类名过去元素的兼容写法 兼容IE的不支持 用通过标签名获取  byClassName(clsName,ele)  clsName 元素类名   ele 在什么范围内查找元素
// 批量设置样式 cssText  el : 设置样式的元素 strCss : 由样式组成的字符串
// 设置cookie  setCookie(name,val,path,expires)   cookieName（名） cookieVal（值） path 作用域（/全局） expires(有效期天数)
// 获取cookie getCookie(name)  name  设置cookie时候的键值
// 获取当前的时间 currentTime() 以2017-11-20 20：14：14 的格式 


function addEvevt(element,fn,type){
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachEvent){
		element.attachEvent('on' + type,fn,);
	}else{
		element['on' + type]=fn;
	}
}
function removeEvent(element,type,fn){
	if(element.removeEventListener){
		element.removeEventListener(type,fn,false);
	}else if(element.detachEvent){
		element.detachEvent('on' + type,fn,);
	}else{
		element['on' + type]=null;
	}
}
function stopBubble(e){
	if(e && e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}
function getStyle(element,key,fake){
			if(fake===undefined){
				fake=null;
			}
			if(element.currentStyle){
				return element.currentStyle[key];
			}else{
				return getComputedStyle(element,fake)[key];
			}
	}
function makeRandom(num,a,b){
	var arr = [];
	for(var i=0;i<num;i++){
		arr[i]=parseInt(Math.random()*(b-a)+a);
		for(var j=0;j<i;j++){
			if(arr[i]==arr[j]){
				i--;
			}	
		}
	}
	return arr;
}
function byClassName(clsName,ele){  
	// 如果当前浏览器支持通过类名获取元素，直接返回  
	if(document.getElementsByClassName){  
	    return document.getElementsByClassName(clsName) || ele.getElementsByClassName(clsName);  
	}  
	else{
	    var nodes = ele.getElementsByTagName("*")||document.getElementsByTagName("*");
	    var eles=[],       
	    clsNames = [];  
	    for(var i = 0;i < nodes.length; i++){  
	        clsNames = nodes[i].className.split(' ');   
	        for(var j=0;j < clsNames.length;j++){  
	            if(clsNames[j]==clsName){  
	                eles.push(nodes[i]);  
	                break;  
	            }  
	        }  
	    }  
	    return eles;  
	}  	     
}
function setStyle(el, strCss){
	function   endsWith(str, suffix) { 
	    var l = str.length - suffix.length;
	    return l >= 0 && str.indexOf(suffix, l) == l;
	}
		var sty = el.style,
		    cssText = sty.cssText;
		if(!endsWith(cssText, ';')){
		    cssText += ';';
		}
		sty.cssText = cssText + strCss;
}
function setCookie(name,val,path,expires){
	var current_date = new Date();
	current_date.setDate(current_date.getDate()+expires);
	//将日期转换成字符串
	var expires_str = current_date.toGMTString();
	//设置cookie 的过期日期
	document.cookie = name +"="+ val +"; path ="+path+"; expires"+ expires_str ;
}
function getCookie(name){
				var str =document.cookie;
				var start = str.indexOf(name + "=") + name.length + 1;
				var end = str.indexOf(";",start);
				end = end == (-1) ? str.length : end;
				var tring = str.substring(start,end);
				return tring;
			}
function currentTime(){
	var time = new Date();
	var current_time = time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
	return current_time;
}


