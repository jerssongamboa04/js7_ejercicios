
// ### Ejercicios: Nivel 1

// 1. Declare una función _fullName_ e imprima su nombre completo.

// function _fullName_() {
//     console.log('Jersson Gamboa')
// }
// _fullName_();

// 2. Declare una función _fullName_ y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
// function fullName(firstName, lastName) {
//     return firstName + lastName;
// }
// console.log(fullName('Jersson ', 'Gamboa'));


// 3. Declare una función _addNumbers_ que toma dos parámetros y retorna la suma de ambos.

// function addNums(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNums(2, 3));
// 4. El área de un rectángulo se calcula de la siguiente manera: _area = length x width_. Escribe una función _areaOfRectangle_ que calcule el área de un rectángulo.

// function areaOfRectangle(length, width) {
//     return length * width;
// }
// console.log(areaOfRectangle(10, 20));

// 5. El perímetro de un rectángulo se calcula de la siguiente manera:
//  _perimeter= 2x(length + width)_. Escribe una función _perimeterOfRectangle_ que calcule el perímetro de un rectángulo.

// function perimeterOfRectangle(length, width) {
//     return 2 * (length + width);
// }
// console.log(perimeterOfRectangle(20, 10));
// 6. El volumen de un prisma rectangular se calcula de la siguiente manera: _volume = 
// length x width x height_. Escribe una función _volumeOfRectPrism_ que calcule el volumen de un prisma.

// function volumeOfRectPrism(length, width, height) {
//     return length * width * height;
// }
// console.log(volumeOfRectPrism(10, 20, 10));

// 7. El área de un círculo se calcula de la siguiente manera: _area = π x r x r_.
//  Escribe una función _areaOfCircle_ que calcule el área de un círculo.

// function areaOfCircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }
// console.log(areaOfCircle(10));

// 8. La circunferencia de un círculo se calcula de la siguiente manera: _circumference = 2πr_. 
// Escribe una función _circumOfCircle_ que calcule la circunferencia de un círculo.

// function circumference(r) {
//     let area = 2 * Math.PI * r;
//     return area;
// }
// console.log(circumference(10));

// 9. La densidad de una sustancia se calcula de la siguiente manera:_density= mass/volume_.
//  Escribe una función _density_ que calcule la densidad de una sustancia.

// function density(mass, volume) {
//     return mass / volume
// }
// console.log(density(20, 10));

// 10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto 
// en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un 
// objeto en movimiento, _speed_.

// function speed(totalDistace, objectMoving) {
//     return totalDistace / objectMoving;
// }

// console.log(speed(10, 20));

// 11. El peso de una sustancia se calcula de la siguiente manera: _weight = mass x gravity_. 
// Escribe una función _weight_ que calcule el peso de una sustancia.

// function weight(mass) {
//     let gravity = 9.8 * mass;
//     return gravity;
// }
// console.log(weight(2));

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: _°F = (°C x 9/5) + 32_. 
// Escribe una función _convertCelsiusToFahrenheit_ que convierta °C a °F.

// function convertCelsiusToFahrenheit(C) {
//     let fahrenheit = C * 9 / 5 + 32;
//     return fahrenheit;
// }
// console.log(convertCelsiusToFahrenheit(10));

// 13. El índice de masa corporal (IMC) se calcula de la siguiente manera:
// _imc = peso en Kg / (altura x altura) en m2_. Escribe una función que calcule _imc_. 
// El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 
// 20 años o más. Compruebe si una persona tiene un _peso bajo, peso normal, con sobrepeso_ u _obeso_
//  según la información que se proporciona a continuación.

//     - Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
//     - _Peso bajo_: IMC inferior a 18,5
//     - _Peso normal_: IMC de 18,5 a 24,9
//     - _Sobrepeso_: IMC de 25 a 29,9
//     - _Obeso_: IMC es 30 o más

// function calcule_imc(peso,height) {
//     let height=  height * 2;
//     let fullImc = peso / height * peso / height;

//     return fullImc()
// }

