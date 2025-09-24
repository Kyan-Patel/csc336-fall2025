/* 
    Class Introduction

    Class is a blueprint for creating objects
    Through instantiation we create classes
    Classes are a collection of properties and methods

*/

class Person{
    constructor(n){
        this.name = n;
    }

    sayHello(howManyTimes){
        for(let i = 0; i < howManyTimes; i++){
        console.log('Hello, my name is ' + this.name);
        }
    }
}

let Kyan = new Person('Kyan');
Kyan.sayHello(4);

// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\   

/*
    Arrow Functions
        Simplified syntax for writing functions

        fuction add(x, y) {
            return x + y;
        }
        
        let add2 = (x, y) => x + y;

        Arrow functions do not bind their own 'this'
            - 'this' refers to the surrounding context
*/

//function buttonClicked(e){
//    console.log('Button was clicked!');}

let myButton = document.querySelector("#myButton")
// myButton.addEventListener('click', buttonClicked);

myButton.addEventListener('click', (e) => {
    console.log('Button was clicked!'); 
    console.log(this);
});

// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\

/*
    Local Storage
        - Read-only property of the window interface that allows
          you to access a Storage object for the Document's origin
*/

console.log(localStorage.getItem("user"));
localStorage.setItem("user", "Kyan!" + Math.random());

// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\

/*
    JSON
        - JavaScript Object Notation
        - A syntax for storing and exchanging data
        - Allows classes/code to be stored in local storage
*/

let stringKyan = JSON.stringify(Kyan);
console.log(stringKyan);

let objectKyan = JSON.parse(stringKyan);
console.log(objectKyan.name);

// -------------------------------------------------------------------------- \\    
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------- \\

