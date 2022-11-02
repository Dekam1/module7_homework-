//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkString(string, obj) {
	let result = string.toLowerCase();
	for (let keys in user) {
		if (result == keys) {
			return true;
		}
	}
	return false;
}