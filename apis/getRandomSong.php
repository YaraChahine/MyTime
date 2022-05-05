<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$id = $_GET["id"];


$query = "SELECT * FROM songs WHERE song_id = ?";
$stmt = $connection->prepare($query);
$stmt->bind_param("i", $id);
$stmt->execute();
$results = $stmt->get_result();
$row = $results->fetch_assoc();

$stmt->close();
$connection->close();
    

    $json = json_encode($row);
    echo $json;


?>