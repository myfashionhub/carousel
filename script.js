// Given data
var productImages = [];
for (var i = 1; i < 6; i++) {
	productImages.push('assets/' + i + '.jpeg');
}
var imageWidth = '140px';


function Carousel() {
	this.run = function() {
		this.bambox = document.querySelector('#bambox');
		this.slideCont = document.querySelector('.slide-container');
		this.setUpSlides();
	};

	this.setUpSlides = function() {
		for (var i = 0; i < productImages.length; i++) {
			var slide = document.createElement('div');
			slide.setAttribute('class', 'slide');
			slide.style.backgroundImage = 'url('+productImages[i]+')';
			this.slideCont.appendChild(slide);
		}
	};

	this.onArrowClick = function() {

	};
}

// Run carousel when document is ready
var checkDocReady = setInterval(function() {
	if (document.readyState === 'complete') {
		clearInterval(checkDocReady);
	}
	var carousel = new Carousel();
	carousel.run();
}, 500);
