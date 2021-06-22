class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi, my name is ' + this.name);
    }
}

var person1 = new Person('Pera', 23);
var person2 = new Person('Mika', 26);
var person3 = new Person('Laza', 30);
console.log(person1);


person1.greet();
person2.greet();
person3.greet();

//////
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi, I study ' + this.major);
    }
}

class Student extends User {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}
var student1 = new Student('Sam', 25, 'chemistry');
var student2 = new Student('Anna', 21, 'biology');

console.log(student1);
student1.greet();
student2.greet();

////////
class Phone {
    constructor(provider) {
        this.provider = provider;
    }
    call(contact) {
        console.log('Calling ' + contact);
    }
}
var phone = new Phone('J8');
console.log(phone); //display a provider property only because call() is inherited

//////
class Phone {
    call(contact) {
        console.log('Calling ' + contact);
    }
}
var phone = new Phone();
phone.call('Mom');


/////
class Employee {
    constructor(company) {
        this.company = company;
    }
}
class Developer extends Employee {
    constructor(company, language) {
        super(company);
        this.language = language;
    }
}
var dev = new Developer('Mimo', 'JS');
console.log(dev);


//////
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Parent extends Person {
    constructor(name, age, kids) {
        super(name, age);
        this.kids = kids;
    }
}

var parent = new Parent('Marija', 37, 1);
console.log(parent);

///
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}
class Professor extends Teacher {
    constructor(name, subject) {
        super(name, subject);
    }
}
var professor = new Professor('Petar', 'history');
console.log(professor);

////
class Reviewer {
    read() {
        console.log('Viewing document');
    }
}
class Writer extends Reviewer {
    edit() {
        console.log('Editing document');
    }
}
var user1 = new Writer(); //can both read and edit
var user2 = new Reviewer(); //can only read
user2.read();

////
class Car {
    injectFuel() {
        console.log('Spraying fuel');
    }
    igniteFuel() {
        console.log('Boom!');
    }
}
var car = new Car();
car.injectFuel();
car.igniteFuel();



class Car {
    constructor() {
        this.on = false;
    }
    injectFuel() {
        console.log('Spraying fuel');
    }
    igniteFuel() {
        console.log('Boom!');
    }
    startUp() {
        this.on = true;
        while (this.on) {
            this.injectFuel();
            this.igniteFuel();
        }
    }
}
var car = new Car();


////
class Slideshow {
    constructor(slides) {
        this.slides = slides;
        this.current = 1;
    }
    viewNextSlide() {
        this.current++;
    }
    play() {
        while (this.current <= this.slides) {
            console.log('Slide ' + this.current);
            this.viewNextSlide();
        }
    }
}
var slideshow = new Slideshow(5);
slideshow.play();

////
class Car {
    alertOpenDoor() {
        console.log('Close 4 doors!');
    }
}
var coupe = new Car();
coupe.alertOpenDoor = function() {
    console.log('Close 2 doors!');
};
coupe.alertOpenDoor(); //polymorphism->to change howobjects behave, we ovwrrideobject methodswith the right behavior

////
class Car {
    lockDoors() {
        console.log('Locking 4 doors!'); //polymorphism is when objects have the same method call bur different behaviors
    }
}
class Coupe extends Car {
    lockDoors() {
        console.log('Locking 2 doors!');
    }
}
var car = new Car();
var coupe = new Coupe();
coupe.lockDoors();
car.lockDoors();