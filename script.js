var productImages = [];
for (var i = 1; i < 7; i++) {
	productImages.push('assets/' + i + '.jpeg');
}
var imageWidth = 140;


function Carousel() {
	var self = this;

	this.numImages = productImages.length;
	this.contentWidth = this.numImages * imageWidth;
	this.containerWidth = document.querySelector('.slide-container').offsetWidth;

	this.run = function() {
		this.bambox = document.querySelector('#bambox');
		this.content = document.querySelector('.slide-content');

		this.setUpSlides();

		var arrowLeft = document.querySelector('.arrow.left');
		var arrowRight = document.querySelector('.arrow.right');
		arrowRight.addEventListener('click', function(e) {
			self.onArrowClick('right');
		});
		arrowLeft.addEventListener('click', function(e) {
			self.onArrowClick('left');
		});
	};

	this.setUpSlides = function() {
		for (var i = 0; i < this.numImages; i++) {
			var slide = document.createElement('div');

			slide.setAttribute('class', 'slide');
			slide.style.backgroundImage = 'url('+productImages[i]+')';
			this.content.appendChild(slide);
		}
	};

	this.onArrowClick = function(direction) {
		var currentPosition = self.content.style.right;
		var newPosition;

		if (currentPosition) {
			currentPosition = parseInt(currentPosition.replace('px', ''));
			if (direction === 'right') {
				newPosition = currentPosition + self.containerWidth;
			} else {
				newPosition = currentPosition - self.containerWidth;
			}
		} else {
			self.content.style.right = self.containerWidth + 'px';
		}

		self.content.style.right = newPosition + 'px';
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
