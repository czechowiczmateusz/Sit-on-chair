// Przełączanie zdjęć

var lt = document.querySelector('.lt');
var rt = document.querySelector('.rt');
var img = document.querySelectorAll('.slider-pic ul li');

var index = 0;

img[index].style.display = "flex";

lt.addEventListener("click", function() {
    img[index].style.display = "none";
    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    img[index].style.display = "flex";
});

rt.addEventListener("click", function() {
    img[index].style.display = "none";
    index++;
    if (index >= img.length) {
        index = 0;
    }
    img[index].style.display = "flex";
});

// Znikanie elementów

var first = document.querySelector('div.photo-one');
var second = document.querySelector('div.photo-two');

  first.addEventListener('mouseover', function () {
        first.firstElementChild.style.display = "none"
    });

  first.addEventListener('mouseout', function () {
        first.firstElementChild.style.display = "flex"
    });

  second.addEventListener('mouseover', function () {
        second.firstElementChild.style.display = "none"
    });

  second.addEventListener('mouseout', function () {
        second.firstElementChild.style.display = "flex"
    });