// 14. Escribe una función llamada _checkSeason_, toma un parámetro de mes y retorna la estación: Otoño,
//  Invierno, Primavera o Verano.

// function checkSeason(mes) {

//     switch (mes) {
//        case 'enero':
//        case 'febrero':
//        case 'diciembre':
//             console.log("La estacion es invierno");
//             break;
//         case 'marzo':
//         case 'abril':
//         case 'mayo':
//             console.log("La estacion es primavera");
//             break;
//         case 'junio':
//         case 'julio' :
//         case 'agosto':
//             console.log("La estacion es verano");
//             break;

//         case 'septimbre':
//         case 'octubre':
//         case 'noviembre':
//             console.log("La estacion es otoño");
//             break;
//             default:
//                 console.log(`Esto no es un mes`);
//     }
// }
// checkSeason('diciembre');

// 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos
//  y devuelva su máximo sin usar el método Math.max.

// let maximoNum = 0;
// function findMax() {
//     let a = 10;
//     let b =7;
//     let c = 6;
// if (a > b) {
//     console.log(`El numero mayor es ${a}`);
// }else if ( b < c){
// console.log(`El numero mayor es ${c}`);
// }else {
//     console.log(`El numero mayor es ${b}`);
// }
// }
// findMax(3,4,7);

//     ```js
//     console.log(findMax(0, 10, 5));
//     10;
//     console.log(findMax(0, -10, -2));
//     0;
//     ```


// ### Ejercicios: Nivel 2

// 1. La ecuación lineal se calcula de la siguiente manera: _ax + by + c = 0_. 
// Escribe una función que calcule el valor de una ecuación lineal, _solveLinEquation_.

// function solveLinEquation(a, b, c, x) {
//     return (-a * x - c) / b;
//   }

//   solveLinEquation(4,5,3,4)

// 2. La ecuación cuadrática se calcula de la siguiente manera: _ax2 + bx + c = 0_. 
// Escribe una función que calcule el valor o los valores de una ecuación cuadrática, _solveQuadEquation_.

//    ```js
//    console.log(solveQuadratic()); // {0}
//    console.log(solveQuadratic(1, 4, 4)); // {-2}
//    console.log(solveQuadratic(1, -1, -2)); // {2, -1}
//    console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
//    console.log(solveQuadratic(1, 0, -4)); //{2, -2}
//    console.log(solveQuadratic(1, -1, 0)); //{1, 0}
//    ```

// 3. Declare una función llamada _printArray_. Toma un array como parámetro e imprime cada valor del array.

// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//   }
// printArray(array);

// 4. Declare una función llamada _showDateTime_ que muestre la hora en este formato: 
// 01/08/2020 04:08 usando el objeto Date.

// function showDateTime() {
//     const now = new Date();
//     const date = now.toLocaleDateString("es-ES", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });
//     const time = now.toLocaleTimeString("es-ES", {
//       hour12: false,
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//     console.log(`${date} ${time}`);
//   }

// showDateTime();

//    ```sh
//    showDateTime()
//    08/01/2020 04:08
//    ```

// 5. Declare una función llamada _swapValues_. Esta función intercambia el valor de x a y.

// function swapValues(x, y) {
//     let temp = x;
//     x = y;
//     y = temp;
//     console.log("x =", x);
//     console.log("y =", y);
//   }
//   swapValues(5,10);

//    ```js
//    swapValues(3, 4); // x => 4, y=>3
//    swapValues(4, 5); // x = 5, y = 4
//    ```

// 6. Declare una función llamada _reverseArray_. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

// let myArray = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//     const reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArr.push(arr[i]);
//     }
//     return reversedArr;
//   }
//   const reversedArray = reverseArray(myArray);
//   console.log(reversedArray);
    
//    ```js
//    console.log(reverseArray([1, 2, 3, 4, 5]));
//    //[5, 4, 3, 2, 1]
//    console.log(reverseArray(["A", "B", "C"]));
//    //['C', 'B', 'A']
//    ```

