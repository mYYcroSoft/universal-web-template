
function loadProjects() {
    var projectContainer = document.getElementById("projectContainer");

    for (let proj in project_list) {
        var projectData = project_list[proj];
        console.log(projectData)
        $(projectContainer).append(
            `
        <div class="projectBox" data-id=${projectData.id} id="proj" onclick="openProject(this)">
            <h3 class="projecTitle">
                ${projectData.name}
            </h3>
            <span class="projectParalax">
                 ${projectData.par}
            </span>
            <div class="projectTags">
                <span class="projectTag">    ${projectData.tags}</span>
            </div>
        </div>
            `
        )
    
        

    }
}





loadProjects();


function openProject(obj){
    console.log(obj.dataset.id)
}

var openContainer = false
projNav = document.getElementById('projectNav')
projectContainer = document.getElementById('projectContainer')
projNavIcon = document.getElementById('projNavIcon')
projNav.addEventListener('click', function(e){
    

    if (openContainer == false){

        projectContainer.style.bottom = "0%";
        openContainer = true 
        projNavIcon.style.transform = "rotate(180deg)"
  

    } else {
        console.log("SDS");
        projectContainer.style.bottom = "-100%";
        openContainer = false
        projNavIcon.style.transform = "rotate(0deg)"
    }
});