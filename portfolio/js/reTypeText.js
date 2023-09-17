const texts = ['myycro.', 'web developer.', 'student.']; // Seznam textů pro karusel
let textIndex = 0; // Index aktuálního textu
let charIndex = 0; // Index aktuálního znaku

const textElement = document.getElementById('feature-text');

function type() {
  if (charIndex < texts[textIndex].length) {
    // Získání znaku a přidání k aktuálnímu textu
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Čekání před dalším znakem
  } else {
    // Počkejte na chvíli, než přepíšete text
    setTimeout(erase, 1000);
  }
}

function erase() {
  // Spustíme mazání textu
  setTimeout(eraseText, 500);
}

function eraseText() {
  if (charIndex > 0) {
    // Mazání znaku
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Čekání před dalším mazáním
  } else {
    // Přepnutí na další text a resetování indexů
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    // Počkejte na chvíli, než začnete znovu psát
    setTimeout(type, 500);
  }
}

// Spuštění psaní textu
type();
