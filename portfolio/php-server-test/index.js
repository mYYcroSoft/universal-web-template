loginBtn = document.getElementById('loginBtn')


loginBtn.addEventListener('click', function(){
var username = document.getElementById('username').value
var password = document.getElementById('password').value

const php_login_dir = './php/login.php'
    
$.ajax({
    url:  './php/login.php',  
    type: 'POST',              
    data: {action: 'clientAuth',  username: username, password:password},  
    dataType: 'json',        
    success: function(response) {
            console.log(response)
            if (response['status'] == 'login'){
                addTokenToCookies(response['token'])
                console.log(document.cookie);
            }
            /*writeTokenToCookie(response)*/
    }, 
    error: function(xhr, status, error) {
        // Funkce vykonávaná při chybě při komunikaci s serverem
        console.error('Chyba při komunikaci se serverem:', error);
    }
});


})

removeSes = document.getElementById('removeSes')
removeSes.addEventListener('click', function(){

    $.ajax({
        url: './php/login.php',  
        type: 'POST',              
        data: {action: 'removeSes'},  
        dataType: 'json',        
        success: function($reponse) {
           console.log($reponse);
                
        }, 
        error: function(xhr, status, error) {
            console.error('Chyba při komunikaci se serverem:', error);
        }
    });
})


cookie.addEventListener('click', function(){
    console.log(getTokenFromCookies());
})

function addTokenToCookies(token) {
    document.cookie = "userToken=" + token + "; path=/";
}

function getTokenFromCookies() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'userToken') {
            return value;
        }
    }
    return null;
}