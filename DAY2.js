// Q1  20

// Q2   REfrenceError

// Q3

// function other(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const result=other();
// result();
// result();
// result();
// result();



// Q4 


// let company="microsoft";
//   function department(){
//       let dep="Engineering";
//       function team(){
//           let teamName="Front-end";
//           function employee(){
//               let emp="Ram";
//               console.log(company);
//               console.log(dep);
//               console.log(teamName);
//               console.log(emp);
//           }
//           employee();
//       }
//       team();
//   }
//   department();

//Q5      ERROR

// Q6

//  const gp="grandparent variable";
// function parent(){
//     const p="parent variable";
//         function child(){
//             const c="child variable";
//             console.log(gp);
//             console.log(p);
//             console.log(c);
//         }
//         child();
//     }
//     parent();



// Q7  Mohan

// Q8  


// let company="microsoft";
//   function department(){
//       let dep="Engineering";
//       function team(){
//           let teamName="Front-end";
//           function employee(){
//               let emp="Ram";
//               console.log(company);
//               console.log(dep);
//               console.log(teamName);
//               console.log(emp);
//           }
//           employee();
//       }
//       team();
//   }
//   department();

// Q9


// const c="child"
//     function parent(){
//         let p="parent"
//         console.log(p);
//     }
// parent();



// Q 10  

// function createCounter() {
//     let count = 0; 

//     return {
//         increment() {
//             count++;
//             console.log(count);
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// counter.increment(); 
// counter.increment(); 

// console.log(counter.getCount()); 
// console.log(counter.count); 


// Q11

// function other(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const result=other();
// result();
// result();
// result();
// result();

// Q12

// function other(){
//     let count=11;
//     function inner(){
//         count--;
//         console.log(count);
//     }
//     return inner;
// }
// const result=other();
// result();
// result();
// result();



// Q13 


//  let accountno="123567";
//   function department(){
//       let deposit=10000;
//       function withdraw(){
//           let withdrawal=5000;
//           function checkBalance(){
//               let balance=deposit-withdrawal;
//               console.log(accountno);
//               console.log(deposit);
//               console.log(withdrawal);
//               console.log(balance);
//           }
//           checkBalance();
//       }
//       withdraw();
//   }
//   department();



// Q14





// function createUser(username) {
//     return function() {
//         console.log("Username: " + username);
//     };
// }

// const user1 = createUser("Alice");
// user1(); 


//Q.15 

// function loginTracker(correct) {
//   let attempts = 0;

//   return (password) => {
//     if (attempts >= 3) return "Account Locked";
//     if (password === correct) return "Login Successful";

//     attempts++;
//     return attempts >= 3 ? "Account Locked" : "Login Failed";
//   };
// }

// const login = loginTracker("1234");
// Q.16


// function createSecret(password) {
//   return function getPassword() {
//     return password;
//   };
// }
// const getPassword = createSecret("mySecret123");

// console.log(getPassword()); 
// // Q.18
// function votingMachine() {
//   let votedUsers = [];

//   return function vote(user) {
//     if (votedUsers.includes(user)) {
//       return "Already Voted";
//     }

//     votedUsers.push(user);
//     return "Vote Accepted";
//   };
// }

// const vote = votingMachine();

// console.log(vote("Ali")); 
// console.log(vote("Ali"));


// Q.19




// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());


// Q.20

// Q 21

//  (function()
//  {console.log(" welcome to javascript")})();



// Q 22


//  function rectangle(a,b,operation){
//                   return operation(a,b);
//               }      
//               function multiply(x,y){
//                   return x*y;
//               }
//               console.log(rectangle(5,4,multiply));


// Q 23



// const add = () => {
//     return 5 + 7;
// };

// console.log(add());


// Q 24 


// Q25 


// Q26 


//  function calculate(a,b,operation){
//                   return operation(a,b);
//               }      
//               function add(x,y){
//                   return x+y;
//               }
//               console.log(calculate(70,90,add));
//               function subtract(x,y){
//                   return x-y;
//               }
//               console.log(calculate(70,90,subtract));
//               function multiply(x,y){
//                   return x*y;
//               }
//               console.log(calculate(70,90,multiply));
//               function divide(x,y){
//                   return x/y;
//               }
//               console.log(calculate(70,90,divide));



// Q27

Create your own custom HOF named: 
repeat() 
Example 
repeat(5, sayHello) 


