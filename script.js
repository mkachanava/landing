const menuIcon = document.querySelector('#menuIcon');
const headerMenu = document.querySelector('#headerMenuMobile');
const footer = document.querySelector('#footer');
const main = document.querySelector('#main');


if (menuIcon) {
	menuIcon.addEventListener("click", function (f) {
		menuIcon.classList.toggle('active');
		headerMenu.classList.toggle('active');
		main.classList.toggle('hide');
		footer.classList.toggle('hide');
	});
}







let popupContainer = document.querySelector('.popup-container');
let popup = document.querySelector('.popup');
let openPopup = document.querySelectorAll('.open-popup');
let closePopup = document.querySelector('.close-popup');

openPopup.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupContainer.classList.add('active');
        popup.classList.add('active');
    })
});

closePopup.addEventListener('click',() => {
    popupContainer.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupContainer) {
        popupContainer.classList.remove('active');
        popup.classList.remove('active');
    }
});
