function big(e){
    console.log("Over",e);
    if(e.firstElementChild.style.width == '150'){
        e.firstElementChild.style.width = "153";
        e.firstElementChild.style.height = "145"; 
   }
    else{
        e.firstElementChild.style.width = "127";
        e.firstElementChild.style.height = "155";
    }
    // e.style["background-color"] = "red";
}

function small(e){
    console.log("Out");
    if(e.firstElementChild.style.width == '153'){
        e.firstElementChild.style.width = "150";
        e.firstElementChild.style.height = "142"; 
   }
    else{
        e.firstElementChild.style.width = "125";
        e.firstElementChild.style.height = "150";
    }
}

let slideIndex = 1;

displaySlide(slideIndex);

function nextSlide(n){
    if(n==undefined)
     n=1;
    slideIndex += n;
    displaySlide(slideIndex);
    console.log("Trigered");
}

function displaySlide(n){
    var i;
    var slides = document.getElementsByClassName('showSlide');
    console.log("Called");

    if(slideIndex>slides.length){
        slideIndex = 1;
    }

    if(slideIndex<1){
        slideIndex = slides.length;
    }
     
    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}

setInterval(nextSlide,4000);

