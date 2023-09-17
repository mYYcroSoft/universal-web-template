
  
  const skillsMap = {
    HTML: 100,
    CSS: 88,
    PHP: 80,
    JS: 45,
    PY: 35,
    C: 10,
    Node: 35,
    LUA: 100
  };

  const languageBoxes = document.querySelectorAll('.langugage_box');
  let langugageSelected = false
  languageBoxes.forEach((box) => {
    box.addEventListener('mouseover', (event) => {
        langugageSelected = true
      const languageName = event.target.innerText.trim();
      const skill = skillsMap[languageName];
        document.getElementById("skillsContainer").style.opacity = 0.7;
        document.getElementById("skill_name").innerText = languageName;
        document.getElementById("skillBar").style.width = `${skill}%`;
    });

    box.addEventListener('mouseout', () => {
        langugageSelected = false
        setTimeout(function () {
            if (langugageSelected == false) {

                document.getElementById("skillsContainer").style.opacity = 0;
            }
        }, 500); 
    });
  });

    languageBoxes.forEach((box) => {
    box.addEventListener('mouseover' && 'click', (event) => {
        langugageSelected = true
      const languageName = event.target.innerText.trim();
      const skill = skillsMap[languageName];
        document.getElementById("skillsContainer").style.opacity = 0.7;
        document.getElementById("skill_name").innerText = languageName;
        document.getElementById("skillBar").style.width = `${skill}%`;
    });

    box.addEventListener('mouseout', () => {
        langugageSelected = false
        setTimeout(function () {
            if (langugageSelected == false) {

                document.getElementById("skillsContainer").style.opacity = 0;
            }
        }, 500); 
    });
  });
