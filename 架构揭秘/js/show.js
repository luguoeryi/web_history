define(function(require, exports, module){
	function show(oA, oDiv){
		var firstHash = window.location.hash.substring(1) || 'home';
			for(var i=0;i<oDiv.length;i++){
				if( oDiv[i].dataset.hash == firstHash ){
					oDiv[i].style.display = 'block';
					switch( firstHash ){
						case 'home':
							require('homeIn').init( oDiv[i] );
						break;
						
						case 'student':
							require('studentIn').init( oDiv[i] );
						break;
						
						case 'message':
							require('messageIn').init( oDiv[i] );
						break;
					}
				}
			}
	}
	
	exports.show = show ;
});
