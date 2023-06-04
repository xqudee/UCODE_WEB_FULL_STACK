var sliderContainer = document.getElementById('slider-container');
var imageArr = sliderContainer.getElementsByTagName('img');
imageArr[0].style.display = 'block';

var currentIndex = 0;

function showImage(index) {
    for (let i = 0; i < imageArr.length; i++) {
        const image = imageArr[i];
        imageArr[i].style.display = 'none';
    }
    imageArr[index].style.display = 'block';
}

function slideNext() {
    currentIndex++;
    if (currentIndex >= imageArr.length) currentIndex = 0;
    showImage(currentIndex);
}

function slidePrev() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = imageArr.length - 1;
    showImage(currentIndex);
}

function clickSlidePrev() {
    slidePrev();
    clearInterval(slideInterval);
}

function clickSlideNext() {
    slideNext();
    clearInterval(slideInterval);
}

var slideInterval = setInterval(slideNext, 3000);