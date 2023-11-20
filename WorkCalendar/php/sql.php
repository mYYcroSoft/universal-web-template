<?php 

$servername = "162.19.139.137";
$username = "u23468_XIUQvUGkWa";
$password = "Dj3kpS0t5cGzoxpa8Y1vIiu1";
$dbname = "s23468_mysp-system";

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>