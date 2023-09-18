const pageLoad = document.getElementById('pageLoad')

setTimeout(function () {
    pageLoad.style.opacity = 0;
    setTimeout(function () {
        pageLoad.style.display = 'none'
        pageLoad.style.zIndex = '0'
    }, 700);
}, 500); 
