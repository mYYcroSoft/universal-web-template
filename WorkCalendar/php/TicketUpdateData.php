<?php 

include 'sql.php';

$sql = "SELECT * FROM workticket WHERE id = 5";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();             
    $json_days = json_decode($data['day_data'], true);   
    print_r($json_days);
} else {
    echo "No records found.";
}

$conn->close();













?>