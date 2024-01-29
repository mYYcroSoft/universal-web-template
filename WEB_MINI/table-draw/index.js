var drawed = false 
var mousedown = false
var remover = false
function drawTable(){
    var value = document.getElementById('number').value
    var table = document.getElementById('table')
    table.innerHTML = '';
    console.log(value)

    for (let i = 0; i < value; i++) {
        var tr = document.createElement('tr')
        for (let i = 0; i < value; i++) {
            var td = document.createElement('td')
            td.style.backgroundColor = '#fff'
            td.addEventListener('mouseover', (event) => {
         
                var target = event.target
                var color = document.getElementById('color')
                if(mousedown == true){
                    if (remover == false){
                        console.log(target.style.backgroundColor)
                        target.style.backgroundColor = color.value
                    } else {
                        console.log("NEG")
                        target.style.backgroundColor = '#fff';
                    }
                    
             
              
                }
            
                         
            })
            table.appendChild(td)
            
        }
        table.appendChild(tr)
      }
       
      drawed = true
}


function dataGet(){
    console.log(td)
}
var td = document.getElementsByTagName('td')



var range = document.getElementById('size');

range.addEventListener('input', (event) => {
    console.log("AHOJ");
    var size = event.target.value
    var tdElements = document.getElementsByTagName('td');
 for (var i = 0; i < tdElements.length; i++) {
        tdElements[i].style.width = size + 'px';
        tdElements[i].style.height = size + 'px';
    }
});


document.addEventListener('mousedown', function(){
    mousedown = true
})

document.addEventListener('mouseup', function(){
    mousedown = false
})

document.addEventListener('keydown', (event) =>{
    if (event.key = "r"){
        if (remover == false){
            remover = true
            console.log(remover)
        } else {
            remover = false
        }
        
    }
})