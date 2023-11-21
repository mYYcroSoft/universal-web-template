
function loadProjects() {
    var projectContainer = document.getElementById("projectContainer");

    for (let proj in project_list) {
        var projectData = project_list[proj];
        console.log(projectData)
        $(projectContainer).append(
            `
        <div class="projectBox" data-id=${projectData.id}>
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


boxs = document.getElementsByClassName('projectBox')

boxs.addEventListener('click', function() {
    console.log('click')
})

