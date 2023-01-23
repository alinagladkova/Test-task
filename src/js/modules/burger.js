const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};
//проверка
if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

//menu
const iconItem = document.querySelector('.item');
const selectedItem = document.querySelector('.item-selected');
const itemLink = document.querySelector('.item__link');
const block = document.querySelector('.page__block');

block.addEventListener("click", function (e) {
	if (iconItem) {
		iconItem.classList.toggle('_non-active');
		selectedItem.classList.toggle('_active');
		itemLink.style.display = itemLink.style.display === 'none' ? '' : 'none';
	};
});

const itemName = document.querySelector('.item__sub-name');

selectedItem.addEventListener("mouseover", mouseOver);
selectedItem.addEventListener("mouseout", mouseOut);

function mouseOver() {
	itemName.style.visibility = 'hidden';
}

function mouseOut() {
	itemName.style.visibility = 'visible';
}