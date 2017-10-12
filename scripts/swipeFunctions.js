var slide1 = document.getElementById('slider__slide');
var slide2 = document.getElementById('slider__slide2');
var slide3 = document.getElementById('slider__slide3');
var slide4 = document.getElementById('slider__slide4');
var slide5 = document.getElementById('slider__slide5');
var slide6 = document.getElementById('slider__slide6');

var swipe1 = new Hammer (slide1);
var swipe2 = new Hammer (slide2);
var swipe3 = new Hammer (slide3);
var swipe4 = new Hammer (slide4);
var swipe5 = new Hammer (slide5);
var swipe6 = new Hammer (slide6);

var sliderBody = document.getElementById('sliderBody');
var width = window.innerWidth;
var swipe1 = new Hammer (slide1);
var swipe2 = new Hammer (slide2);

var translateWidth = width;

// LEFT SWIPES
swipe1.on('swipeleft', function(event) {
	console.log('Swipe Left');
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

swipe2.on('swipeleft', function(event) {
	console.log('Swipe Left');
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

swipe3.on('swipeleft', function(event) {
	console.log('Swipe Left');
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

swipe4.on('swipeleft', function(event) {
	console.log('Swipe Left');
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

swipe5.on('swipeleft', function(event) {
	console.log('Swipe Left');
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

// RIGHT SWIPES
swipe2.on('swiperight', function(event) {
	console.log('Swipe right');
	translateWidth = 0;
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	translateWidth = width+translateWidth;
});

swipe3.on('swiperight', function(event) {
	console.log('Swipe right');
	translateWidth = translateWidth - width;
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	
});

swipe4.on('swiperight', function(event) {
	console.log('Swipe right');
	translateWidth = translateWidth - width;
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	
});

swipe5.on('swiperight', function(event) {
	console.log('Swipe right');
	translateWidth = translateWidth - width;
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
	
});

swipe6.on('swiperight', function(event) {
	console.log('Swipe right');
	translateWidth = translateWidth - width;
	sliderBody.style.transform = 'translateX(-' + translateWidth + 'px)';
});

