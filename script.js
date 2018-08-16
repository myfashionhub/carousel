// Given data
var productImages = [];
for (var i = 1; i < 7; i++) {
	productImages.push('assets/' + i + '.jpeg');
}

function Carousel() {
	var self = this;

	this.run = function() {
		this.imageWidth = 140;
		this.numSlides = 4; // Number of slides to show at once
		this.arrows = document.getElementsByClassName('arrow');
		this.slideCont = document.querySelector('.slide-container');

		this.setUpSlides();

		for (var i = 0; i < this.arrows.length; i++) {
			this.arrows[i].addEventListener('click', function(e) {
				self.onArrowClick(e.target.parentNode);
			});
		}
	};

	this.setUpSlides = function() {
		for (var i = 0; i < productImages.length; i++) {
			var slide = document.createElement('div');
			slide.setAttribute('class', 'slide');
			slide.style.backgroundImage = 'url('+productImages[i]+')';
			this.slideCont.appendChild(slide);
		}
	};

	this.onArrowClick = function(element) {
		var slides = document.getElementsByClassName('slide');
		var firstSlide = slides[0];
		var shiftLength = -this.numSlides * this.imageWidth;

		var direction = element.className.replace('arrow ', '');

		if (direction === 'left') {
			firstSlide.style.marginLeft = 0 + 'px';
		} else {
			firstSlide.style.marginLeft = shiftLength + 'px';
		}
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
