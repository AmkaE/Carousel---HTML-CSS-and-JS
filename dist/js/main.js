// array of images from images folder
const images = [
	'./images/image-1.jpg',
	'./images/image-2.jpg',
	'./images/image-3.jpg',
	'./images/image-4.jpg',
	'./images/image-5.jpg',
];

// select elements
const carouselImage = document.querySelector('.carousel-item img');
const circle = document.querySelector('.carousel-item .circle');
const prevBtn = document.querySelector('.carousel-controls.prev');
const nextBtn = document.querySelector('.carousel-controls.next');

// create index position variable to keep track of
// the current image and current circle active
let indexPosition = 0;

prevBtn.addEventListener('click', backToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);
carouselImage.src = images[indexPosition];

// based on the images array's length, create circle dots
for (let i = 0; i < images.length; i++) {
	const circleItem = document.createElement('div');
	circleItem.classList.add('circle-item', i + 1);
	circle.append(circleItem);
}

// add class of 'acitve' to the circle dots based on index position
circle.children[indexPosition].classList.add('active');

// got to the next side image
function goToNextSlide() {
	// if indexPosition is equal to the length of of the array's length minus 1
	// then start from the beginning of the array and increment the indexPosition by one
	if (indexPosition === images.length - 1) {
		indexPosition = 0;
		carouselImage.src = images[indexPosition];
	} else {
		indexPosition++;
		carouselImage.src = images[indexPosition];
	}

	// remove class of 'acitve' from other circleItems
	[...circle.children].forEach(circleItem => {
		circleItem.classList.remove('active');
	});

	// add class of 'acitve' to the circle dots based on index position
	circle.children[indexPosition].classList.add('active');
}

// got back to the previous slide image
function backToPrevSlide() {
	// if the indexPosition is equal to 0 and the prev button is clicked
	// then go to end of the array's length minus one and start decrementing the indexPosition by one
	if (indexPosition === 0) {
		indexPosition = images.length - 1;
		carouselImage.src = images[indexPosition];
	} else {
		indexPosition--;
		carouselImage.src = images[indexPosition];
	}

	// remove class of 'acitve' from other circleItems
	[...circle.children].forEach(circleItem => {
		circleItem.classList.remove('active');
	});

	// add class of 'acitve' to the circle dots based on index position
	circle.children[indexPosition].classList.add('active');
}

[...circle.children].forEach((circleItem, index) => {
	// when the circleItem is clicked
	circleItem.addEventListener('click', () => {
		// set the indexPosition to that circleItem position
		indexPosition = index;
		carouselImage.src = images[indexPosition];

		[...circle.children].forEach(circleItem => {
			circleItem.classList.remove('active');
		});

		if (circleItem === circle.children[indexPosition])
			circleItem.classList.add('active');
	});
});

// slideShow function will call goToNextSlide each 3 seconds
function slideShow() {
	setInterval(() => {
		goToNextSlide();
	}, 3000);
}

slideShow();
