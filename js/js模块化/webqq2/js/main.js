

define('./main.js', ['./drag.js', './scale.js'], function(require, exports, module){
	var aBtn = document.getElementById('btn') ;
	var bBox = document.getElementById('bBox') ;
	var sBox = document.getElementById('sBox') ;
	var dragBox = document.getElementById('dragBox') ;
	require('./drag.js').drag(dragBox);

	aBtn.onclick = function(){
		bBox.style.display = 'block' ;
		require('./scale.js').scale(sBox, bBox);
	};
});

define('./drag.js', ['./range.js'], function(require, exports, module){

	function drag(obj){
		obj.onmousedown = function(ev){
			var ev = ev || event ;
			var disX = ev.clientX - obj.offsetLeft ;
			var disY = ev.clientY - obj.offsetTop ;

			document.onmousemove = function(ev){
				var ev = ev || event ;
				var L = ev.clientX - disX ;
				var T = ev.clientY - disY ;

				L = require('./range.js').range(L, document.documentElement.clientWidth - obj.offsetWidth, 0);
				T = require('./range.js').range(T, document.documentElement.clientHeight - obj.offsetHeight, 0);

				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
			};
			document.onmouseup = function(ev){
				document.onmousemove = document.onmouseup = null ;
			};
			return false;
		} ;
	}
	exports.drag = drag ;
});

define('./range.js', [], function(require, exports, module){

	function range(val, max, min){
		if( val >= max ){
			return max ;
		}else if( val <= min ){
			return min ;
		}else{
			return val ;
		}
	}

	exports.range = range ;
});

define('./scale.js', ['./range.js'], function(require, exports, module){

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