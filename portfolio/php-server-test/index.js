loginBtn = document.getElementById('loginBtn')


loginBtn.addEventListener('click', function(){
var username = document.getElementById('username').value
var password = document.getElementById('password').value

  
    
$.ajax({
    url: './auth.php',  
    type: 'POST',              
    data: {action: 'clientAuth',  username: username, password:password},  
    dataType: 'json',        
    success: function(response) {
            console.log(response)
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
        url: './auth.php',  
        type: 'POST',              
        data: {action: 'removeSes'},  
        dataType: 'json',        
        success: function(response) {
                /*console.log(response)*/
                /*writeTokenToCookie(response)*/
        }, 
        error: function(xhr, status, error) {
            // Funkce vykonávaná při chybě při komunikaci s serverem
            console.error('Chyba při komunikaci se serverem:', error);
        }
    });
})