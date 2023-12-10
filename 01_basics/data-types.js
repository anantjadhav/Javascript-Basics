"use strict" // treat all JS code as newer version

//PRIMITIVE DATA TYPES

let name = 'Anant';

let id = 1;

let cars = ['bmw', 'audi'];

let mystatus;

let myWealth = null;

let isLoggedin = false;

let bigNumber = Symbol(123);

// NON PRIMITIVE DATA TYPE
let user = {
    email: 'test.com',
    password: 'test123'
}

console.log(name, id, cars, mystatus, myWealth, isLoggedin, bigNumber, user);
console.table([typeof name, typeof id, typeof cars, typeof mystatus, typeof myWealth, typeof isLoggedin, typeof bigNumber, typeof user])