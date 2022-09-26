function Person(name, age){
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {
    eat()
    {
        console.log(`Person is Eating`);
    },
    sleep()
    {
        console.log(`Person is Sleeping`);
    },
    study()
    {
        console.log('Person Studying');
    }
}

let anik = Person("Anik", 14);
let osim = Person("Oshim", 19);

anik.eat();
osim.sleep();
anik.study();

console.log(anik.name);
console.log(osim.age);
