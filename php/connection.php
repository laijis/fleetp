<?php

$hostname='localhost';
$username="root";
$pass="";
$database="fleetp";
$conn=mysqli_connect($hostname,$username,$pass,$database);
if(!$conn){
die('mysqli-connect-error:' .mysqli_connect_error());
}else{
//return "success";
}
?>