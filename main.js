//Get DOM elements
const inputElement = document.querySelector(".txtInput");
const factorsDiv = document.querySelector(".txtFactors");
const hcfDiv = document.querySelector(".txtHCF");
const lcmDiv = document.querySelector(".txtLCM");

//Clear Child Elements from a Div
function clearDivElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

//Start of Calculation
function startCalculation() {
  //Clear Previos Elements
  clearDivElement(factorsDiv);
  //Get Array of numbers from user input
  const numValues = inputElement.value.split(" ").map(Number);
  //Calculate and Deisplay HCF
  let hcfResult = findHCF(numValues);
  appendHCF(hcfResult);
  //Calculate and Deisplay HCF
  let lcmResult = calcLCM(numValues, hcfResult);
  appendLCM(lcmResult);
  //find factors and display
  for (let i = 0; i < numValues.length; i += 1) {
    findFactors(numValues[i]);
  }
  //clear input field
  inputElement.value = "";
}

//Find HCF from array
function findHCF(arr) {
  let result = arr.reduce((a, b) => hcf(a, b), arr[0]);
  return result;
}

//Find HCF of two numbers
function hcf(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

//Calculate LCM
function calcLCM(result, hcfValue) {
  let product = result.reduce((acc, val) => acc * (val / hcfValue), 1);
  return product * hcfValue;
}

//Factors
function findFactors(number) {
  const factors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  appendFactors(number, factors);
  return factors;
}

//append Factors to HTML
function appendFactors(number, factors) {
  const paraElement = document.createElement("p");
  paraElement.textContent = `Factors of ${number}:- ${factors}`;
  factorsDiv.appendChild(paraElement);
}

//append HCF to HTML
function appendHCF(hcf) {
  clearDivElement(hcfDiv);
  const paraElement = createParagraph(`HCF:- ${hcf}`);
  hcfDiv.appendChild(paraElement);
}

//append LCM to HTML
function appendLCM(lcm) {
  clearDivElement(lcmDiv);
  const paraElement = createParagraph(`LCM:- ${lcm}`);
  lcmDiv.appendChild(paraElement);
}

// Function to create a paragraph element with given text
function createParagraph(text) {
  const paraElement = document.createElement("p");
  paraElement.textContent = text;
  return paraElement;
}
