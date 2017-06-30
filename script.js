// Given data
var productImages = [];
for (var i = 1; i < 7; i++) {
	productImages.push('assets/' + i + '.jpeg');
}
var imageWidth = 140;



function Carousel() {

	this.numImages = productImages.length;
	this.containerChildWidth = this.numImages * imageWidth;
	this.containerWidth = 560;
	
	this.run = function() {
		this.bambox = document.querySelector('#bambox');
		this.slideContChild = document.querySelector('.slide-container-child');
		this.slideContChild.style.width = this.containerChildWidth + 'px';

		var arrowLeft = document.querySelector('.arrow.left');
		var arrowRight = document.querySelector('.arrow.right');
		this.currentPos = this.slideContChild.style.right;


		arrowRight.addEventListener('click', function (e) {
			var currentPos = this.slideContChild.style.right;
			if (currentPos) {
				this.slideContChild.style.right = (parseInt(currentPos) + this.containerWidth) + 'px';
			} else {
				this.slideContChild.style.right = this.containerWidth + 'px';
			}
		}.bind(this));

		arrowLeft.addEventListener('click', function (e) {
			console.log('in left arrow');
			
			var currentPos = this.slideContChild.style.right;
			console.log(currentPos);
			if (currentPos) {
				console.log('have currentPos');
				this.slideContChild.style.right = (parseInt(currentPos) - this.containerWidth) + 'px';
			} else {
				this.slideContChild.style.right = this.containerWidth - 'px';
			}
		}.bind(this));

		this.setUpSlides();
	};

	this.setUpSlides = function() {
		for (var i = 0; i < this.numImages; i++) {
			var slide = document.createElement('div');

			slide.setAttribute('class', 'slide');
			slide.style.backgroundImage = 'url('+productImages[i]+')';
			this.slideContChild.appendChild(slide);
		}
	};

	this.onArrowClick = function(dir) {
		


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
