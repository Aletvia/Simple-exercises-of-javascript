const personajes = ['Ironman', 'Hulk', 'Antman'];
const [ , ,Hulk ] = personajes;
console.log( Hulk );


[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest);


let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


const retornaArreglo = () =>{
    return ['ABC', 123]
}
const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );


const use_State = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') }]
}
const [ nombre, setNombre ] = use_State( 'Batman' );
console.log( nombre );
setNombre();


const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  for (const {name: n, family: {father: f}} of people) {
    console.log('Nombre: ' + n + ', Padre: ' + f);
  }


  const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  const [,, { name }] = props;
  console.log(name);