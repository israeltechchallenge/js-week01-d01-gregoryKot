function getRandomInt(max) {
  return Math.round(Math.random()*max)
}
let number = getRandomInt(100)*101;
let comparer = getRandomInt(100)*100;
function moduloEx7(number, comparer) {
  let result;
    if (number > comparer) {
      result = `The number ${number} is bigger than ${comparer}`
      if (number%comparer !== 0 ) {
        result += `. But the modulo of ${number} % ${comparer} is ${number%comparer}`
      }
    } else if (number === comparer) {
      result =`The number ${number} is equal to ${comparer}`
    } else {
      result = `The number ${number} is less than ${comparer}`
    }
    return result
  }

   document.querySelector("#output").innerText = moduloEx7(number,comparer);
