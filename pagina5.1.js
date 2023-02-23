/*Escribir un algoritmo que permita leer el peso de un objeto expresado en libras, que calcule
y muestre el peso de ese mismo objeto expresado en kilogramos 
recordar: 1 libra = 0.454 kilogramo.*/

var libra = 0.454;
        var peso = parseInt(prompt("Ingrese el peso del objeto"));
        var pesoEnKilo = libra * peso;

        console.log("El peso del objeto es " +pesoEnKilo + " kg" );