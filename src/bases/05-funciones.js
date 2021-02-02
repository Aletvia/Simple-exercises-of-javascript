const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar('Ale'));
console.log(saludar2('Aletvia'));
console.log(saludar3('Anaid'));
console.log(saludar4());

const getUser = () => 
    ({
        uid: 'ABC123',
        username : 'Aletvia'
    });

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: '123ABC',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Anaid');
console.log(usuarioActivo);