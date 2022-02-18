let age = 25;

console.log(age); 

age = 30;
// let es una variable que el valor puede ser modificado

const year = 2022;

console.log(year);

// year = 2021;

// const es una variable que el valor NO puede ser modificado

let email = "mberoisa@gmail.com";

// let result = email.lastIndexOf("a") --> muestra el valor del caracter llamado

// let result = email.slice(2,5) --> muestra los caracteres desde el primer caracter hasta el ultimo llamado

// let result = email.substr(4,10) --> muestra los caracteres desde el primer valor hasta el ultimo caracter sumado al primero

// let result = email.replace("b","v") --> reemplaza el 1er caracter por el 2do

// operaciones matematicas +, -, *, /, **, %,


const title = "down below";
const artist = "roddy ricch";
const streams = "248.069.089";

// concatenation

let result = "the song " + title + " by " + artist + " has " + streams + " streamings";
console.log(result);

// arrays

let people = ["elbero", "memameza", "bergio"];
let group = people.join(",");

console.log(group);

// indexOf es el valor del string en el arreglo
result = people.indexOf("bergio");
// concat agrega strings al arreglo
result = people.concat("seba","valen");
// push genera un nuevo arreglo con numeros
result = people.push("seba");
// pop genera con nombres
result = people.pop();

// booleans

let gmail = 'berobero@gmail.com'
let method = gmail.includes(',');

console.log(method);

// for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:', i );
}
console.log('loop finished');
// repite la funcion en un ciclo hasta que no se cumpla uno de los parametros

const names = ["elbero", "memameza", "bergio"];

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
// existen while loops, y do while loops

// if statements
//const user = 'matiasberoisa'

//if(user.length > 10 && user.length < 16) {
    //console.log('is OK');
//} else if(albums > 16){
    //console.log('user is too long');
//} else if(user.includes["-","_",",","."]){
    //console.log('user contains characters that cannot be used');
//}

// la funcion se cumple si el parametro es true
// else funciona si el parametro es false 

// LOGICAL OPERATORS - OR || AND &&
// en una funcion IF se usa el AND para cumplir 2 parametros y eL OR para cumplir 1 de los 2 parametros

// LOGICAL NOT(!)
// convierte un valor TRUE en FALSE y viceversa

const user = false;

if(!user){
    console.log('you must be logged to continue');
} else{
    console.log('you already logged');
}

// break and continue

const scores = [50, 25, 30, 0, 60, 20, 100, 80];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 0){
        continue;
    }
    console.log('your score is ',  scores[i]);
    
    if(scores[i] === 100){
        console.log('you got the top score');
        break;
    }
}
// break sirve para cortar el loop por completo y continue para cortar el loop en el momento y continuar con el siguiente numero o string

// SWITCH 
const grade = 'A';

switch(grade){
    case 'A':
        console.log('your grade is A');
        break;
    case 'B':
        console.log('your grade is B');
        break;
    case 'C':
        console.log('your grade is C');
        break;
    case 'D':
        console.log('your grade is D');
        break;
    case 'E':
        console.log('your grade is E');
        break;
    case 'F':
        console.log('your grade is F');
        break;
    default:
        console.log('not a valid grade');
}
// evalua la expresion y compara el parametro con los casos, ejecutando las declaraciones asociadas al caso

// variable and block scope

let numbers = 420;

if(true){
    numbers = 13;
    console.log('inside 1st code block: ', numbers);
}

console.log('outside 1st code block: ', numbers);

let persons = 25;

if(true){
     let persons = 10;
     let name = 'matias'
    console.log('inside 1st code block: ', persons, name);
}

let name = null;

console.log('outside 1st code block: ', persons, name);

// function declaration(una funcion cuando NO es declarada dentro de una variable)

function talk(){
    console.log('hello')
}

// function expression(una funcion cuando es declarada dentro de una variable)

const speak = function(){
    console.log('hola')
}
talk();
speak();

// el hoisting de una funcion funciona solamente con las "function declaration"

// arguments & parameters

