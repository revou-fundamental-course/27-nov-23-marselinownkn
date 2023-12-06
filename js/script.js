//validate luas
const form = document.getElementById('myForm');
const numberInputOne = document.getElementById('numberInputOne');
const numberInputTwo = document.getElementById('numberInputTwo');
const errorSpanOne = document.getElementById('errorOne');
const errorSpanTwo = document.getElementById('errorTwo');
const resetButton = document.getElementById('resetButton');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const inputValueOne = numberInputOne.value.trim();
  const inputValueTwo = numberInputTwo.value.trim();

  validateInput(inputValueOne, errorSpanOne, 'Please enter a valid number.');
  validateInput(inputValueTwo, errorSpanTwo, 'Please enter a valid number.');
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
const buttonReset = document.getElementById('buttonReset');

fieldInput.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const inputOneValue = numberOneInput.value.trim();
  const inputTwoValue = numberTwoInput.value.trim();
  const inputThreeValue = numberThreeInput.value.trim();

  inputValidate(inputOneValue, errorOneSpan, 'Please enter a valid number.');
  inputValidate(inputTwoValue, errorTwoSpan, 'Please enter a valid number.');
  inputValidate(inputThreeValue, errorThreeSpan, 'Please enter a valid number.');
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
});

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

