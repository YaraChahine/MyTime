<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$id = $_GET["id"];


$query = "DELETE  FROM to_do_list_tasks WHERE task_id = ?";
$stmt = $connection->prepare($query);
$stmt->bind_param("i", $id);
$stmt->execute();

$stmt->close();
$connection->close();
    

    $json = json_encode($id);
    echo $json;


?>