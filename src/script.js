// Sidebar Menu
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

// Main timer logic

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
	constructor(name, icon, time) {
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

var fork_list = document.getElementById('fork_list');
var forks = [];

forks.push(new Fork('Fork 1', 'Red'));
forks.push(new Fork('Fork 2', 'Blue'));
forks.push(new Fork('Fork 3', 'Green'));

var food_list = document.getElementById('food_list');
var foods = [];

foods.push(new Food('Food 1', 'H', 10));
foods.push(new Food('Food 2', 'P', 15));
foods.push(new Food('Food 3', 'F', 20));

var timer_list = document.getElementById('timer_list');
var timers = [];

function redrawOptions() {
	fork_list.innerHTML = '';
	forks.forEach(fork => {
		fork_list.innerHTML += fork.element;
	});

	food_list.innerHTML = '';
	foods.forEach(food => {
		food_list.innerHTML += food.element;
	});
}