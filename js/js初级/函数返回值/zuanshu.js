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
function doMove(obj,attr,dir,target,Times,endFn){
			dir = parseInt(getStyle(obj,attr))<target ? dir : -dir;
			clearInterval(obj.timer);
				obj.timer = setInterval(function(){
				var speed = parseInt(getStyle(obj,attr)) + dir;
				if(speed>target && dir>0 || speed<target && dir<0){//往前跑 往后跑
					speed=target;
				}
				obj.style[attr] = speed+'px';
				if(speed==target){
				clearInterval(obj.timer)
					endFn && endFn();
				}
			},Times)
		}