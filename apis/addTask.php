<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$id = $_GET["id"];
$task= $_GET["task"];


//this is a simple get request that receives the user's id andthe task to be addded from the frontend
//and then adds the task to the tasks table
$query = "INSERT INTO  to_do_list_tasks(user_id,task_item) values(?,?)";
$stmt = $connection->prepare($query);
$stmt->bind_param("is", $id,$task);
$stmt->execute();
$json = json_encode($task);
    echo $json;

$stmt->close();
$connection->close();
    

    

?>