// Basic functions

function greet(){
    console.log("Hello Akhil!")
}
greet()


// function with parameters

function greeting(name){
    console.log("Hello " + name + "!")
}
greeting('Akhil')

function greetNameAndTime(name, greet){
    console.log("Hello " +  name + "good " + greet)
}
greetNameAndTime('Akhil ', 'afternoon!')


// Function with return values

function addition(p1, p2){
    return p1 + p2;
}
console.log(addition(5,5))

function add(a, b){
    return a + b;
}
const result = add(5, 3)
console.log(result)


// anonymous functions

/////


// Arrow functions

const sub = (c, d) => c- d;
console.log(sub(5,3))

const numbers = [1, 2, 3, 4]
const squares = numbers.map((n) => n * n);
console.log(squares)


// function expressions

const divide = function (a,b){
    return a/b;
}
console.log(divide(10,5))


// immediately invoked function expression

// (function () {
//     console.log("This Function runs immediately!");
// })();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,2);
console.log(appleJuice)

function mixedFruitJuice(apple, banana, guva, mango){
    const mixJuice = `Make juice with ${apple}-apple, ${banana}-banana, ${guva}-guva and ${mango}-mango`
    return mixJuice;
}

const mixedJuice = mixedFruitJuice(2,3,1,5)
console.log(mixedJuice)

const newJuice = mixedFruitJuice(2,2,2,2)
console.log(newJuice)
// document.getElementById('akhil').innerHTML = newJuice

function alcohol(brand, mix, mix2){
    const shot = `One peg of ${brand} mixed with ${mix} and ${mix2}`;
    return shot;
}
const final = alcohol("Magic Moments", "Sprite", "Fruits")
console.log(final)

function buyLaptop(brand, model, processor, ram, storage, graphics){
    const laptopSpecs = `I want a ${brand} ${model} laptop with ${processor} processor, ${ram} RAM, ${storage} and ${graphics} graphic card`;
    return laptopSpecs;
}
const laptop = buyLaptop("HP", "15s", "i5", "16 GB", "512 SSD", "intel iRIS" )
console.log(laptop)
// document.getElementById('akki').innerHTML=laptop

function displayLaptopSpecs() {
    const brand = document.getElementById("brand").value
    const model = document.getElementById("model").value
    const processor = document.getElementById("processor").value
    const ram = document.getElementById("ram").value
    const storage = document.getElementById("storage").value
    const graphics = document.getElementById("graphics").value

    const laptop = buyLaptop(brand, model, processor, ram, storage, graphics)

    document.getElementById('output').innerText = laptop;

}

function calAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calAge1(2001);
console.log(age1)

// Arrow Function

const calAge2 = birthYear => 2024 - birthYear;
const age2 = calAge2(2001);
console.log(age2)

const yearsUntilRet = (birthYear, name) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    if (age >= 65){
        return "Retired";
    } else {
        return `${name} you will get retired in ${retirement} years.`
    };
    // return retirement
}
console.log(yearsUntilRet(2001, "Akhil"))

function akkki() {
    console.log('Akhil')
}
akkki()

function aki() {
    return "Akki"
}
console.log(aki())

function fun3(firstName, surName) {
    return firstName + ' ' + surName
}
console.log(fun3("Akhil", "Matta"))

function fun4(firstName, surName) {
    return firstName + ' ' + surName;
}
const fullName = fun4('Vasanthi', "Kaligithi")
console.log(fullName)

const cars = ['BMW', 'Audi', 'Benz']
console.log(cars)

const us = ['Akhil', 'Vasanthi', 'Praveen']
console.log(us)

const akhilFriends = ['Sunny', 'Kiran', 'Praveen', 'Jay'];
console.log(akhilFriends);

const firstName = 'Akhil'
const akhilData = [firstName, 'Matta', calAge1(2001), akhilFriends]
console.log(akhilData)

akhilFriends.push('Ganesh');
akhilFriends.unshift('Siddu');
akhilFriends.pop();
akhilFriends.shift();
console.log(akhilFriends)

const details = {
    firstName: 'Akhil',
    lastName: 'Matta',
    age: calAge1(2001),
    job: 'Developer',
    friends: ["Sunny", "Kiran", "Praveen"],
    address: "Malikipuram"
}
console.log(details)

// loops

for(let rep = 1; rep <= 15; rep++){
    console.log(`Lifted ${rep} times`)
    // console.log('Liftd' + ' ' + rep + ' ' + 'times')
}

function geet(){
    console.log('Hello!')
}
geet()

function namee(){
    console.log('Akhil')
}

function full() {
    geet();
    namee();
    console.log('Welcome to the Party')
}
full();

function adding() {
    var a = Number(document.getElementById('aValue').value);
    var b = Number(document.getElementById('bValue').value);
    var addi = a + b
    document.getElementById('add').innerHTML = addi;
}

const obj = {
    name: 'Akhil',
    age: 23
}

const obj2 = {
    name: 'Akhil',
    age: 23
}
const obj3 = obj
console.log(obj === obj2)

console.log(obj === obj3)

let person = {
    name: 'Vasanthi',
    sayHello: function() {
        console.log('Hello '+ this.name + "!");
    }
}
person.sayHello()

function nm() {
    console.log('Hello')
}
nm()

nmm = (name) => {
    return name
}

let friendss = ['Akhil', 'Vasanthi', 'Deeksha', 'Praveen']
console.log(friendss)

friendss.pop() //removes last item
console.log(friendss)

friendss.shift() //Removes first item
console.log(friendss)

friendss.push('Udaya') //adds last
console.log(friendss)

friendss.unshift('Abha') //adds first
console.log(friendss)

delete friendss[0]
console.log(friendss)

let text = 'Akhil is a good boy and worst boy in the colony'
console.log(text)

const myArr = text.match('boy')
console.log(myArr)

let x = 5;

console.log(x !== 6)

function add() {
let c = Number(document.getElementById('CValue').value);
let d = Number(document.getElementById('DValue').value);
var addit = c + d;
console.log(addit)
}

let textt = 'Vasanthi kaligithi Vasanthi kaligithi Vasanthi kaligithi Vasanthi kaligithi Vasanthi kaligithi'
let length = textt.length;

console.log(textt)
console.log(length)

let char = textt.charAt(6);
console.log(char)


const personn = {
    fullNamee: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: 'Akhil',
    lastName: 'Matta'
}

const person2 = {
    firstName: 'Vasanthi',
    lastName: 'Kaligithi'
}

console.log(personn.fullNamee.call(person1))

