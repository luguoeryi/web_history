

define(function(require, exports, module){
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