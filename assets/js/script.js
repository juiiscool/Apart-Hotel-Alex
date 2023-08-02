// button Book Now

var buttonBookNow = document.getElementById("buttonBookNow");
function newp(buttonBookNow){
    window.location.href = "https://panel.bookerspro.com/booking2.php?ownerid=108969"
}

// button About
var buttonAbout = document.getElementById("buttonAbout");
function newpage(buttonAbout){
    window.location.href = "about.html"
}

//button Gallery
var buttonGallery = document.getElementById("buttonGallery");
function newwindow(buttonGallery){
    window.location.href = "gallery.html"
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-next',
      nextEl: '.swiper-button-prev',
    }
});

// back to top
var backTop = document.getElementById("back-to-top");
    window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        backTop.style.visibility = "visible";
    } else {
        backTop.style.visibility = "hidden";
    }
}

backTop.onclick = function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}