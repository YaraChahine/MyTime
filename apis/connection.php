<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "mytimedb";

$connection = new mysqli($server, $username, $password, $dbname);


//this php hile is responsible of establishing the connection with our database
if($connection->connect_error){
	die("failed");
}
?>