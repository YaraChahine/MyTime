<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "connection.php";


$data = json_decode(file_get_contents("php://input"));

$user_id= $data->user_id;
$goal_title= $data->goal_title;
$goal_deadline = $data->goal_deadline;
$goal_milestones1 = $data->goal_milestones1;
$goal_milestones2 = $data->goal_milestones2;
$goal_milestones3 = $data->goal_milestones3;




    $query = "INSERT INTO goals(user_id,goal_title,goal_deadline) VALUES (?,?,?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("iss", $user_id,$goal_title,$goal_deadline);
    $stmt->execute();


    $query = "SELECT * FROM goals WHERE user_id = ?";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $results = $stmt->get_result();
    $goal_id= $results->fetch_assoc();
  

    $query = "INSERT INTO goals_milestones(goal_id,milestone) VALUES (?,?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("is", $goal_id,$goal_milestones1);
    $stmt->execute();

if ($goal_milestones2!=""){
    $query = "INSERT INTO goals_milestones(goal_id,milestone) VALUES (?,?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("is", $goal_id,$goal_milestones2);
    $stmt->execute();

}
if ($goal_milestones3!=""){
    $query = "INSERT INTO goals_milestones(goal_id,milestone) VALUES (?,?,?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("is", $goal_id,$goal_milestones3);
    $stmt->execute();

}
    $json = json_encode($goal_title);
    echo $json;
    $stmt->close();
    $connection->close();




?>