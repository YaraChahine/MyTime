<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));




//this api simply returns the number of song entries in the songs table and returns it
//to the front end
$query = "SELECT count(*) FROM songs;";
$stmt = $connection->prepare($query);
$stmt->execute();
$results = $stmt->get_result();
$count = $results->fetch_assoc();
$stmt->close();
$connection->close();
    

    $json = json_encode($count);
    echo $json;


?>