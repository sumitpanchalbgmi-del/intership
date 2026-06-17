// Q 1 

// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve("Hello World"), 2000);
// });
// p1.then(console.log);

// Q 2 



// const q2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Server Down"), 3000);
// });
// q2.catch(console.error);

// // Q3


// const q3 = new Promise((resolve, reject) => {
//   Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
// });


// Q4 

// const checkAge = (age) => new Promise((resolve, reject) => {
//   age >= 18 ? resolve("Valid Age") : reject("Underage");
// });


 // Q5 

//  const checkPassword = (pwd) => new Promise((resolve, reject) => {
//   pwd.length >= 8 ? resolve("Valid Password") : reject("Password too short");
// });


// Q6  

// const validateEmail = (email) => new Promise((resolve, reject) => {
//   email.includes("@") ? resolve("Valid Email") : reject("Invalid Email");
// });


// Q7 

// const withdraw = (balance, amount) => new Promise((resolve, reject) => {
//   balance >= amount ? resolve(`Withdrawn: ${amount}`) : reject("Insufficient Funds");
// });


// Q8 

// const atmTransaction = (pin) => new Promise((resolve, reject) => {
//   pin === 1234 ? resolve("Transaction Allowed") : reject("Incorrect PIN");
// });


// Q9

// const getUser = new Promise((resolve) => {
//   resolve({ id: 1,
//      name: "Alice",
//       role: "Admin" });
// });


// Q 10

// const customError = new Promise((resolve, reject) => {
//   reject(new Error("Database Connection Lost"));
// });

// // Q 11
// Promise.resolve(10)
//   .then(num => num * 2)
//   .then(num => num * 2)
//   .then(num => num * 2)
//   .then(console.log);


// // Q12 
// Promise.resolve("Ram")
//   .then(name => name.toUpperCase())
//   .then(name => name + " MOHAN")
//   .then(name => name + " DIXIT")
//   .then(console.log);


// // Q13

// Promise.resolve(1000)
//   .then(price => price + (price * 0.18)) // Add 18% GST
//   .then(price => price - 100) // 100 discount
//   .then(final => console.log(`Final: ${final}`));



// // Q14
// const login = () => Promise.resolve("Token");
// const getUser = (token) => Promise.resolve({ id: 1 });
// const getOrders = (user) => Promise.resolve(["Order1", "Order2"]);
// const getPayment = (orders) => Promise.resolve("Paid");

// login().then(getUser).then(getOrders).then(getPayment).then(console.log);




// // Q15
// Promise.resolve("Select Movie")
//   .then(() => "Select Seats")
//   .then(() => "Make Payment")
//   .then(() => "Ticket Confirmed");

// Q 16

// Promise.resolve("Select Restaurant")
//   .then(() => "Add to Cart")
//   .then(() => "Checkout")
//   .then(() => "Order Placed");


// Q 17


// Promise.resolve("Submit Form")
//   .then(() => "Clear Entrance")
//   .then(() => "Document Verification")
// //   .then(() => "Admission Granted");


// // Q 18
// Promise.resolve("Search Trains")
//   .then(() => "Select Class")
//   .then(() => "Enter Passenger Details")
//   .then(() => "Payment & PNR Generated");


// // Q 19
// const delay = (val) => new Promise(res => setTimeout(() => { console.log(val); res(val); }, 1000));

// Promise.resolve("Start")
//   .then(() => delay("Step 1"))
//   .then(() => delay("Step 2"))
//   .then(() => delay("Step 3"));



// Q20

// Promise.resolve(0)
//   .then(n => n+1).then(n => n+1).then(n => n+1).then(n => n+1).then(n => n+1)
//   .then(n => n+1).then(n => n+1).then(n => n+1).then(n => n+1).then(console.log);


// Q 21

// Promise.resolve()
//   .then(() => { throw new Error("First then error"); })
//   .catch(err => console.log("Caught:", err.message));



// Q 22 

// Promise.resolve()
//   .then(() => console.log("Step 1"))
//   .then(() => console.log("Step 2"))
//   .then(() => { throw new Error("Break here"); })
//   .then(() => console.log("Will be skipped"))
//   .catch(console.error);


// // Q 23
// Promise.resolve()
//   .then(() => "Step 1")
//   .then(() => "Step 2")
//   .then(() => { throw new Error("Crash"); })
//   .catch(err => console.log("Recovered from", err.message));

// Q25
// Promise.resolve()
//   .then(() => { throw new Error("Error 1"); })
//   .catch(err => { console.log("Catch 1 caught:", err.message); return "Safe"; })
//   .then(() => { throw new Error("Error 2"); })
//   .catch(err => { console.log("Catch 2 caught:", err.message); });

// // Q26
// const greet = () => new Promise(resolve => resolve("Hi"));


// // Q 27
// const add = (a, b) => new Promise(resolve => resolve(a + b));


// Q28

// const login = (user, pass) => new Promise((resolve, reject) => {
//   user === "admin" && pass === "123" ? resolve("Success") : reject("Fail");
// });

// Q 29

// const download = (file) => new Promise((resolve) => {
//   setTimeout(() => resolve(`${file} downloaded`), 1000);
// });


// // Q 30

// const getWeather = (city) => new Promise((resolve) => {
//   setTimeout(() => resolve(`Weather for ${city} is 25°C`), 500);
// });

// INterview output

// Q1
// B and A

// Q2

// A,c

// Q3

// 25

// Q4
 //error

 // Q5

 // BOOM

 // Q6
 // 100
 
 // Q7
 // A and B

 // Q8
 // 1,2,3
 // Q9
 // failed

 // Q 10 
 //Start, End, A, 