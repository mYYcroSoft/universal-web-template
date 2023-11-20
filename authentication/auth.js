authenticate = document.getElementById('authenticate')
sessionRemove = document.getElementById('sessionRemove')



authenticate.addEventListener('click', function(){
    var code = document.getElementById('code').value
        
         
    $.ajax({
        url: 'php/login.php',  
        type: 'POST',              
        data: {action: 'login', code: code},  
        dataType: 'json',        
        success: function(response) {
                console.log(response)       
        }, 
        error: function(xhr, status, error) {
    
            console.error('Chyba při komunikaci se serverem:', error);
        }
    });
})

sessionRemove.addEventListener('click', function(){
 
    $.ajax({
        url: 'php/sessionDestroy.php',  
        type: 'POST',                
        dataType: 'json',        
        success: function(response) {
                console.log(response)       
        }, 
        error: function(xhr, status, error) {
           console.error('Chyba při komunikaci se serverem:');
        }
    });

})