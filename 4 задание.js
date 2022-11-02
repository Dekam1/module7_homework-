//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

//Функция-коструктор
function ElectricalAppliances(name, power) {
	this.name = name;
	this.power = power;
	this.connected = false;
}
//Создание метода для функции-конструктора
ElectricalAppliances.prototype.connection = function() {
	if(this.connected == false) {
		this.connected = true;
		console.log(`${this.name} connected`);
	} else if(this.connected == true) {
		this.connected = false;
		console.log(`${this.name} switched off`);
	}
}
//Создание 1 экземпляра
const phone = new ElectricalAppliances('DEXP A440', 50);
phone.collor = 'grey';
phone.description = 'Смартфон DEXP A440 - оптимальный вариант для непритязательных пользователей.'
phone.showDescription = function() {
	console.log(this.description);
}
//Проверяем свойста и методы
console.log(phone);
phone.connection();
phone.showDescription();
console.log(phone);
//Создание 2 экземпляра
const laptop = new ElectricalAppliances('Lenovo V14-IIL 82C4016BRU', 100);
laptop.collor = 'black';
laptop.description = 'LED / 1920x1080 FHD / TFT TN / Intel Core i3 / 1005G1 / 1200 МГц / Intel UHD Graphics / 4 Gb / SSD / 128 ГБ / Нет / Windows 10 Home 64-bit / 1.6 кг'
laptop.showDescription = function() {
	console.log(this.description);
}
//Проверяем свойста и методы
console.log(laptop);
laptop.connection();
laptop.showDescription();
console.log(phone);