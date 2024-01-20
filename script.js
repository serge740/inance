const header=document.querySelector("header")
const nigga=document.querySelector("header h1")

var slides=document.querySelector(".slider");
var reveal=document.querySelectorAll(".reveal")

var sca=document.querySelectorAll(".sca")
var removeMore=document.querySelectorAll(".remove-more")
var shinks=document.querySelectorAll(".shinks")
var learn=document.querySelector(".learn-more")
var menu=document.querySelector(".menu")

var niggas=document.querySelectorAll(".links a")

var serviceTitle=document.querySelectorAll(".h")
var servicesWords=document.querySelectorAll(".p")
var services=document.querySelectorAll(".img-container .img")
var active=0;








window.addEventListener("scroll",function(){
    if(this.window.scrollY>=49){
        header.classList.add("scrolled")
        shinks.forEach(shink=>{
            shink.style.color="white"
        })
       
    } 
    else{
        header.classList.remove("scrolled")
        shinks.forEach(shink=>{
            shink.style.color="black"
        })
    }

  
})



const loader=document.querySelector(".loader")


window.addEventListener("load",function(){
    loader.classList.add("rem")

    this.document.body.addEventListener("transitionend",function(){
        loader.remove()
    })
})


window.addEventListener("scroll",function(){
    reveal.forEach(reval=>{
        var windowheight=window.innerHeight;
        var revealTop=reval.getBoundingClientRect().top;
        var revealPoint=0;
    
        if(revealPoint<windowheight-revealTop){
            reval.classList.add("active")
        }
        else{
            reval.classList.remove("active")
        }
    })  

    sca.forEach(reval=>{
        var windowheight=window.innerHeight;
        var revealTop=reval.getBoundingClientRect().top;
        var revealPoint=0;
    
        if(revealPoint<windowheight-revealTop){
            reval.classList.add("active")
        }
        else{
            reval.classList.remove("active")
        }
    })  
})

reveal.forEach(reval=>{
    var windowheight=window.innerHeight;
    var revealTop=reval.getBoundingClientRect().top;
    var revealPoint=0;

    if(revealPoint<windowheight-revealTop){
        reval.classList.add("active")
    }
    else{
        reval.classList.remove("active")
    }
})  



function showa(){
    learn.classList.add("show-more")
    document.body.style.height="10%";
    document.body.style.overflow="hidden"
}

removeMore.forEach(more=>{
    more.addEventListener("click",function(){
        learn.classList.remove("show-more")
        document.body.style.height="100%";
        document.body.style.overflow="auto"
    })
    
    // before
    
})

menu.addEventListener("click",function(){
    links.classList.toggle("sma")

})

niggas.forEach(negro=>{
    negro.addEventListener("click",function(){
        links.classList.remove("sma")
    })
})


var links=document.querySelector(".links")

// image loader on about us

var lopp=document.querySelector(".lopp")
var image=["./about.jpg","./img/a (2).png","./img/a (3).png","./img/a (4).png"]
var imageIndex=0;

loadImageShits(image[imageIndex])

function loadImageShits(img){
    lopp.src=img
}

function nextImage(){
    imageIndex++  
    if(imageIndex>image.length -1){
        imageIndex=0
    }
    loadImageShits(image[imageIndex])
}

setInterval(nextImage,4000)


function nextSlide(){
    slides.style.scrollBehavior="smooth";
    slides.scrollLeft+=950
    
}

function prev(){
  
    slides.style.scrollBehavior="smooth";
    slides.scrollLeft-=950
}

setInterval(nextSlide,5000)
setInterval(prev,10000)


function loadServices(){

    let lastService=document.querySelector(".img-container .img.expand");
    lastService.classList.remove("expand");
    services[active].classList.add("expand");
    
    let firstTitle=document.querySelector(".h.rota");
    firstTitle.classList.remove("rota");
    serviceTitle[active].classList.add("rota")


    let firstServiceWord=document.querySelector(".p.show-p")
    firstServiceWord.classList.remove("show-p")
   services[active].addEventListener("transitionend",function(){
    servicesWords[active].classList.add("show-p")
   })
}

function nextService(){
    active++;
    if(active>services.length - 1){
        active=0
    }
    loadServices()
}


setInterval(nextService,5000)