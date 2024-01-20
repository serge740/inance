var slider=document.querySelector(".slider");


function slid(){
    slider.style.scrollBehavior="smooth"
    slider.scrollLeft+=800
   
}

function prev(){
    slider.style.scrollBehavior="smooth"
    slider.scrollLeft-=800
}

function nextslider(){
    slider.style.scrollBehavior="smooth"
    slider.scrollLeft+=800
}

setInterval(slid,3000)