<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include("connection.php");


$data = json_decode(file_get_contents("php://input"));


$tasks = $data->tasks;
$user_id = $data->user_id; 

$response = [];
$response["tasks"] =$tasks;
$response["user_id"] = $user_id;

$mysql = "INSERT INTO list (tasks,user_id) VALUES (?,?)";
$query = $connection->prepare($mysql);
$query->bind_param("si", $tasks, $user_id );
$query->execute();

$json_response = json_encode($response);
echo $json_response;

$query->close();
$connection->close();

?>
