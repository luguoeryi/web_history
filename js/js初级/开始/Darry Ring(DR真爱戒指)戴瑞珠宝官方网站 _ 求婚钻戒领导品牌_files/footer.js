/*
 * 底部入口模块
 * 2015-06-27 14:00
 * */
define(function(require,exports,module){
	/*通过 require 引入依赖*/
	require('jquery');
	var drToggle = require('/drjs/modules/drtoggle.js');
	$(function(){
		
		/*回到顶部*/
		$('.dr_totop').off('click').on('click',function(){
			$("html,body").stop(true, false).animate({ "scrollTop": 0 + 'px' }, 300)
		});
		
		/*显示隐藏侧边栏工具*/
		var scrollTop = '';
		var offon = true;
		checkScroll();
		$(window).scroll(function(){			
		    checkScroll();
		});		
		function checkScroll() {
		    scrollTop = $(document).scrollTop();
		    if (scrollTop >= 200 & offon) {
		        offon = false;
		        $('#dr-quickservice').show();
		        $('.droline_kfword').animate({ left: '-230px', opacity: 1 }, 500).show();
		        $('.droline_kfword p').animate({ width: '220px', height: '48px' }, 1000);
		        setTimeout(hidetcword,6000);
		    } else if (scrollTop <= 200) {
		        $('#dr-quickservice').hide();
		    } else {
		        $('#dr-quickservice').show();
		    }
		};
		//侧边工具栏提示效果
		$('.dr_quick-cort').off('mouseenter').on('mouseenter',function(){
		    $(this).addClass('dr_quickcort-hover').find('.dr_quick-word').stop(false, false).animate({ right: '50px', opacity: 1 }, 500).show();
		}).off('mouseleave').on('mouseleave',function(){			
		    $(this).removeClass('dr_quickcort-hover').find('.dr_quick-word').stop(false, false).animate({ right: '0', opacity: 0 }, 500).hide();
		});
	    //底部帮助中心分享
		var draboutUs = new drToggle().init({
		    id: '#dr_help-gz',
		    action: '.dr_help-all .comShare'
		});
	    //点击关闭客服文字
		$('.droline_kfword span').click(function () {
		    hidetcword();
		    offon = false;
		    return false;
		});
		showtcword();

	    //底部后台程序js代码处

		

	});
});

//定义加入收藏夹函数
function join_favorite() {
    var siteUrl = window.location.href;
    var siteName = "Darry Ring"

    //捕获加入收藏过程中的异常       
    try {
        //判断浏览器是否支持document.all        
        if (document.all) {
            //如果支持则用external方式加入收藏夹              
            window.external.addFavorite(siteUrl, siteName);
        } else if (window.sidebar) {
            //如果支持window.sidebar，则用下列方式加入收藏夹  
            window.sidebar.addPanel(siteName, siteUrl, '');
        }
        else {
            alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
        }
    }
    //处理异常       
    catch (e) {
        alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
    }
}

function showxiaon() {
    NTKF.im_openInPageChat();
}

//客服弹窗-关闭弹窗
function ag_tocclose_click() {
    ga('send', 'event', 'tocclose', 'click', 'talk', 0);
};


//客服弹窗-稍后再说
function ag_sszs_click() {
    ga('send', 'event', 'sszs', 'click', 'talk', 0);
};

//客服弹窗-现在咨询
function ag_chatnow_click() {
    ga('send', 'event', 'chatnow', 'click', 'talk', 0);
};

/*随机显示文字*/
function showtcword() {
    var wordlen = 6;
    var wordNum = Math.floor(Math.random() * wordlen);
    var wordshow = new Array(wordlen);
    wordshow[0] = "想了解更多钻石知识<br/>我们有专业在线客服给您解答";
    wordshow[1] = "定制合适的戒指手寸<br/>可以联系客服协助您进行估算";
    wordshow[2] = "挑选满意的戒指款式<br/>在线客服可以给您提供建议";
    wordshow[3] = "购买过程遇到问题<br/>直接联系在线客服解决";
    wordshow[4] = "想了解钻戒定制流程<br/>在线客服可以给您介绍说明";
    wordshow[5] = "欢迎光临Darry Ring<br/>有问题客服都可以帮您解答";
    $('.droline_kfword p').html(wordshow[wordNum]);
}
/*关闭客服文字弹窗*/
function hidetcword() {
    $('.droline_kfword').animate({ left: '0', opacity: 0 }, 500);
}
