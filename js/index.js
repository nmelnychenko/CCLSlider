var wrapper = document.getElementById("js-carousel__wrap");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var pageNumber = document.getElementById("counter");
var pageCounter = 1;

function changeSlide (element, number, counter) {
    element.style.marginLeft = (-100)*(counter-1) + 'vw';
    number.innerHTML = counter.toString();
}

previous.onclick = function () {
    pageCounter > 1 ? --pageCounter : pageCounter = 3;
    changeSlide(wrapper, pageNumber, pageCounter);
};

next.onclick = function () {
    pageCounter < 3 ? ++pageCounter : pageCounter = 1;
    changeSlide(wrapper, pageNumber, pageCounter);
};