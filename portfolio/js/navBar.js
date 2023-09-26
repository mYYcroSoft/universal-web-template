const navBar = document.getElementById("navBar")
const navBarIcon = document.getElementById("navIcon")
const navCont = document.getElementById("navCont")

let navOpen = false


navBar.addEventListener('click', function(){
    if(navOpen == false){
        navOpen = true
      
        navBar.style.width = '70%';
        navBarIcon.style.color = '#ffffff00';
        navCont.style.display = "block";
    } else {
        navOpen = false
    
        navBar.style.width = '5%';
        navBarIcon.style.color = '#fff';
        navCont.style.display = "none";

    }
    

}) 




function osExit(){
    console.log("AOJ")
    document.getElementById('os-window').style.display = "none"
}