const say = function(name = 'scott', time = 'day'){
    console.log('good ' + time + ' ' + name);
}

say();
say('travis', 'morning');

// returning values

// const calcArea = function(radius){
// return 3.14 * radius**2;}



//arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
}
const area = calcArea(13);
console.log(area);

// const greet = function(){
//    return 'hello world';}

const greet = () => 'hello world';

console.log(greet());

//const bill = function(products, tax) {
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;}
//    return total;}

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([30, 45, 60], 0.21));

// functions
const greeting = () => 'hello';

let resultOne = greeting();
console.log(resultOne);

// methods
const person = 'jhero';
let resultTwo = person.toUpperCase();
console.log(resultTwo);
// son ambas funciones, cambia la forma en la que se declaran

// callbacks & foreach

let team = ['#13','#4','#9','#6','#11']

//team.forEach((person, index) => {
 //   console.log(index, person);
//});

const logTeam = (person, index) => {
    console.log(index + ' el ' + person);
}

team.forEach(logTeam);
// ordena y ejecuta la funcion por la cant. de objetos que se encuentren dentro de la variables

// const location = [
//    {place: 'centenario',population: '32,928'},
//    {place: 'san martin de los andes', population: '32,928'}]
//console.log(location);

let profileUser = {
    name: 'matias',
    lastName: 'beroisa',
    age: 18,
    email: 'matibero@gmail.com',
    location: [    
        {place: 'centenario',population: '32,928'},
        {place: 'san martin de los andes', population: '30 200'}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logLocation(){
        // console.log(this.location);
        console.log('this user has lived in:');
        this.location.forEach(location => {
            console.log(location.place,location.population);
        });
    },
};
console.log(profileUser);
// como actualizar la informacion del perfil
//console.log(profileUser.name);
//console.log(profileUser[name]);

profileUser.login();
profileUser.logout();
profileUser.logLocation();

// math object

const square = 13.7;

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(square)); // redondea al numero mas cercano
console.log(Math.floor(square)); // redondea al numero mas bajo cercano
console.log(Math.ceil(square)); // redondea al numero mas alto cercano
console.log(Math.trunc(square)); // quita el decimal y deja el numero entero

// numero random

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

// document object model

const p = document.querySelector('p'); // ejecuta el primer elemento con la caracteristica del parametro

console.log(p);

//const paras = document.querySelectorAll('p'); // ejecuta todos los elementos con la caracteristica del parametro

//console.log(paras);

//const titleId = document.getElementById('page-title');

//console.log(titleId);

//const className = document.getElementsByClassName('error')

//console.log(className);

//const paras = document.getElementsByTagName('p');

//console.log(paras);

//const para = document.querySelector('p');

//console.log(para.innerText); // ejecuta el texto que se encuentre dentro del elemento

//const content = document.querySelector('.content')

//console.log(content);
//content.innerHTML = '<h2>esto no anda</h2>'

//const gentlemen = ['mario', 'luigi', 'wario', 'waluigi'] 

//gentlemen.forEach = (person =>{
//    content.innerHTML = '<h1>${person}</h1>';
//});

const link = document.querySelector('a');

console.log(link.attributes('href'));
link.setAttribute('href','https://www.reddit.com/');
link.innerText = 'postings';

const mssg = document.querySelector('p');

console.log(mssg.setAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color : green');
// el setattribute cambia los atributos o propiedades de los elementos en el HTML

const titleAttributes = document.querySelector('h1');

console.log(title.style);
console.log(title.style.color);

titleAttributes.style.margin = '50px';
titleAttributes.style.color = 'blue';
titleAttributes.style.fontSize = '60px';

const content = document.querySelector('p');

console.log(content.classList)
content.classList.add('error'); //para agregar propiedades
content.classList.remove('error');//para borrar propiedades

const paragraphs = document.querySelector('p')

paragraphs.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    if(p.innerText.includes('success')){
        p.classList.add('success')
    }
});

// las 3 propiedades de las class lists mas utilizadas son "add", "remove" y "toggle"
