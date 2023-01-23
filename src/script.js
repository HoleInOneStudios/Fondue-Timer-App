let menu = document.getElementById("menu_container");
let menu_buttons = document.getElementById("menu_buttons");
let menu_toggle = document.getElementsByClassName('menu_toggle')[0];
let menu_opened = false;


function toggleMenu() {
	menu_opened = !menu_opened;
	menu.classList.toggle('opened', menu_opened);
	menu_toggle.classList.toggle('opened', menu_opened);
	menu_buttons.classList.toggle('opened', menu_opened);
}