let sessionKey = null
const login = document.getElementById("loginEvent")
function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }

function writeTokenToCookie(token){
   document.cookie = `token=${token}; path=/; secure`
   console.log( getCookie("token") )
}   


login.addEventListener('click', function(){
    const AUdata = {
        n: document.getElementById('uname').value,
        p: document.getElementById('psw').value,

    }
  
    
    $.ajax({
        url: './authentication/login.php',  
        type: 'POST',              
        data: {action: 'clientAuth',  name: AUdata.n, password: AUdata.p, sessionKey: sessionKey},  
        dataType: 'json',        
        success: function(response) {
                console.log(response)
                writeTokenToCookie(response)
        }, 
        error: function(xhr, status, error) {
            // Funkce vykonávaná při chybě při komunikaci s serverem
            console.error('Chyba při komunikaci se serverem:', error);
        }
    });
    
})