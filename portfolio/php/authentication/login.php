<?php
// Test auth data
if (session_status() == PHP_SESSION_NONE) {
    error_log("SESSION START!!");
    session_start();
    $_SESSION['TokenList'] = array();
}

$prime_auth = array(
    "name" => 'admin',
    "password" => 'adminpsw',
); 

$UserTokens =  $_SESSION['TokenList'];

// User server side authetication 
class user {
    // Public user data
    public $username;
    public string $token;
    public $time;
    public $endTime;
    
   public function genToken(){
        $this->token = base64_encode(random_bytes(55)) ;
        
        $_SESSION['TokenList'][] = $this->token;
        error_log($this->token);
        error_log($UserTokens);
    }
    public function set_name($name) {
        $this->username = $name;
        error_log("Server server create new user name: " .  $this->username);
    }

    public function get_token(){
        error_log("Žádost o token: ");
        $postDataString = print_r($_POST, true);
        error_log("POST data: " . $postDataString);
        return $this->token;
    }
   
};

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Získání User-Agent (informace o prohlížeči)
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    error_log("Prohlížeč: " . $userAgent);

    // Získání IP adresy klienta
    $clientIP = $_SERVER['REMOTE_ADDR'];
    error_log("IP adresa klienta: " . $clientIP);
} else {
    error_log("Tento skript očekává POST požadavek.");
}

$user = new user();
$user->set_name($_POST['name']);
$user->genToken();


$response = $user->get_token();

// Response to server
header('Content-Type: application/json');
echo json_encode($response);


?>
