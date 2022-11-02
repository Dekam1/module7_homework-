//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function showValuesIsObj(obj) {
	for (let keys in obj) {
		if(obj.hasOwnProperty(keys)) {
			console.log(keys, obj[keys]);
		}
	}
}