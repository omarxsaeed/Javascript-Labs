/*********************************************** TASK 1 ***********************************************/

function Person(name, age, socialStatus) {
    this.name = name;
    this.age = age;
    this.socialStatus = socialStatus;

    // JS overloading using default params.
    this.calcBirthYear = function(age = 18, year = 2022) {
        console.log(year - age);
    }

    if(this.constructor==Person)
    {
        throw "error this is abstract class"
    }
}

Person.prototype.sayHi = function(){
    console.log("Hi, I'm", this.name);
}

function Employee(name, age, socialStatus, jobTitle) {
    Employee.count=++Employee.count||1; // static member 
    Person.apply(this, [name, age, socialStatus]);
    this.jobTitle = jobTitle;
    var salary;

    this.showSalary = function(){
        return salary;
    }

    this.setSalary = function(empSalary) {
        if(empSalary > 0)
            salary = empSalary;
        else
            alert("Wrong input");
    }

    this.increaseSalary = function(raise) {
        salary += raise;
    }
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.displayHTRules = function () {
    console.log("This is company rules");
}

Employee.prototype.sayHi = function(){
    // alert("Hi, I'm ", this.name, ". I'm a ", this.jobTitle);
    console.log("Hi, I'm " + this.name + ". I'm a" + this.jobTitle);
}

function Student(name, age, socialStatus, courses) {
    Person.apply(this, [name, age, socialStatus]);
    this.courses = courses;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Object.seal(Student);

function Course(name, code){
    this.name = name;
    this.code = code;
}

var dbCourse = new Course("Databases", "DB101");
var algoCourse = new Course("Algorithms", "ALGO101");
var studentCourses = [dbCourse, algoCourse];
// p1 = new Person("hager", 22, "single");
stu1 = new Student("omar", 23, "single", studentCourses);
em2 = new Employee("anas", 28, "married", "front-end");
console.log(stu1);
Employee.displayHTRules();

var ScientificDepartment = {
    name: "CS",
    location: "Building A",
    Address: {
        City: "Port Said",
        Street: "College St.",
        zipCode: "42511",
    },
    display: function(){
        console.log(ScientificDepartment);  
    }
}

/*
Written questions answers.
__________________________
Member Method: is a function defined for a class and accessible by the objects instantiated from that class
Static Method: is a function defined for a class and only accessible by the class itself, can't be used by objects of that class
__________________________________________________________________________________________________________________________________
public member: these variables are accessible to all users using the program and the other pieces of code itself,
which isn't always the best idea for security and performance reasons. 

The getter and setter methods which are used on private members and gives us control of how they are initialized
also they are used for hiding the property’s internal representation by using an alternative representation to expose a property
therefore achieving abstraction.
__________________________________________________________________________________________________________________________________

Yes we can implement overloading in JS but not in the way other languages implement it or how we are used to it.
We can use default params to achieve the overloading
__________________________________________________________________________________________________________________________________

Yes we can handle abstract classes by avoiding the call to the class function constructor
__________________________________________________________________________________________________________________________________

Javascript uses the The Object.seal() method that seals an object
__________________________________________________________________________________________________________________________________

An interface is a programming structure/syntax that allows the computer to enforce certain properties on an object (class).
For a given "box", it declares the "inputs" and "outputs" of that box.

An interface is an empty shell. There are only the signatures of the methods, which implies that the methods do not have a body. 
The interface can't do anything. It's just a pattern.

Abstract classes, unlike interfaces, are classes. They are more expensive to use, because there is a look-up to do when you inherit from them.

Abstract classes look a lot like interfaces, but they have something more: You can define a behavior for them. 
It's more about a person saying, "these classes should look like that, and they have that in common, so fill in the blanks!".

Yes abstract classes are allowed in javascript but we will need to modify the constructor a bit to handle the same class instantiation.

There’s no notion of “this class must have these functions” (that is, no interfaces per se).
Instead, JavaScript uses what’s called duck typing. (If it walks like a duck, and quacks like a duck, as far as JS cares, it’s a duck.) 


__________________________________________________________________________________________________________________________________

The need for object literal is creating fast objects on the go that allows for simply good code organization 
that doesn't pollute the global namespace
tl;dr => Object literals are useful because they allow you to create clean name-spaced code that is easy to pass around and consume

An object literal is flat. You create it, you add properties and methods to it, and all of those properties and methods are public

classes are structured blueprints that we instantiate objects from later.

*/