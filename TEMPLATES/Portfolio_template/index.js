//  VANTA BACKGROUND

const vantaEffect = VANTA.GLOBE({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,


  minWidth: 100.00,
  minHeight: 100.00,
  scale: 0.00,
  speed: 5.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  color2: 0xf2eaea,
  backgroundColor: 0x24153d,


});


// DISABLE SCROLL


// Navigation bar


/* 

  document.getElementById("home-sec").animate(
    [{ transform: "translateX(0px)" },{ transform: "translateX(-200%)" },],
    { duration: 500, }
  );
  
  setTimeout(() => {
  document.getElementById("home-sec").style.visibility = "hidden"; // nastavení skrytí
  }, 500); // prodleva pro dokončení animace
  document.getElementById("myBar").style.width = "80%";
*/ 

var time = 300
function open_sec(sec){

 if( close_every_sections() == true){
  setTimeout(() => { 

    document.getElementById(sec).style.display = "block";
    console.log("SDS")
    document.getElementById(sec).animate([{ transform: "translateX(-100%)" },{ transform: "translateX(auto)" },],{ duration: time, });
  }, time)

 }
  


}

function close_every_sections(){
  document.getElementById("home-sec").animate([{ transform: "translateX(0px)" },{ transform: "translateX(-200%)" },],{ duration: time, });
  document.getElementById("service-sec").animate([{ transform: "translateX(0px)" },{ transform: "translateX(-200%)" },],{ duration: time, });
  document.getElementById("project-sec").animate([{ transform: "translateX(0px)" },{ transform: "translateX(-200%)" },],{ duration: time, });
  setTimeout(() => {
  document.getElementById("home-sec").style.display = "none"; // nastavení skrytí
  document.getElementById("service-sec").style.display = "none"; // nastavení skrytí
  document.getElementById("project-sec").style.display = "none"; // nastavení skrytí
    console.log("DONE")
  }, time); // prodleva pro dokončení animace

  return true
}

