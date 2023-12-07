


//validate luas
const form = document.getElementById('myForm');
const numberInputOne = document.getElementById('numberInputOne');
const numberInputTwo = document.getElementById('numberInputTwo');
const errorSpanOne = document.getElementById('errorOne');
const errorSpanTwo = document.getElementById('errorTwo');
const calculateButton = document.getElementById('calculateButton');
const resultArea = document.getElementById('resultText');
const resetButton = document.getElementById('resetButton');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const inputValueOne = parseFloat(numberInputOne.value.trim());
  const inputValueTwo = parseFloat(numberInputTwo.value.trim());

  validateInput(inputValueOne, errorSpanOne, 'Please enter a valid number.');
  validateInput(inputValueTwo, errorSpanTwo, 'Please enter a valid number.');

  if (!isNaN(inputValueOne) && !isNaN(inputValueTwo)) {
    const area = calculateTriangleArea(inputValueOne, inputValueTwo);
    resultArea.textContent = `L = 1/2 x ${inputValueOne} x ${inputValueTwo} = ${area}`;
    resultArea.parentElement.style.display = 'block';
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  resultArea.parentElement.style.display = 'none';
  resultArea.textContent = '';
  form.reset();
});

numberInputOne.addEventListener('input', function() {
  const inputValueOne = numberInputOne.value.trim();
  validateInput(inputValueOne, errorSpanOne, 'Please enter a valid number.');
});

numberInputTwo.addEventListener('input', function() {
  const inputValueTwo = numberInputTwo.value.trim();
  validateInput(inputValueTwo, errorSpanTwo, 'Please enter a valid number.');
});

resetButton.addEventListener('click', function() {
  form.reset(); 
  hideError(errorSpanOne);
  hideError(errorSpanTwo); 
});

function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}


function validateInput(inputValue, errorElement, message) {
  if (isNaN(inputValue)) {
    showError(errorElement, message);
  } else {
    hideError(errorElement);
  }
}

function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.opacity = '1';
}

function hideError(errorElement) {
  errorElement.style.opacity = '0';
}






//validate keliling
const fieldInput = document.getElementById('meForm');
const numberOneInput = document.getElementById('numberOneInput');
const numberTwoInput = document.getElementById('numberTwoInput');
const numberThreeInput = document.getElementById('numberThreeInput');
const errorOneSpan = document.getElementById('errorNumberOne');
const errorTwoSpan = document.getElementById('errorNumberTwo');
const errorThreeSpan = document.getElementById('errorNumberThree');
const buttonCalculate = document.getElementById('buttonCalculate');
const areaResult = document.getElementById('textResult');
const buttonReset = document.getElementById('buttonReset');

fieldInput.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const inputOneValue = parseFloat(numberOneInput.value.trim());
  const inputTwoValue = parseFloat(numberTwoInput.value.trim());
  const inputThreeValue = parseFloat(numberThreeInput.value.trim());

  inputValidate(inputOneValue, errorOneSpan, 'Please enter a valid number.');
  inputValidate(inputTwoValue, errorTwoSpan, 'Please enter a valid number.');
  inputValidate(inputThreeValue, errorThreeSpan, 'Please enter a valid number.');

  if (!isNaN(inputOneValue) && !isNaN(inputTwoValue) && !isNaN(inputThreeValue)) {
    const around = calculateAroundTriangle(inputOneValue, inputTwoValue, inputThreeValue);
    areaResult.textContent = `K = ${inputOneValue} + ${inputTwoValue} + ${inputThreeValue} = ${around}`
    areaResult.parentElement.style.display = 'block';
  }
});

document.getElementById('buttonReset').addEventListener('click', function() {
  resultAround.parentElement.style.display = 'none';
  resultAround.textContent = '';
  fieldInput.reset();
});


numberOneInput.addEventListener('input', function() {
  const inputOneValue = numberOneInput.value.trim();
  inputValidate(inputOneValue, errorOneSpan, 'Please enter a valid number.');
});

numberTwoInput.addEventListener('input', function() {
  const inputTwoValue = numberTwoInput.value.trim();
  inputValidate(inputTwoValue, errorTwoSpan, 'Please enter a valid number.');
});

numberThreeInput.addEventListener('input', function() {
  const inputThreeValue = numberThreeInput.value.trim();
  inputValidate(inputThreeValue, errorThreeSpan, 'Please enter a valid number.');
});


buttonReset.addEventListener('click', function() {
  fieldInput.reset(); 
  errorHide(errorOneSpan); 
  errorHide(errorTwoSpan); 
  errorHide(errorThreeSpan); 
  clearResults();
});


function calculateAroundTriangle(sideOne, sideTwo, sideThree) {
  return sideOne + sideTwo + sideThree;
}

function inputValidate(valueInput, elementError, messages) {
  if (isNaN(valueInput)) {
    errorShow(elementError, messages);
  } else if (valueInput === '') {
    errorHide(elementError);
  }
}

function errorShow(elementError, messages) {
  elementError.textContent = messages;
  elementError.style.opacity = '1';
}

function errorHide(elementError) {
  elementError.style.opacity = '0';
}

function clearResults() {
  areaResult.parentElement.style.display = 'none'; 
  areaResult.textContent = ''; 
}
