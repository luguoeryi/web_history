window.onload = function(){
	var box = document.getElementById('cont');
	var imgs = box.getElementsByTagName('img');
	var imgwidth = imgs[0].offsetWidth;   //ͼƬ���
	var exporswidth = 160;          // �ڲ���
	var boxwidth = imgwidth + (imgs.length - 1)*exporswidth;
	box.style.width = boxwidth + 'px';
	//����ÿ���ǵĳ�ʼֵ
	function setimg(){
		for(var i=1,len=imgs.length;i<len;i++){
			imgs[i].style.left = imgwidth + exporswidth * (i-1) +'px';
		}
	}
	setimg();
	var trans = imgwidth - exporswidth;
	for(var i=0,len=imgs.length;i<len;i++){
		//ʹ���������õĺ������ʽ��Ϊ�˻�ò�ͬ��iֵ
		(function(i){
			imgs[i].onmouseover = function(){
				//��λ
				setimg();
				for(var j=1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - trans +'px';
				}
			};
		})(i);
	
	}
};