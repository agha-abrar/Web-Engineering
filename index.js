var currentIndex = 0;
var main = document.querySelectorAll('.main img');
var mainImage = document.querySelector('.main-image img');

function showImage(index) {
    mainImage.src = main[index].src;
    currentIndex = index;
}

function previousImage() {
    currentIndex = (currentIndex === 0) ? main.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === main.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}


