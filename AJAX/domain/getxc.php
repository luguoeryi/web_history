<?php
$t = isset($_GET['t']) ? $_GET['t'] : 'num';
$callback = isset($_GET['callback']) ? $_GET['callback'] : 'fn1';

$arr1 = array('1111','2222','3333','4444');

$arr2 = array('aaaaaaaaa','bbbbbbb','cccccccc','ddddddddd','eeeeeeeee');

if($t == 'num'){
	$data = json_encode($arr1) ;
}else{
	$data = json_encode($arr2) ;
}



echo $callback.'('.$data.')';