define(function(require, exports, module){
	function hide(oA, oDiv){
		for(var i=0;i<oA.length;i++){
			oA[i].onclick = function(){
				window.aBth = false;
				var hash = this.dataset.hash ;
				var winhash = window.location.hash.substring(1) || 'home';
				if(hash == winhash) return ;
				for(var i=0;i<oA.length;i++){
					if( oDiv[i].dataset.hash == winhash ){
						switch( winhash ){
							case 'home':
								require('homeOut').init( oDiv[i], hash, oA, oDiv );
							break;
							
							case 'student':
								require('studentOut').init( oDiv[i], hash, oA, oDiv );
							break;
							
							case 'message':
								require('messageOut').init( oDiv[i], hash, oA, oDiv );
							break;
						}
					}
				}
			};
		}
	}
	exports.hide = hide;
});
