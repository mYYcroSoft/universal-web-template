<?php 
session_start();
//$_SESSION['GlobalDayData'] = nil;

include 'sql.php';

function calculateDaysBetween($start_date, $end_date) {
    $start = new DateTime($start_date);
    $end = new DateTime($end_date);
    $interval = new DateInterval('P1D'); // 1 day interval
    $period = new DatePeriod($start, $interval, $end);

    $daysArray = array();
    foreach ($period as $date) {
        $daysArray[] = $date->format('Y-m-d');
    }

    // Přidání i posledního dne (end_date)
    $daysArray[] = $end->format('Y-m-d');

    return $daysArray;
}

function addDataToday($days_between){
    $days_data = array();
    foreach ($days_between as $index => $day){
        echo $index;
        $DayData = array(
            'index' => $index,
            'date' => $day,
            'text_data' => 'Žádné informace',
            'work' => true
        );
        $days_data[$index] = $DayData;
    }
    return $days_data;
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
$title = $_POST['title'];
$id = $_POST['id'];
$day_f = $_POST['date-from'];
$day_t = $_POST['date-to'];

echo $title . '<br>';
echo "Začíná od ${day_f} <br>";
echo "Končí ${day_t} <br>";
$days_between = calculateDaysBetween($day_f, $day_t);
$days_data = addDataToday($days_between) ;

foreach (addDataToday($days_between) as $index => $day){
}

$id = mysqli_real_escape_string($conn, $id);
$days_data_json = json_encode($days_data);


$sql = "INSERT INTO workticket (id, day_data) VALUES ('$id', '$days_data_json')";

if ($conn->query($sql) === TRUE) {
  echo "Record inserted successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

}




?>