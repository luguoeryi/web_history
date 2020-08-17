<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$arr1 = array(
	array('title'=>'你好你妈好你全家好','Date'=>'2015-1-5'),
	array('title'=>'我是一颗小小的石头','Date'=>'2015-1-6'),
	array('title'=>'好想好想好想好想。','Date'=>'2015-1-7'),
	array('title'=>'我踩着不变的步伐迎合你的到来','Date'=>'2015-1-8'),
	array('title'=>'在荒凉迟疑的时候看见你的到来','Date'=>'2015-1-9'),
	array('title'=>'如果有一天我不得不离去','Date'=>'2015-1-10'),
	array('title'=>'我希望人们把握埋在这里','Date'=>'2015-1-11'),
);

echo json_encode($arr1);