// Understanding "this" in JavaScript

// 1. When inside a standalone function, "this" refers to the global window (browser) or module (node) context

function foo() {
    console.log(this);
}

foo();

// 2. When inside an object OR AN OBJECT'S METHOD, "this" refers to the object itself, and allows you access
// to the object's properties.

var jim = {
    firstName: "Jim",
    lastName: "Smith",
    age: 65,
    logName: function () {
        console.log("My name is " + this.firstName + " " + this.lastName);
    }
}

jim.logName();

// 3. When inside a Constructor function, refers to the properties of any object that gets created by
// that constructor.

var Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.introduceSelf = function () {
        console.log("I'm " + this.firstName + " " + this.lastName + " and I'm " + this.age + " years old");
    }
}

var jill = new Person("Jill", "Jameson", 19);
jill.introduceSelf();
