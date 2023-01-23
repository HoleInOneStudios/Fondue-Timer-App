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

let fork_list = document.getElementById('fork_list');
let forks = []

let food_list = document.getElementById('food_list');
let foods = []

let timer_list = document.getElementById('timer_list');
let timers = []

class Fork {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.element = this.generateElement();
	}

	generateElement() {
		return `<div class="option">
					<span class="icon">${this.color}</span>
					<span class="name">${this.name}</span>
				</div>`
	}
}

class Food {
	constructor(name, color, time) {
		this.name = name;
		this.icon = icon;
		this.time = time;
		this.element = this.generateElement();
	}

	generateElement() {
		return `<div class="option">
					<span class="icon">${this.icon}</span>
					<span class="name">${this.name}</span>
				</div>`
	}
}