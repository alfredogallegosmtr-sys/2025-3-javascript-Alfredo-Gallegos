const { ask } = require('../helpers/input.js');



async function main() {
    const temperatura = Number(await ask('Cual es la temperatura actual?'));

    if (temperatura <10 ){
        console.log('Hace frio');
    } else if (temperatura>=10 && temperatura < 20) {
        console.log('Esta templado');
    } else if (temperatura>=20 && temperatura < 30) {
        console.log('Hace calor');
    } else if (temperatura > 30) {
        console.log('Hace mucho calor');
    }


}

main();