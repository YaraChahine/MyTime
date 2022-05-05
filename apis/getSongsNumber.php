<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));




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