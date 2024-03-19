$(document).ready(function() {
  setTimeout(showSlides, 5000); // Change image every 2 seconds
})

function showSlides() {
    let slides = document.getElementById("slideshow");
    console.log(slides)
    let images = slides.getElementsByTagName('img');
    console.log(images, images[0].hasAttribute("hide"), images[1].hasAttribute("hide"))
    if (images[0].style.display == "none") {
        images[0].style.display = "block";
        images[1].style.display = "none";
        console.log(1)
    } 
    else {
      images[1].style.display = "block";
      images[0].style.display = "none";
    }
}
