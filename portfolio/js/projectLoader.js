
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
projNav = document.getElementById('projectNav')

projNav.addEventListener('click', function(e){
    console.log("SD");
    projNav.style.bottom = "0%"
});