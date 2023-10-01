<?php 

include 'sql.php';
$id = $_GET['id'];
$sql = "SELECT * FROM workticket WHERE id = $id";
$result = $conn->query($sql);

$response = array(); // Inicializujeme pole pro odpověď

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
    $json_days = json_decode($data['day_data'], true);
    $response['success'] = true;
    $response['data'] = $json_days;
} else {
    $response['success'] = false;
    $response['message'] = "Záznam $id nebyl nalezen.";
}

$conn->close();

// Vrátíme výsledek jako JSON
echo json_encode($response);











?>