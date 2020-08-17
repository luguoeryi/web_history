

define(function(require , exports, module){
	var a = require('./common2.js').a;  //require如果是模块则是exports


	function show(){
		alert( a );	
	}
	exports.show = show;
});