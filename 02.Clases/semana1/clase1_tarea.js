const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador


  /*
  let operador = await ask("¿Vamos a hacer una operacion matematica de dos numeros, que operacion quieres hacer suma +, resta -, multiplicacion * o division /?");
  let primerNumero = Number(await ask("¿Cuál es primer numero?"));
  let segundoNumero = Number(await ask("¿Cuál es el segundo numero?"));
  let resultado;
  // let resultado = (primerNumero) + operador + (segundoNumero);

  
  switch (operador) {
  case '+':
    resultado = primerNumero + segundoNumero;
    break;
  case '-':
    resultado = primerNumero - segundoNumero;
    break;
  case '*':
    resultado = primerNumero * segundoNumero;
    break;
  case '/':
    resultado = primerNumero / segundoNumero;
    break;
  default:
    resultado = 'Operador inválido';
}


  console.log("El resultado de la operacion es: " + resultado);
   // resultado = primerNumero + operador + segundoNumero;

*/

/*

  let operador = await ask("¿Vamos a hacer una operacion matematica de dos numeros, que operacion quieres hacer suma +, resta -, multiplicacion * o division /?");
  let num1 = Number(await ask("¿Cuál es primer numero?"));
  let num2 = Number(await ask("¿Cuál es el segundo numero?"));
  let resultado = 0;

  if(operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
    console.log('Operacion no valida');
  }


if (operador === '+') {
  resultado = num1 + num2;
} else if (operador === '-') {
  resultado = num1 - num2;
} else if (operador === '*') {
  resultado = num1 * num2;
} else if (operador === '/') {
  resultado = num1 / num2;
} else {
  console.log('Operacion no valida');
  return;
}

console.log("El resultado de la operacion es: " + resultado);
*/

  let operador = await ask("¿Vamos a hacer una operacion matematica de dos numeros, que operacion quieres hacer suma +, resta -, multiplicacion * o division /?");
  let num1 = Number(await ask("¿Cuál es primer numero?"));
  let num2 = Number(await ask("¿Cuál es el segundo numero?"));
  let resultado = 0;

  if(operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
    console.log('Operacion no valida');
    return;
  }


switch (operador) {

  resultado = num1 + num2;
} else if (operador === '-') {
  resultado = num1 - num2;
} else if (operador === '*') {
  resultado = num1 * num2;
} else if (operador === '/') {
  resultado = num1 / num2;
} else {
  console.log('Operacion no valida');
  return;
}


}

main();