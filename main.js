const USD = 73.5849;
const EUR = 88.1547;
const UAH = 2.6649;
const RUB = 1;

let input = document.getElementById('input');
let output = document.getElementById('output');
let optionInput = document.getElementById('optionInput');
let optionOutput = document.getElementById('optionOutput');

let coef = USD;
let coefConvert = RUB;

input.addEventListener('input', convert);
optionInput.addEventListener('change', choiceCurrencies_1);
optionOutput.addEventListener('change', choiceCurrencies_2);


function choiceCurrencies_1(){
	calculateCoef();
	convert();
}
function choiceCurrencies_2(){
	calculateCoefConvert();
	convert();
}

function calculateCoef(){
	coef = (optionInput.value == 'USD') ? USD :
	(optionInput.value == 'EUR') ? EUR :
	(optionInput.value == 'UAH') ? UAH
	: RUB;
}
function calculateCoefConvert(){
	coefConvert = (optionOutput.value == 'USD') ? USD :
	(optionOutput.value == 'EUR') ? EUR :
	(optionOutput.value == 'UAH') ? UAH
	: RUB;
}

function convert(){
	output.value = (input.value * coef / coefConvert).toFixed(2);
}