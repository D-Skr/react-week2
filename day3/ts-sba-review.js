var MyPeople = /** @class */ (function () {
    function MyPeople(people) {
        this.people = [
            { age: 22, nickName: 'Tommy' },
            { age: 33, nickName: 'Billy' }, //index 1
        ];
        this.people = people;
    }
    MyPeople.prototype.getPeopleOfAge = function (age) {
        // filter thru arrray of people
        // look at age of each person in array and compare to desired age
        // only return the people with the desired age
        this.people.filter(function (person) {
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
function sayHi(person) {
    return "Hi, " + person.nickName + "!!! You are " + person.age + " years old.";
}
//people.forEach(person => sayHi(person));
for (var index = 0; index < people.lenght; index++) {
    console.log('Index ' + index + ', message:' + sayHi(people[index]));
}
people.forEach(function (person, index) {
    console.log('Person at index' + index);
});
