/*
 * 首页入口模块
 * 2015-06-27 14:00
 * */
define(function (require, exports, module) {
    /*通过 require 引入依赖*/
    require('jquery');
    var Banner = require('/drjs/modules/banner.js');
    var twoTabs = require('/drjs/modules/twoTabs.js');

    window.onload = function () {
        //调用banner组件
        var indexBan = new Banner().init({
            id: '#drHomeBan',
            btnListId: '#drHomeBanxd',
            btnListClass: 'drbanner_click'
        });
        //店铺切换效果
        var shopTabs = new twoTabs().init({
            id: '.drstore-tab'
        });
        
        //关闭店铺地址
        $('.drshopMapInfo-close').off('click').on('click', function () {
            $('.dr_blackwall').hide();
            $('.drshopMap').stop(false, false).fadeOut();
        });
      
        //点击关闭时光胶囊弹窗
        $('.timejn span').off('click').on('click', function () {
            sgjnHide();
        });

        if (showsgjn == "0") {
            //默认出现时光胶囊弹窗
            $('.dr_blackwall').show();
            $('.timejn').show();
        }
        else {
            $('.dr_blackwall').hide();
            $('.timejn').hide();
        }

        //定时消失时光胶囊弹窗
        setTimeout(sgjnHide, 8000);

        //首页后台程序js代码处
        $('.drstore-shopname span').off('click').on('click', function (e) {
            $('.drstore-shopname span').removeClass('drstore-shopnamehover');
            $(this).addClass('drstore-shopnamehover');
            //showInfo.hide().eq(sindex).show();
            var shopid = $(this).attr("id");
            getInfo(shopid);
            e.stopPropagation();
        });
 
    }

   

}); 
//时光胶囊弹窗出现
function sgjnShow() {
    $('.dr_blackwall').show();
    $('.timejn').show();
}
//时光胶囊弹窗隐藏
function sgjnHide() {
    $('.dr_blackwall').hide();
    $('.timejn').hide();
}