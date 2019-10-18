document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
	const sliderContainer = document.querySelectorAll('.slider-container__item'),
		  buttonPrev = document.querySelector('.number-prev'),
		  buttonNext = document.querySelector('.number-next'),
		  countLength = document.querySelector('.counter-number__length');

	let i = 0,
		currSlide = 1,
		countCurrent = document.querySelector('.counter-number__count');
		

	countLength.innerHTML = sliderContainer.length;

	//slider step NEXT
	buttonNext.addEventListener('click', () => {
		if (i == sliderContainer.length - 1) {
			sliderContainer[i].classList.remove('item-active');
			i = 0;
			sliderContainer[i].classList.add('item-active');
			if (currSlide == sliderContainer.length) {
				currSlide = 1;
				countCurrent.innerHTML = currSlide;
			}
			return
		}

		sliderContainer[i].classList.remove('item-active');
		i++;
		sliderContainer[i].classList.add('item-active');
		countCurrent.innerHTML = ++currSlide;
	})

	//slider step PREV
	buttonPrev.addEventListener('click', () => {
		if (i <= 0) {
			sliderContainer[i].classList.remove('item-active');
			i = 2;
			sliderContainer[i].classList.add('item-active');
			if (currSlide == 1) {
				currSlide = sliderContainer.length;
				countCurrent.innerHTML = currSlide;
			}
			return
		}
		sliderContainer[i].classList.remove('item-active');
		i--;
		sliderContainer[i].classList.add('item-active');
		countCurrent.innerHTML = --currSlide;
	})

	//smooth scroll
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}

	//burger menu
	let burger = document.querySelector('.burger'),
		overlay = document.querySelector('.burger-overlay'),
		close = document.querySelector('.close-menu');
	//open overlay with click in burger-menu
	burger.addEventListener('click', function () {
		if (overlay.classList.contains('Close')) {
			overlay.classList = 'burger-overlay Open'
		}
	})
	//close overlay whith icon-cross
	close.addEventListener("click", function (e) {
		if (e.target == this) {
			if (overlay.classList.contains('Open')) {
				overlay.classList = 'burger-overlay Close'
			}
		}

	});
	//close overlay with click in overlay
	overlay.addEventListener("click", function (e) {
		if (e.target == this) {
			if (overlay.classList.contains('Open')) {
				overlay.classList = 'burger-overlay Close'
			}
		}
	});

});