// 7. Declare una función llamada _capitalizeArray_. Toma un array como parámetro y retorna el array - capitalizedarray.

// let myArray = ["apple", "banana", "cherry", "date"];

// function capitalizeArray(arr) {
//     const capitalizedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return capitalizedArr;
//   }
//   const capitalizedArray = capitalizeArray(myArray);
//   console.log(capitalizedArray);
    
// 8. Declare una función llamada _addItem_. Toma un elemento de paŕametro y retorna un array después de 
// // agregar el un elemento.

// const elemenNew = ["new", "mundo"];

// function addItem(elemen) {
//  elemenNew.push(elemen);
//  return elemenNew;
// }
// console.log(addItem("hola"));

// 9. Declare una función llamada _removeItem_. Toma como parámetro un index y retorna un array después de 
// eleminar el elemento con ese index.

// const myArray = ["apple", "banana", "cherry", "date"];

// function removeItem(index, arr) {
//     arr.splice(index, 1);
//     return arr;
//   }
// console.log(removeItem(1, myArray));

// 10. Declare una función llamada _sumOfNumbers_. Toma un número como parámetro y suma todos los
//  números en ese rango.

// function sumOfNumbers(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }

//   console.log(sumOfNumbers(5));
  
// 11. Declare una función llamada _sumOfOdds_. Toma un parámetro numérico y suma todos los números impares
//  en ese rango.

// function sumOfOdds(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       if (i % 2 !== 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
// console.log(sumOfOdds(10));

// 12. Declare una función llamada _sumOfEven_. Toma un parámetro numérico y suma todos los números pares
//  en ese rango.

// function sumOfEven(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       if (i % 2 == 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
//   console.log(sumOfEven(10));

// 13. Declare una función llamada _evensAndOdds_ . Toma un entero positivo como parámetro y cuenta
//  el número de pares e impares.

// function evensAndOdds(num) {
//     let evenCount = 0;
//     let oddCount = 0;
//     for (let i = 1; i <= num; i++) {
//       if (i % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
//     return `El numero de pares es: ${evenCount}. El numero de impares son: ${oddCount}`;
//   }
  
// console.log(evensAndOdds(100));

//    evensAndOdds(100);
//    El número de impares son 50.
//    El número de pares es 51.
//    ```

// 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

// function sumOfNumbers() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//       total += arguments[i];
//     }
//     return total;
//   }

//   console.log(sumOfNumbers(1,2,3,4));
//    sum(1, 2, 3); // -> 6
//    sum(1, 2, 3, 4); // -> 10

// 15. Escriba una función _randomUserIp_ que genere una ip de usuario aleatoria.

// function randomUserIp() {
//     let ip = "";
//     for (let i = 0; i < 4; i++) {
//       ip += Math.floor(Math.random() * 256) + ".";
//     }
//     return ip.slice(0, -1);
//   }
//   console.log(randomUserIp());

// 16. Escriba una función _randomMacAddress_ que genere una dirección mac aleatoria.

// 17. Declare una función llamada _randomHexaNumberGenerator_. Cuando se llama a esta función, 
// genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

// function randomHexaNumberGenerator() {
//     const randomDecimal = Math.floor(Math.random() * 16777216);
//         const randomHex = randomDecimal.toString(16);
//         return randomHex;
//   }

// console.log(`#${randomHexaNumberGenerator()}`);

//    console.log(randomHexaNumberGenerator());
//    '#ee33df'

// 18. Declare una función llamada _userIdGenerator_. Cuando se llama a esta función, genera un id de 
// siete caracteres. La función devuelve el id.

//    console.log(userIdGenerator());
//    41XTDbE

// ### Ejercicios: Nivel 3

// 1. Modifique la función _userIdGenerator_. Declare una función de nombre _userIdGeneratedByUser_
// . No toma ningún parámetro pero toma dos entradas usando prompt(). 
// Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad d
// e ID que se supone que se generarán.

