const elements = document.getElementsByClassName('blog-container');



const blogContainers = document.querySelectorAll('.blog-container');
    const blogCatalog = document.querySelector('.blog-catalog');

    blogContainers.forEach((container, index) => {
        container.style.opacity = 0;
       
    });
    let lastScrollY = window.scrollY;

    function handleScroll() {
        console.log('scrolling');
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

        blogContainers.forEach((container, index) => {
            console.log(index)
            lastIndex = index
            const containerRect = container.getBoundingClientRect();
            const isVisible = containerRect.top < window.innerHeight && containerRect.bottom >= 0;
            if (index == 1){
                container.style.opacity = 1;
            }
        
          
            if (isVisible) {
                const opacity = Math.min(1, Math.max(0, 1 - containerRect.top / containerRect.height));
                container.style.opacity = opacity;
                
               
            } else {
                container.style.opacity = 1;
             
            }
            if (index < 1){
                console.log('index 1')
                container.style.opacity = 1;
            }
        });

      
        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

   