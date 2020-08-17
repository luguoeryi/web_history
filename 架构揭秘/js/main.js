define(function(require, exports, module){
	//公用: logo.js menu.js footer.js ....
	
	var oA = document.getElementsByTagName('a');
	var oDiv = document.getElementsByTagName('div');
	window.aBth = true; 
	window.onhashchange = function(){
		if( window.aBth ){
			window.location.reload();
		}
		
	};
	require('./show.js').show(oA, oDiv);
	require('./hide.js').hide(oA, oDiv);
	//require('./tpl.html');
	var compiled = require('handlebars');
	var html = compiled({foo: './tpl.html'});
	//console.log(tpl);
	//$(oDiv).eq(0).html(tpl);
});
