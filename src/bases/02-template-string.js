console.log('hola q hace');

const nombre = 'Aletvia';
const apellido = 'Lecona';
const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre){
    return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
