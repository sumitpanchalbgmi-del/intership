
// Q1 

// async function main() {
//     return "hello world "
    
// }
// console.log(main());


// Q2 

// async function getUser(){
//      return {
//         name:"ram",
//         id : 5552
// }
// }
// console.log(getUser())

// Q3 

// async function product(){
//     return [
//        { id:55,name:"laptop",price:50000},
//        {id:"A18",name:"mac",price:100000}
//     ];
// }
// console.log(product())


// // Q 4
// async function getCurrentdate(){
//       return new Date();
// }
// console.log(getCurrentdate())


// Q 5

// async function getRandomNumber(){
//     return Math.random()*100
// }
// console.log(getRandomNumber())


// Q 6


// async function getStudent() {
//     return {
//         name:"ankush",
//         rollno:544,
//         sec:"A"
//     }
    
// }
// console.log(getStudent())


// Q7 


// async function  getDetails() {
//     return {
//         name:"our company",
//         location:"panipat",
//         head_office:"delhi"
//     }
    
// }
// console.log(getDetails())



// Q8 

// async function getItem(){
//     return [
//         {
//             item:1,
//             name:"cock",
//             quantity:40
//         },
//         {
//             item:2,
//             name:"Pepsi",
//             quantity:20
//         }
//     ];
// }
// console.log(getItem())


// Q9 

// async function getAmount() {
//     return {
//         TOtal_amount:250000
//     }
    
// }
// console.log(getAmount())

// Q 11

// async function getUser() {
//     return {
//         name:"ankush",
//         rollno:53,
//     }
//     async function Use() {
//         const User=await  getUser();
        
//     }

    
// }
// console.log(getUser())


// Q 12

// async function getProduct() {
//     return {
//         id:"516321w",
//         name:"sahil",
//         rollno:51
//     }
   
    
// }
// async function Use(){
//     const Product=await getProduct();
//     console.log(Product)
// }
// console.log(getProduct())


// // Q 13 
// async function getOrder(){
//     return { order_id:65465,
//              payment:5454
//     }

// } 
// async function Order() {
//     const order=await getOrder();
//     console.log(Order)

    
// }
// console.log(getOrder())


// Q 14



// async function getpayment(){
//     return { Payment_id:65465,
//              payment:54540
//     }

// } 
// async function Payment() {
//     const payment=await getOrder();
//     console.log(Payment)

    
// }
// console.log(getpayment())

// Q 16


// async function printWithDelay() {
//   console.log("Start");
//   await new Promise(resolve => setTimeout(resolve, 2000));

//   console.log("End");
// }

// printWithDelay();


// Q 17




// async function printWithDelay() {
//   console.log(1);
//   await new Promise(resolve => setTimeout(resolve, 2000));

//   console.log("2");
//   await new Promise(resolve => setTimeout(resolve, 2000))
//    console.log("3");
// }

// printWithDelay();

// Q 18 


// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function greetUser(name) {
//   console.log(`Fetching greeting for ${name}...`);
//   await delay(1000); 
//   console.log(`Hello, ${name}! Welcome!`);
// }

// greetUser("Alice");
// greetUser("Bob");



// Q 20


// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function login(username, password) {
//   console.log(`Authenticating user: ${username}`);
  
//   await delay(1500);

//   if (username === "admin" && password == "1234") {
//     console.log(" Login successful!");
//   } else {
//     console.log(" Login failed: Invalid credentials.");
//   }
// }

// login("admin", "1234");      
// login("Sumit", "wrongpass"); 



// Q 21


