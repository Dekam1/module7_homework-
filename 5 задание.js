//Переписать консольное приложение из предыдущего юнита на классы.

//Создание общего класса
class ElectricalAppliances {
	constructor(options) {
		this.name = options.name;
		this.power = options.power;
		this.connected = false
	}
	connection() {
		if (this.connected == false) {
			this.connected = true;
			console.log(`${this.name} connected`);
		} else if(this.connected == true) {
			this.connected = false;
			console.log(`${this.name} switched off`);
		}
	}
}
//Создание класса и наследование от ElectricalAppliances
class Phone extends ElectricalAppliances {
	constructor(options) {
		super(options);
		this.color = options.color;
		this.description = options.description;
	}
	showDescription() {
		console.log(this.description)
	}
} 
//Создание экземпляра
const phone = new Phone({
	name: 'DEXP A440',
	power: 50,
	color: 'grey', 
	description: 'Смартфон DEXP A440 - оптимальный вариант для непритязательных пользователей.'
})
//Унаследование от класса Phone
class Laptop extends Phone {

}
//Создание экземпляра
const laptop = new Laptop({
	name: 'Lenovo V14-IIL 82C4016BRU',
	power: 100,
	color: 'black', 
	description: 'LED / 1920x1080 FHD / TFT TN / Intel Core i3 / 1005G1 / 1200 МГц / Intel UHD Graphics / 4 Gb / SSD / 128 ГБ / Нет / Windows 10 Home 64-bit / 1.6 кг.'
})