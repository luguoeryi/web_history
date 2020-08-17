
define(function(require, exports, module){

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