//    ```sh
//    userIdGeneratedByUser()
//    'kcsy2
//    SMFYb
//    bWmeq
//    ZXOYh
//    2Rgxf
//    '
//    userIdGeneratedByUser()
//    '1GCSgPLMaBAVQZ26
//    YD7eFwNQKNs7qXaT
//    ycArC5yrRupyG00S
//    UbGxOFI7UXSWAyKN
//    dIV0SSUTgAdKwStr
//    '
//    ```

// 2. Escriba una función llamada _rgbColorGenerator_ que genera colores rgb

// function rgbColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
  
//     return `rgb(${red}, ${green}, ${blue})`;
//   }

//   console.log(rgbColorGenerator());
//    rgbColorGenerator()
//    rgb(125,244,255)

// 3. Escriba una función **_arrayOfHexaColors_** que retorna cualquier cantidad de colores hexadecimales 
// en un array.

// function arrayOfHexaColors(numColors) {
//     const colors = [];
//     for (let i = 0; i < numColors; i++) {
//       const randomHex = Math.floor(Math.random() * 16777215).toString(16);
//       colors.push(`#${randomHex}`);
//     }
//     return colors;
//   }
// console.log(arrayOfHexaColors(5));

// 4. Escriba una función **_arrayOfRgbColors_** que retorna cualquier cantidad de colores RGB en un array.

// function arrayOfRgbColors(numColors) {
//     const colors = [];
//     for (let i = 0; i < numColors; i++) {
//       const red = Math.floor(Math.random() * 256);
//       const green = Math.floor(Math.random() * 256);
//       const blue = Math.floor(Math.random() * 256);
//       colors.push(`rgb(${red}, ${green}, ${blue})`);
//     }
//     return colors;
//   }
// console.log(arrayOfRgbColors(3));

// 5. Escriba una función **_convertHexaToRgb_** que convierta el color hexa a rgb y retorna un color rgb.

// function convertHexaToRgb(hexaColor) {
//     hexaColor = hexaColor.replace('#', '');

//     const red = parseInt(hexaColor.substring(0, 2), 16);
//     const green = parseInt(hexaColor.substring(2, 4), 16);
//     const blue = parseInt(hexaColor.substring(4, 6), 16);
  
//     // Retorna el color RGB en formato 'rgb(r, g, b)'
//     return `rgb(${red}, ${green}, ${blue})`;
//   }
//   const hexaColor = '#ff0000';
//   const rgbColor = convertHexaToRgb(hexaColor);
//   console.log(rgbColor);
  
// 6. Escriba una función **_convertRgbToHexa_** que convierta rgb a color hexa y retorna un color hexa.

// function convertRgbToHexa(rgbColor) {
//     const rgbValues = rgbColor.substring(rgbColor.indexOf('(') + 1, rgbColor.lastIndexOf(')')).split(',');
//     const red = parseInt(rgbValues[0]);
//     const green = parseInt(rgbValues[1]);
//     const blue = parseInt(rgbValues[2]);
  
//     const redHexa = red.toString(16).padStart(2, '0');
//     const greenHexa = green.toString(16).padStart(2, '0');
//     const blueHexa = blue.toString(16).padStart(2, '0');
  
//     const hexaColor = `#${redHexa}${greenHexa}${blueHexa}`;
  
//     return hexaColor;
//   }
//   const rgbColor = 'rgb(255, 0, 0)';
// const hexaColor = convertRgbToHexa(rgbColor);
// console.log(hexaColor); 

// 8. Llame a su función _shuffleArray_, toma un array como parámetro y devuelve un array mezclada

// const array = ["banana","apple","date"];
// function shuffleArray(array) {
    
//     const shuffledArray = array.slice();
  
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
  
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
//   }
//   console.log(shuffleArray(array));
  

// 9. Llame a su función _factorial_, toma un número entero como parámetro y devuelve un factorial
//  del número.

// function factorial(number) {
//     if (number < 0) {
//       return 'Error: el número debe ser mayor o igual a cero';
//     }
//     if (number === 0) {
//       return 1;
//     }
//     return number * factorial(number - 1);
//   }  
//   console.log(factorial(5));

