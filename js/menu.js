let menuItem = document.getElementById('menu');
const menuItems = Array.from(document.querySelectorAll('.nav-item'));
menuItem.addEventListener('click', () => {
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].style.display = menuItems[i].style.display == 'block' ? 'none' : 'block';
	}
});
