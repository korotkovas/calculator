function plus () {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1); // parseint patikrins ar ivestas tik skaicius
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 + num2;
	document.getElementById('res').innerHTML = result; //inner atsako uz isvedima mano rezultato kuri ivesiu

}

function minus () {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 - num2;
	document.getElementById('res').innerHTML = result;

}
function multiply () {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 * num2;
	document.getElementById('res').innerHTML = result;

}

function devision () {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 / num2;
	document.getElementById('res').innerHTML = result;

}