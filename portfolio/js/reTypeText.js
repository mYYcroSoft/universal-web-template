// TENTO KOD NENÍ MŮJ :()
const texts = ['myycro.', 'web developer.', 'student.']; 
let textIndex = 0; 
let charIndex = 0; 

const textElement = document.getElementById('feature-text');

function type() {
  if (charIndex < texts[textIndex].length) {
    
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); 
  } else {

    setTimeout(erase, 1000);
  }
}

function erase() {
 
  setTimeout(eraseText, 500);
}

function eraseText() {
  if (charIndex > 0) {
 
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); 
  } else {

    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
   
    setTimeout(type, 500);
  }
}


type();
