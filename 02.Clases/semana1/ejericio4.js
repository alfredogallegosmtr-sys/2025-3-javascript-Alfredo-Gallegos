const { ask } = require('../helpers/input.js');

function diffDays(actualDate,birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

    return edadEnDias;
}

function diffMonth(actualDate, birthDate) {
    const diff = actualDate - birthDate;
    const edadEnMeses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

    return edadEnMeses;
}

function diffYears(actualDate, birthDate) {
    const diff = actualDate - birthDate;
    const edadEnAnos = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

    return edadEnAnos;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = Number(await ask('Cual es el dia de tu fecha de nacimiento? '));    
  const birthDateMonth = Number(await ask('Cual es el mes de tu fecha de nacimiento? '));
  const birthDateYear = Number(await ask('Cual es el ano de tu fecha de nacimiento? '));

  //   const birthDateDay = await Number(ask('Cual es tu fecha de nacimiento?: (formato:YYYY-MM-DD)'));   
    const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    console.log('Haz vivido aproximadamente: ');
    console.log(`${diffDays(actualDate, birthDate)} dias.`);
    console.log(`${diffMonth(actualDate, birthDate)} meses.`);
    console.log(`${diffYears(actualDate, birthDate)} anos.`);
}

main();