const blogContainers = document.querySelectorAll('.blog-container');
const catalog = document.getElementById('blogCatalog')

let BlogCount = 0
let BlogOpen = 0



blogContainers.forEach((cont, index) => {
           
    BlogCount += 1
   if(!(index === BlogCount)){
    cont.style.opacity = 0.1;
   } 
   if(index === 0){
    cont.style.opacity = 1;
   } 

 })

 console.log('Celkový počet blogů: ' + BlogCount)

let isScrolling = false;
function scrollCatalog() {
    if (!isScrolling) {
        isScrolling = true;
 
        console.log('Blog otevřen: ' + BlogOpen);
        blogContainers[BlogOpen].style.opacity = 1;
        
        if(BlogOpen === BlogCount - 1 ){
            BlogOpen = 0
        }
      
        if(!(BlogOpen === 2)){
           
            catalog.appendChild(blogContainers[BlogOpen]);
            blogContainers[BlogOpen].style.opacity = 0;
            blogContainers[BlogOpen + 1].style.opacity = 1;
        }
        if(BlogOpen > 0){
            blogContainers[BlogOpen - 1].style.opacity = 0.01;
        }

        BlogOpen += 1;
   


        setTimeout(function () {
            isScrolling = false;
        }, 0); 
    }
}


//catalog.addEventListener('scroll', scrollCatalog)

function next(){
    scrollCatalog()
}