//call
const person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
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

person.fullName.call(person2)
console.log(person1)