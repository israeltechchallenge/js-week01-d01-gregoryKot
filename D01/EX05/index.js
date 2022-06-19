function moduloEx5(firstNumber, secondNumber) {
  let result;
    if (firstNumber > secondNumber) {
      result = `The number ${firstNumber} is bigger than ${secondNumber}`
      if (firstNumber%secondNumber !== 0 ) {
        result += `. But the modulo of ${firstNumber} % ${secondNumber} is ${firstNumber%secondNumber}`
      }
    } else if (firstNumber === secondNumber) {
      result =`The number ${firstNumber} is equal to ${secondNumber}`
    } else {
      result = `The number ${firstNumber} is less than ${secondNumber}`
    }
    console.log(result)
  }
  



// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
