// Q1 
 // 
  
// function greetUser(name, callback) {
//     console.log("Hello " + name);
//     callback(name);
// }
// function welcomeMessage(name) {
//     console.log("Welcome " + name);
// }

// greetUser("Ram", welcomeMessage);


// Q2

// function calculate(a, b, callback) {
   
//     return callback(a, b);
// }

// function add(x, y) {
//     return x + y;
// }
// function multiply(x, y) {
//     return x * y;
// }
// function divide(x, y) {
//     if (y === 0) {
//         return "Cannot divide by zero";
//     }
//     return x / y;
// }

// let num1 = 10;
// let num2 = 5;

// console.log("Addition: " + calculate(num1, num2, add));           
// console.log("Multiplication: " + calculate(num1, num2, multiply)); 
// console.log("Division: " + calculate(num1, num2, divide));

// Q.3 

// // Mathematical operations (Callbacks)
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

// function calculator(a, b, operation) {
//     return operation(a, b);
// }


// console.log(calculator(20, 10, add));      
// console.log(calculator(20, 10, multiply)); 
// console.log(calculator(20, 10, divide));   

// Q.4

//  function processStudent(student, callback) {
//     callback(student);
// }

// const studentObj = { id: 101, name: "Rahul", grade: "A" };
// processStudent(studentObj, (s) => {
//     console.log(`Student Details:\nID: ${s.id}\nName: ${s.name}\nGrade: ${s.grade}`);
// });

//Q.5

// function downloadFile(callback) {
//     console.log("Starting download...");
//     setTimeout(() => {
//         callback("movie.mp4");
//     }, 2000);
// }

// downloadFile((file) => {
//     console.log(`Download complete! File saved as: ${file}`);
// });

// Q.6 

// function registerUser(username, callback) {
//     console.log(`Registering user: ${username}...`);
//     setTimeout(() => {
//         console.log("User saved to database.");
//         callback(username);
//     }, 1000);
// }


// registerUser("alice99", (user) => {
//     console.log(`Sending welcome email to ${user}@example.com...`);
// });

// Q.8 

// function fetchUser(callback) {
//     console.log("Fetching user data...");
//     setTimeout(() => {
//         const dummyUser = { id: 1, name: "John Doe", role: "Admin" };
//         callback(dummyUser);
//     }, 3000);
// }


// fetchUser((user) => {
//     console.log("User fetched successfully:", user);
// });
// Q.11 

//  A C B

// Q.12

//  2 1

// Q.13 


// START END TIMEOUT
// Q.14

// function countdown() {
//     let count = 5;
//     for (let i = 0; i <= count; i++) {
//         setTimeout(() => {
//             if (count - i === 0) {
//                 console.log("Boom");
//             } else {
//                 console.log(count - i);
//             }
//         }, i * 1000);
//     }
// }
// countdown();
// Q.16 

// function delayedGreeting(name) {
//     console.log("Processing input...");
//     setTimeout(() => {
//         console.log(`Hello, ${name}! Welcome back.`);
//     }, 2000);
// }
// delayedGreeting("Sarah");

// Q.17function triggerNotification(message, delayMs) {
//     setTimeout(() => {
//         console.log(` NOTIFICATION: ${message}`);
//     }, delayMs);
// }
// triggerNotification("Your subscription expires tomorrow.", 2500);
// Q.20

// function wait(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
// }


// wait(1.5, () => {
//     console.log("after 1.5 seconds.");
// });

// Q.21
// function login(user, cb) {
//     setTimeout(() => { console.log("Logged In"); cb(user); }, 500);
// }
// function getUserData(user, cb) {
//     setTimeout(() => { console.log(`Got details for ${user}`); cb({ uid: 42 }); }, 500);
// }
// function getOrders(uid, cb) {
//     setTimeout(() => { console.log(`Fetched orders for UUID: ${uid}`); cb(["Order_1", "Order_2"]); }, 500);
// }
// function showOrders(orders, cb) {
//     setTimeout(() => { console.log("Rendering orders:", orders); cb(true); }, 500);
// }


// login("Nitin", (user) => {
//     getUserData(user, (profile) => {
//         getOrders(profile.uid, (ordersList) => {
//             showOrders(ordersList, (success) => {
//                 if(success) console.log("Workflow sequence completely finished.");
//             });
//         });
//     });
// });

// // Q.22 
// 
// setTimeout(() => {
//     console.log(L1 Complete");
//     setTimeout(() => {
//         console.log("L2 Complete");
//         setTimeout(() => {
//             console.log("L3 Complete");
//             setTimeout(() => {
//                 console.log("L4 Complete");
//                 setTimeout(() => {
//                     console.log("L5 Complete: Pyramid peak reached");
//                 }, 400);
//             }, 400);
//         }, 400);
//     }, 400);
// }, 400);

// Q.27 
// 
// const randDelay = () => Math.floor(Math.random() * 1500) + 500;

// setTimeout(() => {
//     console.log("Step 1 processed randomly");
//     setTimeout(() => {
//         console.log("Step 2 processed randomly");
//         setTimeout(() => {
//             console.log("Step 3 processed randomly");
//         }, randDelay());
//     }, randDelay());
// }, randDelay());

// Q.31

//  function startLiveClock() {
//     const intervalId = setInterval(() => {
//         const time = new Date().toLocaleTimeString();
//         console.log(`Live Time: ${time}`);
//     }, 1000);
//     setTimeout(() => clearInterval(intervalId), 5100);
// }
// startLiveClock();
// Q.33


// function startTrafficLights() {
//     const states = [
//         { color: "🔴 RED", duration: 3000 },
//         { color: "🟡 YELLOW", duration: 1000 },
//         { color: "🟢 GREEN", duration: 3000 }
//     ];
//     let currentIndex = 0;

//     function transition() {
//         const currentLight = states[currentIndex];
//         console.log(`Light Status: ${currentLight.color}`);
        
//         currentIndex = (currentIndex + 1) % states.length;
//         setTimeout(transition, currentLight.duration);
//     }
//     transition();
// }
// startTrafficLights();
// Q.34
// function runAutoSlider() {
//     const images = ["img1.png", "img2.png", "img3.png", "img4.png"];
//     let index = 0;

//     const sliderInterval = setInterval(() => {
//         index = (index + 1) % images.length;
//         console.log(`Active Slide showing: [ ${images[index]} ]`);
//     }, 3000);

//     setTimeout(() => clearInterval(sliderInterval), 9100); // Guard rails
// }
// runAutoSlider();
// Q.36
//  A D C B
// Q.37
//  TWO ONE
// Q.38
//  START END TIMEOUT
