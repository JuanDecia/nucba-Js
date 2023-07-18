// Ejercicio #1

console.log(`%c###### EJERCICIO 1 \n`, 'color: rgb(52, 110, 110)');

const buscarPar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`El número ingresado '${numero}' es par.`);
    }
    else {
        console.log(`El número ingresado '${numero}' es impar.`);
    }
}
buscarPar(14);

// Ejercicio #2

console.log(`\n%c###### EJERCICIO 2 \n`, 'color: rgb(52, 110, 110)');

const buscarMayor = (numeroUno, numeroDos) => {
    if(numeroUno < numeroDos) {
        console.log(`El número ingresado ${numeroUno}, es menor que el número ingresado ${numeroDos}.`);
    }
    else if (numeroUno > numeroDos) {
        console.log(`El número ingresado ${numeroUno}, es mayor que el número ingresado ${numeroDos}.`);
    }
    else {
        console.log(`Los números ingresados ${numeroUno} y ${numeroDos} son iguales.`);
    }
}
buscarMayor(20,22);

// Ejercicio #3

console.log(`\n%c###### EJERCICIO 3 \n`, 'color: rgb(52, 110, 110)');

const multiploCinco = (numero) => {
    if (numero % 5 == 0 ) {
        console.log(`El número ingresado${numero} es múltiplo de 5.`);
    }
    else {
        const resultado = numero % 5;
        console.log(`El número ingresado ${numero} no es múltiplo de 5 porque su resto es ${resultado}.`);
    }
}
multiploCinco(16);

// Ejercicio #4

console.log(`\n%c###### EJERCICIO 3 \n`, 'color: rgb(52, 110, 110)');

const contadorNumero = (numero) => {
    for (i = 0 ; i <= numero ; i++) {
        console.log(i);
    }
}
contadorNumero(5);

// Ejercicio #5

console.log(`\n%c###### EJERCICIO 5 \n`, 'color: rgb(52, 110, 110)');

const repetirPalabra = (palabra, numero) => {
    for(i = 0 ; i < numero; i++) {
        console.log(palabra);
    }
}
repetirPalabra("Hola mundo", 3);

// Ejercicio #6

console.log(`\n%c###### EJERCICIO 6 \n`, 'color: rgb(52, 110, 110)');

let personas = ['Juan', 'Sol', 'Joan'];

const imprimirArreglo = (arreglo) => {
    for(i = 0; i < arreglo.length ; i++ ) {
        console.log(arreglo[i]);
    }
}
imprimirArreglo(personas);

// Ejercicio #7

console.log(`\n%c###### EJERCICIO 7 \n`, 'color: rgb(52, 110, 110)');

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7];

const eliminarQuintoElemento = (arreglo) => {

    if (arreglo.length >= 5) {
        arreglo.splice(5, 1);
    }
    else {
        console.log(`El arreglo debe tener al menos 5 elementos.`);
    }

    for(i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}
eliminarQuintoElemento(arregloNumeros);

// Ejercicio #8

console.log(`\n%c###### EJERCICIO 8 \n`, 'color: rgb(52, 110, 110)');

const multiplicarIndice = (arreglo, numero) => {
    for (i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i] * numero);
    }
}
multiplicarIndice(arregloNumeros, 4);
