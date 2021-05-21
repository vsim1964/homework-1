'use strict';

function solveEquation(a, b, c) {
	let arr;
	// код для задачи №1 писать здесь
	let d = (Math.pow(b, 2)) - 4 * a * c;
	let discriminantRoot = Math.sqrt(d);
	let x = Math.round((-b + discriminantRoot) / (2 * a), 3);
	let x1 = Math.round((-b + discriminantRoot) / (2 * a), 3);
	let x2 = Math.round((-b - discriminantRoot) / (2 * a), 3);
	if (d < 0) {
		arr = []
	} else if (d === 0) {
		arr = [x]
	} else {
		arr = [x1, x2]
	}
	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	// код для задачи №2 писать здесь

	return totalAmount;
}