<?php

$sname= "localhost";
$uname= "root";
$password = "";

$db_name = "tdent";

$conn = mysqli_connect($sname, $uname, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}
else{
	echo "Connection successful!";	
}