// 10. Llame a su función _isEmpty_, toma un parámetro y verifica si está vacío o no.

// function isEmpty(value) {
//     if (typeof value === 'undefined' || value === null) {
//       return true;
//     }
//     if (typeof value === 'string' && value.trim() === '') {
//       return true;
//     }
//     if (Array.isArray(value) && value.length === 0) {
//       return true;
//     }
//     if (typeof value === 'object' && Object.keys(value).length === 0) {
//       return true;
//     }
//     return false;
//   }
  
//   console.log(isEmpty(""));

// 11. Llame a su función _sum_, toma cualquier cantidad de argumentos y devuelve la suma.

// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//       total += number;
//     }
//     return total;
//   }
// console.log(sum(2,3,1));  

// 12. Escriba una función llamada _sumOfArrayItems_, toma un array como parámetro y retorna la suma
//  de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números.
//   Si no, dé una respuesta razonable.

// const array = ["a","b"];
// function sumOfArrayItems(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] !== 'number') {
//         return 'El array contiene elementos que no son números.';
//       }
//       sum += array[i];
//     }
//     return sum;
//   }
// console.log(sumOfArrayItems(array));  

// // 13. Escribe una función llamada _average_, toma un array como parámetro y retorna el promedio
//  de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no,
//   dé una respuesta adecuada.

// const array = [1, 2, 3, 4, 5];
// function average(array) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (typeof array[i] !== 'number') {
//         return 'Error: El array contiene elementos que no son números';
//       }
//       sum += array[i];
//       count++;
//     }
//     if (count === 0) {
//       return 'Error: El array está vacío';
//     }
//     return sum / count;
//   }
// console.log(average(array));
  
// // 14. Escriba una función llamada _modifyArray_ que tome un array como parámetro y modifique
//  el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco,
//   retorna 'elemento no encontrado'.

// const array = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
// function modifyArray(arr) {
//     if (arr.length < 5) {
//       return 'elemento no encontrado';
//     }
//     arr[4] = arr[4].toUpperCase();
//     return arr;
//   }
//   console.log(modifyArray(array));

//    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);

// 15. Escribe una función llamada _isPrime_, que verifica si un número es un número primo.
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isPrime(17));

// 16. Escriba una función que verifique si todos los elementos son únicos en un array.

// const array = [1, 3, 3, 4];

// function areAllElementsUnique(arr) {
//     let uniqueSet = new Set(arr);
//     return uniqueSet.size === arr.length;
//   }
//   console.log(areAllElementsUnique(array));

// 17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
// const array1 = [1, 2, 3, 4];

// function mismoTipo(array) {
//     let tipo = typeof array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (typeof array[i] !== tipo) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(mismoTipo(array1));

// 18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, 
// excepto \$ o \_. Escriba una función **isValidVariable** que verifique si una variable es válida o inválida.

// const variable1 = "mi_variable";

// function isValidVariable(variable) {

//     if (!/^[a-zA-Z_$]/.test(variable.charAt(0))) {
//       return false;
//     }
    
//     if (!/^[a-zA-Z0-9_$]*$/.test(variable.slice(1))) {
//       return false;
//     }

//     return true;
//   }
//   console.log(isValidVariable(variable1));


// 19. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

// function generarNumerosAleatorios() {
//     let numeros = [];
    
//     while (numeros.length < 7) {
//       let numero = Math.floor(Math.random() * 10);
      
//       if (!numeros.includes(numero)) {
//         numeros.push(numero);
//       }
//     }
    
//     return numeros;
//   }
// console.log(generarNumerosAleatorios());

//    sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];

// 20. Escriba una función llamada reverseCountries,
//  toma el array de países y primero copia el array y retorna el array original invertido

const paises = ["argentina", "brasil", "colombia",];

function reverseCountries(paises) {
    let copiaPaises = paises.slice();
        copiaPaises.reverse();
        return copiaPaises;
  }
  
console.log(reverseCountries(paises));


