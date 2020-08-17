window.onload = function(){
	var box = document.getElementById('cont');
	var imgs = box.getElementsByTagName('img');
	var imgwidth = imgs[0].offsetWidth;   //图片宽度
	var exporswidth = 160;          // 掩层宽度
	var boxwidth = imgwidth + (imgs.length - 1)*exporswidth;
	box.style.width = boxwidth + 'px';
	//设置每到们的初始值
	function setimg(){
		for(var i=1,len=imgs.length;i<len;i++){
			imgs[i].style.left = imgwidth + exporswidth * (i-1) +'px';
		}
	}
	setimg();
	var trans = imgwidth - exporswidth;
	for(var i=0,len=imgs.length;i<len;i++){
		//使用立即调用的函数表达式，为了获得不同的i值
		(function(i){
			imgs[i].onmouseover = function(){
				//复位
				setimg();
				for(var j=1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - trans +'px';
				}
			};
		})(i);
	
	}
};