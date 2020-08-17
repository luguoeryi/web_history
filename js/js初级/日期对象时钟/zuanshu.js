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
			endFn && endFn();
		}
	},Times)
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
			obj.onOff=false;
			endFn && endFn();};
	},Time);
}
function opacity(obj,go,dir,times,endFn){     //透明度封装    //对象 幅度 初始0/100  时间 回调函数
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