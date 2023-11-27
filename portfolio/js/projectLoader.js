
function loadProjects() {
    var projectContainer = document.getElementById("projList");

    for (let proj in project_list) {
        var projectData = project_list[proj];
        console.log(projectData)
        $(projectContainer).append(
            `
        <div class="projectBox" data-id=${proj} id="proj" onclick="openProjectInfo(this)">
        <div class="projectImg">
        <div class="projctShadow">
            <h3 class="projecTitle">
                ${projectData.name}
            </h3>
            <span class="projectParalax" alt="${projectData.par}">
                 ${projectData.par}
            </span>
            <div class="projectTags" alt="Project">
                <span class="projectTag">    ${projectData.tags}</span>
            </div>
      
        </div>
            `
        )
    
        

    }
}






function openProject(obj){
    console.log(obj.dataset.id)
}

projContainerOpen = false 
projNav = document.getElementById('projectNav')
projContainer = document.getElementById('projContainer')
projList = document.getElementById('projList')
projNav.addEventListener('click', function(e){
    if(projContainerOpen == false){


        loadProjects();
        projContainer.style.bottom = '0%'
        projContainerOpen = true
    } else {
        projList.innerHTML = ''
        projContainer.style.bottom = '-100%'
        projContainerOpen = false
    }
});


var projectBoxStatus = false
var projBox = document.getElementById('projectInfoBox')
function openProjectInfo(id){
if(projectBoxStatus == false){
    projBox.style.right = '0%'
    projectBoxStatus = true
 } else {
    projBox.style.right = '-100%'
    projectBoxStatus = false
 }


    const projData = id.getAttribute("data-id")
    console.log(project_list[projData]);
}