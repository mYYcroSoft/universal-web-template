<?php
// Test auth data
if (session_status() == PHP_SESSION_NONE) {
    session_start();
    if (!isset($_SESSION['TokenList'])) {
        $_SESSION['TokenList'] = array();
    }
}




// User server side authetication 
class user {
    // Public user data
    public $username;
    public string $token;
    public $time;
    public $endTime;
    
   public function genToken(){
        $this->token = base64_encode(random_bytes(55)) ;
        $_SESSION['TokenList'] = ["TEST"];
       # error_log( $_SESSION['TokenList']);
      #  error_log($this->token);
      #  error_log($UserTokens);
    }
    public function set_name($name) {
        $this->username = $name;
        error_log("Server server create new user name: " .  $this->username);
    }

    public function get_token(){
        error_log("Žádost o token: ");
        $postDataString = print_r($_POST, true);
        #error_log("POST data: " . $postDataString);
        error_log("Token list: " . $_SESSION['TokenList']);
        return $this->token;
    }
   
};



$user = new user();
$user->set_name($_POST['name']);
$user->genToken();


$response = $user->get_token();

// Response to server
header('Content-Type: application/json');
echo json_encode($response);


?>
