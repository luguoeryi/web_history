define(function(require, exports, module){
	function init(obj){
		$(obj).animate({'width':400,'height':400},function(){
			window.aBth = true;
		});
	}
	exports.init = init ;
});
