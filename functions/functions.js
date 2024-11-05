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
