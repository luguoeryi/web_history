define(function(require, exports, module){
	function init(hideObj, hash, oA, oDiv){
		$(hideObj).animate({'width':0,'height':0},function(){
			hideObj.style.display = 'none';
			window.location.hash = hash;
			require('./show.js').show(oA, oDiv);
		});
	}
	exports.init = init ;
});
