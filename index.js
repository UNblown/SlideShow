var slider_img = document.querySelector(".slider-img");
var images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg"];
var time = 1000;
var i = 0;
var y = 0;

//Previous button

function prev() {
    if (i <= 0) i = images.length; 
    i--;
    return setImg();
}

//Next button

function next() {
    if (i >= images.length - 1) i = -1;
    i++
    return setImg();
}

//The image changer

function setImg() {
    return slider_img.setAttribute("src", "images/"+images[i]);
};

// Auto

function auto() {
    const intervalTime = 5000; 
    var slideInterval = setInterval(next, intervalTime); 
}


