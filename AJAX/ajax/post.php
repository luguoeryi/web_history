<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
 
$username = $_POST['username']; //$_REQUEST 
$age = $_POST['age'];

echo "你的名字:{$username},你的年龄:{$age}";