var MyPeople = /** @class */ (function () {
    function MyPeople(people) {
        this.people = people;
    }
    MyPeople.prototype.getPeopleOfAge = function (age) {
        // filter thru array of people
        // look at age of each person in array and compare to desired age
        // only return the people with the desired age
        return this.people.filter(function (person) {
            return person.age === age;
        });
    };
    MyPeople.prototype.sayHiToMyPerson = function (index) {
        var person = this.getPerson(index);
        return this.sayHi(person);
    };
    MyPeople.prototype.sayHi = function (person) {
        return "Hi, " + person.nickName + "!!! You are " + person.age + " years old.";
    };
    MyPeople.prototype.getPerson = function (index) {
        return this.people[index];
    };
    return MyPeople;
}());
var people = [
    { age: 22, nickName: 'Tommy' },
    { age: 14, nickName: 'Jane the elder' },
    { age: 14, nickName: 'Chris' },
    { age: 0, nickName: 'Stewie' }, // index 1
];
/** all these sayHi functions do the same thing */
// Example of named function
function sayHi(person) {
    return "Hi, " + person.nickName + "!!! You are " + person.age + " years old.";
}
// Example of function expression
var sayHi2 = function (person) {
    return "Hi, " + person.nickName + "!!! You are " + person.age + " years old.";
};
// Example of arrow function
var sayHi3 = function (person) {
    return "Hi, " + person.nickName + "!!! You are " + person.age + " years old.";
};
for (var index = 0; index < people.length; index++) {
    console.log('Index ' + index + ', message: ' + sayHi(people[index]));
}
people.forEach(function (person, index) {
    // console.log('Person at index ' + index);
    // console.log(sayHi(person));
});
var myPeopleToday = new MyPeople(people);
console.log(myPeopleToday.sayHiToMyPerson(0));
console.log(myPeopleToday.getPerson(1));
console.log(myPeopleToday.getPeopleOfAge(14));
