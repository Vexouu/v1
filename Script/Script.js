let id = null;
let sIndex = 0;
        
function showImage(n) {
   sIndex=n;
   displaySlide();
}


function myMove() {  
    displaySlide();
    id = setInterval(displaySlide, 5000);            
}


function displaySlide() {
    let i;
    let slide = document.getElementsByClassName("slide");

    if (sIndex >= slide.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slide.length - 1;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[sIndex].style.display = "block";
    
    sIndex++;
}