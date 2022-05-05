<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$id = $_GET["id"];



//we simply get all the milestones from the goals_milestones table

$query = "SELECT * FROM goals_milestones";
$stmt = $connection->prepare($query);
$stmt->execute();
$results = $stmt->get_result();
$rows=[];
while($row = $results->fetch_assoc()){
    $rows[]=$row;
};
$stmt->close();
$connection->close();
    

    $json = json_encode($rows);
    echo $json;


?>