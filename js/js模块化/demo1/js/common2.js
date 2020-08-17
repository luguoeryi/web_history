
define(function(require, exports, module){
	
	function show(){
		alert(2);
	}
	//exports : 对外提供接口的对象；
	exports.show = show;
});