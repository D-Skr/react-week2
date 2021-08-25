
type Person = {age: number, nickName: string}

type sayHiFunction = (a: Person) => string;

interface PeopleHandler {
    //sayHiFunction:
    sayHi: sayHiFunction;
    getPerson:(a: number) => Person;  // alaias for type
}

class MyPeople implements PeopleHandler {
    private people;
    constructor(people: Array<Person>) {
        this.people = people;
    }

    getPeopleOfAge(age: number): Array<Person> {
        // filter thru arrray of people
        // look at age of each person in array and compare to desired age
        // only return the people with the desired age
        this.people.filter(person => {
            return person.age === age;
        })
    }

    sayHiToMyPerson( index: number): string {
        const person = this.getPerson(index);
        return this.sayHi(person);
    }

    sayHi(person: {age: number, nickName: string}) {
        return `Hi, ${person.nickName}!!! You are ${person.age} years old.`
}

getPerson(index: number) {
    return this.people[index];
}

const people: Array<Person> = [
    {age:22, nickName:'Tommy'}, // index 0
    {age:33, nickName:'Billy'}, //index 1
];

function sayHi(person: {age: number, nickName: string}) {
    return `Hi, ${person.nickName}!!! You are ${person.age} years old.`
}

//people.forEach(person => sayHi(person));

for(let index =0; index < people.lenght; index++) {
    console.log('Index ' + index + ', message:'  + sayHi(people[index]));
}

people.forEach((person, index) => {
    console.log('Person at index' +index);

})