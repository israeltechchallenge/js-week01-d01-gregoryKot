function modulo(firstNumber, secondNumber) {
  //your code
  if (firstNumber > secondNumber) {
    console.log(`The number ${firstNumber} is bigger than ${secondNumber}`)
    if (firstNumber%secondNumber !== 0 ) {
      console.log(`The modulo of ${firstNumber} % ${secondNumber} is ${firstNumber%secondNumber}`)
    }
  } else if (firstNumber === secondNumber) {
      console.log(`The number ${firstNumber} is equal to ${secondNumber}`)
  } else {
    console.log(`The number ${firstNumber} is less than ${secondNumber}`)
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };
