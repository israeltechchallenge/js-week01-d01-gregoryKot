
  function moduloEx6(number, comparer) {
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

       document.querySelector("#output").innerText = moduloEx5(5,4);

