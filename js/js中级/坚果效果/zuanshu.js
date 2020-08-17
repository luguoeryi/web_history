function $(v){
	if(typeof v=='function'){
		window.onload = v;
	} else if(typeof v=='string'){
		return document.getElementById(v);
	} else if(typeof v=='object'){
		return v;
	}
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	} else{
		return getComputedStyle(obj)[attr]
	}
}
function doMove(obj,attr,dir,target,Times,endFn){  //对象 方向 移动距离 目的 时间 回调函数
	dir = parseInt(getStyle(obj,attr))<target ? dir : -dir;
	clearInterval(obj.timet);
		obj.timet = setInterval(function(){
		var speed = parseInt(getStyle(obj,attr)) + dir;
		if(speed>target && dir>0 || speed<target && dir<0){//往前跑 往后跑
			speed=target;
		}
		obj.style[attr] = speed+'px';
		if(speed==target){
		clearInterval(obj.timet)
			endFn && endFn();}
	},Times)
}
function straMove(obj,attr,target,num){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = (target - obj['offset'+attr])/num ;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) ;
		obj.style[attr.toLowerCase()] = obj['offset'+attr] + speed + 'px';
		if(obj['offset'+attr==target]){
			clearInterval(obj.timer);
		}
	},30)
}
function shake(obj,attr,dir,Time,endFn){   //抖动函数    对象 方向 幅度 时间 
     if(obj.onOff) return;
	 obj.onOff=true;
	clearInterval(obj.times)
	var arr = [];
	for(var i=dir;i>0;i-=2){
		arr.push(i,-i);
	}
	arr.push(0);
	var num = 0;
	var lis = parseInt(getStyle(obj,attr));
	obj.times = setInterval(function(){
		obj.style[attr] = lis+arr[num]+'px';
		num++;
		if(num===arr.length){
		    clearInterval(obj.times);
			endFn && endFn();
			obj.onOff=false;};
	},Time);
}
function opacity(obj,go,dir,times,endFn){     //透明度封装    //对象  初始0/100 幅度 时间 回调函数
	clearInterval(obj.times);
		var num=go; 
		obj.times = setInterval(function(){
		if(go>50){
			num=num-dir;
			document.all ? obj.style.filter = 'alpha(opacity='+num+')' : obj.style.opacity = num/100; //document.all 是IE支持属性 firefox 不支持
			if(num<=49){clearInterval(obj.times);endFn && endFn();}
		} else{
			num=num+dir;
			document.all ? obj.style.filter = 'alpha(opacity='+num+')' : obj.style.opacity = num/100;
			if(num>=100){clearInterval(obj.times);endFn && endFn();}
		}
		
	},times);
}
function opacitys(obj,go,dir,times,endFn){     //透明度封装    //对象  初始0/100 幅度 时间 回调函数
	clearInterval(obj.times);
		var num=go; 
		obj.times = setInterval(function(){
		if(go>0){
			num=num-dir;
			document.all ? obj.style.filter = 'alpha(opacity='+num+')' : obj.style.opacity = num/100; //document.all 是IE支持属性 firefox 不支持
			if(num<=0){clearInterval(obj.times);endFn && endFn();}
		} else{
			num=num+dir;
			document.all ? obj.style.filter = 'alpha(opacity='+num+')' : obj.style.opacity = num/100;
			if(num>=100){clearInterval(obj.times);endFn && endFn();}
		}
		
	},times);
}
function opac(obj,target){
	document.all ? obj.style.filter = 'alpha(opacity='+target+')' : obj.style.opacity = target/100; 
}
function detnum(obj){         //判断是不是数字
	for(var i=0;i<obj.length;i++){
		if(obj.charCodeAt(i)<48 || obj.charCodeAt(i)>57) return false;
	}
	return true;
}
function getPos(obj){            //获取当前位置
	var Pos = {left:0,top:0};
	while(obj){
		Pos.left += obj.offsetLeft;
		Pos.top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return Pos;
}
function getByClassName(parent,tagName,className){      //范围 标签名  类名
	var aEls = parent.getElementsByTagName(tagName);
	var arr = [];
	for(var i=0;i<aEls.length;i++){
		var aClassName = aEls[i].className.split(' ');
		for(var j=0;j<aClassName.length;j++){
			if(aClassName[j]==className){
				arr.push(aEls[i]);
				break;
			}
			
		}
	}
	return arr;
}
function addClassName(obj,className){        //添加class
		if(obj.className==''){
			obj.className = className;
		} else{
			var arrClassName = obj.className.split(' ');
			var _indexOf = arrIndexof(arrClassName,className);
			if(_indexOf==-1){                                 //说明没有找到重复的
				obj.className += ' '+className;
			}
		}
	}
function removeClassName(obj,className){        //删除class
		if(obj.className !=''){
			var arrClassName = obj.className.split(' ');
			var _indexof = arrIndexof(arrClassName,className);
			if(_indexof!=-1){								//说明找到重复的
				arrClassName.splice(_indexof,1)
				obj.className = arrClassName.join(' ');
			}
		}
}
function arrIndexof(arr,v){          //判断有无重复
	for(var i=0;i<arr.length;i++){
		if(arr[i]==v){
			return i;
		}
	}
	return -1;
}
function getXy(Event){     //onmousemove ev下鼠标坐标+滚动条距离
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return{x:scrollLeft+Event.clientX,y:scrollTop+Event.clientY}
	
}
function bind(obj,evname,fn){        //第二种调用时间函数  绑定事件 解决ie兼容 及this指向
	if(obj.addEventListener){
		obj.addEventListener(evname,fn,false);
	} else{
		obj.attachEvent('on'+evname,function(){
			fn.call(obj);
		});
	}
}
function drag(obj){                                 //拖拽封装
	obj.onmousedown = function(ev){
		var ev = ev || event;
		var disX = ev.clientX - this.offsetLeft;
		var disY = ev.clientY - this.offsetTop;
		if(obj.setCapture){       //阻止选择的文字，给当前添加全局捕获   
			obj.setCapture();
		}
		document.onmousemove = function(ev){
			var ev = ev || event;
				var L = ev.clientX - disX ;
				var T = ev.clientY - disY ;
				if(L<100){         //磁性吸附
					L = 0;
				} else if(L > document.documentElement.clientWidth - obj.offsetWidth-100){
					L = document.documentElement.clientWidth - obj.offsetWidth;
				}
				if(T<0){
					T = 0;
				} else if(T > document.documentElement.clientHeight - obj.offsetHeight){
					T = document.documentElement.clientHeight - obj.offsetHeight;
				}
				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			if(obj.releaseCapture){
				obj.releaseCapture();      //释放全局捕获
			}
		};
		return false;          //标准兼容
	};
}
function getCookie(key){                        //需找 cookie
	var arr1 = document.cookie.split('; ');
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');
		if(arr2[0]==key){
			return decodeURI(arr2[1]);
		}
	}
}
function setCookie(key,value,t){           //设置cookie
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie = key+'='+encodeURI(value)+';expires=' +oDate.toGMTString();
}
function removeCookie(key){                 //删除cookie   将时间为-1
	setCookie(key,'',-1);
}
function deepcopy(obj){                     //深拷贝 利用递归的原理
	if(typeof obj != 'object'){
		return obj;
	}
	var newobj = {};
	for(var attr in obj){
		newobj[attr] = deepcopy(obj[attr]);
	}
	return newobj;
}