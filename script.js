// Given data
var productImages = [];
for (var i = 1; i < 7; i++) {
	productImages.push('assets/' + i + '.jpeg');
}
// image width 140px - 160px


function Carousel() {
	this.run = function() {
		this.imageWidth = 140;
		this.arrows = document.getElementsByClassName('arrow');
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
		this.onClick();
	};

	this.onClick = function () {
		for (var i = 0; i < this.arrows.length; i++) {
			this.arrows[i].addEventListener('click', this.onArrowClick.bind(this));
		}
	}

	this.onArrowClick = function(element) {
		console.log(element);
		// bind click event to arrow left and right
		// shift content margin-left or right 4x image width
		var slides = document.getElementsByClassName('slide');
		var firstSlide = slides[0];
		// set shift for 4 items
		var shiftLength = -4 * this.imageWidth;

		// sett up conditional for left or right arrow click
		for(var i = 0; i < this.arrows.length; i++) {
			var arrow = this.arrows[i];
			// checking classname for instance of left or right
			console.dir(arrow);
			if (arrow.className.indexOf('left') !== -1) {
				firstSlide.style.marginLeft = 0 + 'px';
			} else {
				// setting first slide margin 
				firstSlide.style.marginLeft = shiftLength + 'px'
			}
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
