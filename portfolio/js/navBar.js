const navBar = document.getElementById("navBar")
const navBarIcon = document.getElementById("navIcon")
const navCont = document.getElementById("navCont")

let navOpen = false


navBar.addEventListener('click', function(){
    if(navOpen == false){
        navOpen = true
        console.log("MOUSe")
        navBar.style.width = '70%';
        navBarIcon.style.color = '#ffffff00';
        navCont.style.display = "block";
    } else {
        navOpen = false
        console.log("MOUSe")
        navBar.style.width = '5%';
        navBarIcon.style.color = '#fff';
        navCont.style.display = "none";

    }
    

}) 
