var currentIndex = 0;
var thumbnails = document.querySelectorAll('.thumbnails img');
var mainImage = document.querySelector('.main-image img');

function showImage(index) {
    mainImage.src = thumbnails[index].src;
    currentIndex = index;
}

function previousImage() {
    currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}


thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
        showImage(index);
    });
});