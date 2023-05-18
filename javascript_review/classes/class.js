class Human {
    constructor(){
        this.gender = 'female';
        this.age = 21;
    } 
}

class Person extends Human{
    constructor(){
        super();
        this.name = 'Giovanna';
        this.lastname = 'Carvalho';
    }
}


const person = new Person();

console.log(person.name, person.age);