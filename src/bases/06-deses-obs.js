const persona = {
    nombre: 'Tony',
    edad : 45,
    clave : 'Ironman'
};

/* 
const {edad, clave, nombre} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);
*/

const use_Context = ({nombre, edad, clave, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.323,
            lng: -12.452
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = use_Context( persona );

console.log(nombreClave, anios);
console.log(lat, lng);