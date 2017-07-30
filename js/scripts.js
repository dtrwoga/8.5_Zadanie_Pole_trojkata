// scripts.js
var a = prompt('Enter the base a');
var h = prompt('Enter the height h');
var triangleArea = a*h/2

if (isNaN(a) || isNaN(h) ){
	alert('At least one of the variables is not a number, enter the correct values');
}
else {
	console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
	document.write('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
}





