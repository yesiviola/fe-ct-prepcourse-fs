
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
if (nombre  ==="") {
    return "" ;
}
const primeraLetra =nombre.charAt (0);
const primeraLetraMayuscula =primeraLetra.toUpperCase ();
const restoNombre = nombre.slice (1);
const nombreFinal = primeraLetraMayuscula+ restoNombre;
return nombreFinal;
}
const nombreEnMayuscula = mayuscula ("mario");
console.log (nombreEnMayuscula);




function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
if (typeof cb ==="function") {
        cb();
    }else {
        console.error ("El argumento no es una function");
    }
 }
 function miCallback (){
    console.log ("¡El callback ha sido invocado!");
 }
 invocarCallback (miCallback );





function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
if (typeof cb === "function") {
      const resultado = cb(num1, num2);
      return resultado;
    } else {
      console.error("El tercer argumento no es una función");
    }
  }
  
  function suma(a, b) {
    return a + b;
  }
  
  const resultadoSuma = operacionMatematica(5, 3, suma);
  console.log(resultadoSuma);
  
  function resta(a, b) {
    return a - b;
  }
  
  const resultadoResta = operacionMatematica(10, 4, resta);
  console.log(resultadoResta); 
  

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
 if (typeof cb === "function") {
      const sumaTotal = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
      cb(sumaTotal);
    } else {
      console.error("El segundo argumento no es una función");
    }
  }
  
  function imprimirSuma(resultado) {
    console.log(`La suma total es: ${resultado}`);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArray(numeros, imprimirSuma);
  

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
 for (let i = 0; i < array.length; i++) {
      cb(array[i]);
    }
  }
  function imprimirElemento(elemento) {
    console.log(`Elemento: ${elemento}`);
  }
  
  const miArray = [1, 2, 3, 4, 5];
  forEach(miArray, imprimirElemento);
  

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const resultadoCallback = cb(array[i]);
      newArray.push(resultadoCallback);
    }
    return newArray;
  }

  function duplicar(numero) {
    return numero * 2;
  }
  
  const miArray = [1, 2, 3, 4, 5];
  const arrayDuplicado = map(miArray, duplicar);
  console.log(arrayDuplicado); // debe imprimir [2, 4, 6, 8, 10]
  
  

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
const newArray = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i][0] === "a") {
        newArray.push(arrayOfStrings[i]);
      }
    }
    return newArray;
  }
  const palabras = ["apple", "banana", "avocado", "grape", "apricot"];
const palabrasConA = filter(palabras);
console.log(palabrasConA); 


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
