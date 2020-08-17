// 所有模块都通过 define 来定义

define(function(require, exports, module){
	require('../js/common3.js');
	function show(){
		alert(a);
	}
	//exports : 对外提供接口的对象；
	exports.show = show;
});


/*  // 通过 require 引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');

  // 通过 exports 对外提供接口
  exports.doSomething = ...

  // 或者通过 module.exports 提供整个接口
  module.exports = ...   */