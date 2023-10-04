var DayBox = document.getElementsByClassName('day_box')
var navBar = document.getElementById('dfc')
let navOpen = false

function openInfo(id){ 
       const data =  id.parentNode.getAttribute("data-info")
       console.log(data)
        navBar.style.width = '25%';
        navBar.style.display = "block";


}

function closeInfo(){

      
        navBar.style.width = '0%';

        navBar.style.display = "none";
    
}

