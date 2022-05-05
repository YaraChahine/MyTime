<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$id = $_GET["id"];

//we get the logged in user's id from the front end
//then we retrieve all the goals entered by that user
//and return them to the front end
$query = "SELECT * FROM goals WHERE user_id = ?";
$stmt = $connection->prepare($query);
$stmt->bind_param("i", $id);
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