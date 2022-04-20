<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";


$data = json_decode(file_get_contents("php://input"));

$first_name = $data->FirstName;
$last_name = $data->LastName;
$email = $data->Email;
$password = hash("sha256", $data->Password);



$query = "SELECT * FROM users WHERE email = ?";
$stmt = $connection->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$results = $stmt->get_result();
$row = $results->fetch_assoc();
$stmt->close();
if(!empty($row)) {
    echo "";
} else {
    $query = "INSERT INTO users(first_name,last_name,email,password) VALUES (?,?,?,?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("ssss", $first_name,$last_name,$email,$password);
    $stmt->execute();
    $json = json_encode($email);
    echo $json;
    $stmt->close();
    $connection->close();

}