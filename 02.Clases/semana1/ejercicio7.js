const { ask } = require('../helpers/input.js');

async function main() { 
    const number = Number(await ask('Ingrese un numero: '));

    if(number % 3 !== 0 && number % 5 !== 0){
        console.log('No es multiplo de 3 o 5');
    }    else if (number % 3 === 0 && number % 5 !== 0){
       console.log('Es multiplo de 3');            
    } else if (number % 5 === 0 && number % 3 !== 0){
       console.log('No es multiplo de 5');            
    } else {
       console.log('Es multiplo de 3 y 5');            
    }
}

main();