<?php
session_start();

// Získání tokenu z URL
$tokenFromURL = $_GET['token'];

// Ověření, zda token existuje a je správný
if (isset($_SESSION['one_time_token_target_page.php']) && $_SESSION['one_time_token_target_page.php'] == $tokenFromURL) {
    // Token je platný, můžete provést požadované operace
    echo "Token je platný.";
    // ...
    
    // Odstranění tokenu, aby nemohl být použit znovu
    unset($_SESSION['one_time_token_target_page.php']);
} else {
    // Token není platný
    echo "Token není platný nebo byl již použit.";
    // ...
}
?>
