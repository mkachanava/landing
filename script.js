const menuIcon = document.querySelector('#menuIcon');
const headerMenu = document.querySelector('#headerMenu');

if (menuIcon) {
	menuIcon.addEventListener("click", function (f) {
		menuIcon.classList.toggle('active');
		headerMenu.classList.toggle('active');
	});
}