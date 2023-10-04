var DayBox = document.getElementsByClassName('day_box')
var navBar = document.getElementById('dfc')
let navOpen = false

function openInfo(id){ 
       const data =  id.getAttribute("data-info")
       console.log(data)
        navBar.style.width = '25%';
        navBar.style.display = "block";
        document.getElementById('infoId').innerText = data

}

function closeInfo(){

      
        navBar.style.width = '0%';

        navBar.style.display = "none";
    
}

