function compareNumbers(firstNumber, secondNumber) {
  //your code
  if (firstNumber > secondNumber) {
    console.log(`The number ${firstNumber} is bigger than ${secondNumber}`)
  } else if (firstNumber === secondNumber) {
      console.log(`The number ${firstNumber} is equal to ${secondNumber}`)
  } else {
    console.log(`The number ${firstNumber} is less than ${secondNumber}`)
  }
}

// Do not remove or change this line, or the tests won't work
export { compareNumbers };
