<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";

$data = json_decode(file_get_contents("php://input"));


$email = $data->Email;
$_SESSION["email"]=$email;

$password = hash("sha256", $data->Password);

$query = "SELECT * FROM users WHERE email = ? AND password=?";
$stmt = $connection->prepare($query);
$stmt->bind_param("ss", $email,$password);
$stmt->execute();
$results = $stmt->get_result();
$row = $results->fetch_assoc();
$stmt->close();
$connection->close();
    
if(empty($row)) {
    echo "";
} else {
    $json = json_encode($email);
    echo $json;
}


?>