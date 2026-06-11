// Q 1


// const student={
//     name:"ankush",
//     age:15,
//     city:"bhivani"
// }
// console.log(student["name"]);
// console.log(student["age"]);
// console.log(student["city"]);






// Q 2




// const student={
//     name:"ankush",
//     age:15,
//     city:"bhivani"
// }
// console.log(student["name"]);

// Q 3 

// function student(name, ) {
//     this.name = name;

// }

// student.prototype.greet = function() {
//     console.log("Hello i am " + this.name);
// };


// const s1 = new student("Ram");
// s1.greet();

// Q 4


// class Student {
//     constructor( name,age) {
//         this.name = name;
//         this.age = age;
//     }

    
//     isAdult() {
//         if (this.age >= 18) {
//             return true;
//         } else {
//             return false;
//         }
        
      
//     }
// }

// const student1 = new Student("Neha", 20);
// console.log(student1.isAdult());

// Q.5
//  const student = {
//     name: "Ram",
//     age: 23,
//     city: "panipat"
// };
// console.log(Object.keys(student));


//  Q.6
//  const student={
//     name:"Ram",
//     age:23,
//     city:"panipat"

// }
//  console.log(student.keys(student));


// Q.7


// Q.8





// const student={
//     name:"ankush",
//     age:15,
//     city:"bhivani",
//     studentcourse:"mern stack",
//     sayyourSkills(){
//         console.log(this.studentcourse);
//     }
// }
// student.sayyourSkills();


// Q.9






// const user = { name: "Ankush", email: "ankush@example.com", age: 25 };


// delete user.age;

// console.log(user);


// Q.10


// Q.11


// const user = {
//   name: "sachin",
  

//   showName() {
//     console.log(this.name);
//   }
// };

// user.showName(); 

// Q.12



// const user = {
//   name: "Ram",
  
  
//   showUpperCaseName() {
//     console.log(this.name.toUpperCase());
//   }
// };

// user.showUpperCaseName();



// Q.13




// Q 14

// RAM

// Q.15

// Error


// Q.16


//function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Q.17 
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Ramu",25);
// const s3=new Student("Shyam",25);
// console.log(s1);

// Q.18
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }

// Q.19   Ram
// Q.20 function Student(name,age){
//     this.name=name;
//     this.age=age
// }
// Student.prototype.greet= function(){
//     console.log("hello");




// Q.21



// function student(name, ) {
//     this.name = name;

// }

// student.prototype.greet = function() {
//     console.log("Hello " + this.name);
// };


// const s1 = new student("Ram");
// s1.greet();



// Q.22


// function student(){
    
// }
// const s1=new student();
// console.log(s1.__proto__===student.prototpe)


// Q.23 


// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }


// Student.prototype.isAdult = function() {
//     return this.age >= 18;
// };


// const student1 = new Student("Aman", 20);
// const student2 = new Student("Rohit", 16);

// console.log(student1.isAdult()); 
// console.log(student2.isAdult());

// Q.24

// Hi


 // Q 29

 
 
    // class Animal{
    //     eat(){
    //         console.log("eating")
    //     }
    // }
 
    // class Dog extends Animal{
    // }
    //     const d =new Dog();
    //     d.eat();


0
// class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
    
// }
// const d=new Dog();
// d.eat();
// Q.31 class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();

// Q.32 Eating

// Q.33
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// console.log(s1);

// Q.36
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Ramu",25);
// const s3=new Student("Shyam",25);
// console.log(s1);

// Q.37 and 
// 
// Q.38 Same as given above
// Q.39
// class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();
// Q.40
// class Dog {
//   eat() {
//     console.log("Eating...");
//   }
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }

// const d = new Dog();
// d.eat();
// d.bark();