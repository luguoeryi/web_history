
define(function(require, exports, module){

	function scale(sBox,bBox){
		sBox.onmousedown = function(ev){
			var ev = ev || event ;
			var downX = ev.clientX ;
			var downY = ev.clientY ;
			var downH = bBox.offsetHeight ;
			var downW = bBox.offsetWidth ;

			document.onmousemove = function(ev){
				var ev = ev || event ;
				var W = ev.clientX - downX + downW ;
				var H = ev.clientY - downY + downH ;
				W = require('./range.js').range(W , 500, 200);
				H = require('./range.js').range(H , 500, 200);
				bBox.style.width = W + 'px' ;
				bBox.style.height = H + 'px' ;
			};
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null ;
			};
			return false ;
		};
	}

	exports.scale = scale ;
});