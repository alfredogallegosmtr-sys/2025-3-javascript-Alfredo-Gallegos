const { ask } = require('../helpers/input.js');

async function main() {
    const age = Number(await ask('Cuantos anos tienes?'));
    const genero = await ask('cual es tu genero? (masculino/femenino)');

    if (age <= 12 && genero === 'f') {
        console.log('Eres una nina');
    } else if (age <= 12 && genero === 'm') {
        console.log('Eres un nino');
    } else if (age > 12 && age < 18 && genero !== 'm') {
        console.log('Eres una adolecente');
    } else if (age > 12 && age < 18 && genero === 'm') {
        console.log('Eres un adolecente');
    } else if (age > 18 && age < 60 && genero === 'm') {
        console.log('Eres un adulto masculino');
    } else if (age > 18 && age < 60 && genero !== 'm') {
        console.log('Eres un adulto femenino');
    } else if (age > 60 && genero === 'masculino') {
        console.log('Eres un adulto mayor masculino');
    } else if (age > 60 && age < 18 && genero === 'f') {
        console.log('Eres un adulto mayor femenino');
    } else {
        console.log('No se encontraron resultados');
    }

/*    
    if (age <= 12 && genero === 'femenino') {
        console.log('Eres una nina');
    } else if (age <= 12 && genero === 'masculino') {
        console.log('Eres un nino');
    } else if (age > 12 && age < 18 && genero !== 'masculino') {
        console.log('Eres una adolecente');
    } else if (age > 12 && age < 18 && genero === 'masculino') {
        console.log('Eres un adolecente');
    } else if (age > 18 && age < 60 && genero === 'masculino') {
        console.log('Eres un adulto masculino');
    } else if (age > 18 && age < 60 && genero !== 'masculino') {
        console.log('Eres un adulto femenino');
    } else if (age > 60 && genero === 'masculino') {
        console.log('Eres un adulto mayor masculino');
    } else if (age > 60 && age < 18 && genero === 'femenino') {
        console.log('Eres un adulto mayor femenino');
    } else {
        console.log('No se encontraron resultados');
    }
*/

/*
  if (age <= 12 && genere === 'femenino') {
    console.log('Eres una niña');
  } else if (age <= 12 && genere === 'masculino') {
    console.log('Eres un niño');
  } else if (age > 12 && age < 18 && genere !== 'masculino') {
    console.log('Eres una adolescente');
  } else if (age > 12 && age < 18 && genere === 'masculino') {
    console.log('Eres un adolescente');
  } else if (age > 18 && age < 60 && genere === 'masculino') {
    console.log('Eres un adulto masculino');
  } else if (age > 18 && age < 60 && genere !== 'masculino') {
    console.log('Eres un adulto femenino');
  } else if (age > 60 && genere === 'masculino') {
    console.log('Eres un adulto mayor masculino');
  } else if (age > 60 && age < 18 && genere === 'femenino') {
    console.log('Eres un adulto mayor femenino');
  } else {
    console.log('No se encontraron resultados');
  }
    */
}

main();