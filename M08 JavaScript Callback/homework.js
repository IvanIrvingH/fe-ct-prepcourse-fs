/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
  function cambiarMayuscula() {
    return nombre.charAt(0).toUpperCase();
  }

  function restoDePalabra() {
    return nombre.slice(1);
  }

  function concatenar(cb1, cb2) {
    return cb1() + cb2();
  }

  var mayus = concatenar(cambiarMayuscula, restoDePalabra);
  return mayus;
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  function invocarCB() {
    cb();
  }
  invocarCB();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  function numeroUno() {
    num1();
  }

  function numeroDos() {
    num2();
  }

  cb(numeroUno, numeroDos);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  let suma = 0;
  arrayOfNumbers.forEach(function (a) {
    suma += a;
  });
  cb(suma);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach(function (a) {
    cb(a);
  });
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let newArray = array.map((a) => cb(a));
  return newArray;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let newArray = arrayOfStrings.filter((a) => a.charAt(0) == 'a');
  return newArray;
}

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
