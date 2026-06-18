
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


// // Q21: 
// async function throwError() {
//   throw new Error("This is a manual error!");
// }
// async function handleQ21() {
//   try {
//     await throwError();
//   } catch (err) {
//     console.error("Caught error:", err.message);
//   }
// }

// // Q22 

// async function loginValidation(user) {
//   if (!user) throw new Error("Invalid login: User not found.");
//   return "Valid Login";
// }

// // Q23: 
// async function bankWithdrawal(balance, withdrawAmount) {
//   if (withdrawAmount > balance)
//      throw new Error("Insufficient balance");
//   return balance - withdrawAmount;
// }

// // Q24: 
// async function paymentGatewaySim(cardDetailsValid) {
//   if (!cardDetailsValid)
//      throw new Error("Payment declined by gateway.");
//   return "Payment captured successfully.";
// }

// // Q25: 
// async function registerValidator(username) {
//   if (username.length < 3) 
//     throw new Error("Username too short.");
//   return "Registration valid.";
// }

// // Q26: 
// async function emailValidator(email) {
//   if (!email.includes("@")) 
//     throw new Error("Invalid email address.");
//   return "Email valid.";
// }

// // Q27: 
// async function passwordValidator(password) {
//   if (password.length < 8) 
//     throw new Error("Password must be at least 8 characters.");
//   return "Password valid.";
// }

// // Q28: .
// async function atmSimulation(pinCode, isMachineEmpty) {
//   if (pinCode !== "1234")
//      throw new Error("Incorrect PIN.");
//   if (isMachineEmpty)
//      throw new Error("ATM Out of Cash.");
//   return "Dispensing cash.";
// }

// // Q29: 
// async function productPurchase(productId, stockLeft) {
//   if (stockLeft === 0) 
//     throw new Error("Product is out of stock.");
//   return "Product purchased successfully.";
// }

// // Q30: 
// async function cancelOrder(orderStatus) {
//   if (orderStatus === "Out for Delivery") 
//     throw new Error("Too late to cancel.");
//   return "Order cancelled.";
// }


// // Q31: 

// async function commerceSequentialFlow() {
//   const auth = await mockLogin();
//   const user = await mockGetUser(auth.token);
//   const orders = await mockGetOrders(user.id);
//   const paymentStatus = await mockPayment(orders[0]);
//   return paymentStatus;
// }

// // Q32:
// async function movieBookingFlow() {
//   const movie = await Promise.resolve("Jawan");
//   const showtime = await Promise.resolve("8:00 PM");
//   const seats = await Promise.resolve(["A1", "A2"]);
//   const payment = await Promise.resolve("Paid ₹500");
//   return { movie, showtime, seats, payment };
// }

// // Q33:
// async function foodDeliveryFlow() {
//   const restaurant = await Promise.resolve("Pizza Hut");
//   const order = await Promise.resolve("Farmhouse Pizza");
//   const deliveryBoy = await Promise.resolve("Assigned Rider");
//   const status = await Promise.resolve("Delivered");
//   return status;
// }

// // Q34: 

// async function trainTicketFlow() {
//   const trainSearch = await Promise.resolve("Rajdhani Express");
//   const availability = await Promise.resolve("Available");
//   const passengerDetails = await Promise.resolve("Sumit, Age 20");
//   const ticket = await Promise.resolve("Ticket Confirmed");
//   return ticket;
// }

// // Q35: 

// async function collegeAdmissionFlow() {
//   const appSubmitted = await Promise.resolve("Application Recieved");
//   const documentsVerified = await Promise.resolve("Documents OK");
//   const feesPaid = await Promise.resolve("Fees Processed");
//   const enrollmentNo = await Promise.resolve("ENR2026");
//   return enrollmentNo;
// }



// // Q36: 
// async function fetchData() {
//   const fetchUsers = async () => ["User1", "User2"];
//   const fetchProducts = async () => ["Laptop", "Mouse"];
//   const fetchOrders = async () => ["Ord1", "Ord2"];

//   const [users, products, orders] = await Promise.all([
//     fetchUsers(),
//     fetchProducts(),
//     fetchOrders()
//   ]);
//   return { users, products, orders };
// }

// // Q37:

// async function execute5APIs() {
//   const apiCall = (id, ms) => new Promise(res => setTimeout(() => res(`Data ${id}`), ms));
  
//   const results = await Promise.all([
//     apiCall(1, 1000), apiCall(2, 500), apiCall(3, 1500), apiCall(4, 800), apiCall(5, 1200)
//   ]);
//   return results;
// }

// // Q38: 

// async function loadDashboard() {
//   const [user, orders, products, notifications] = await Promise.all([
//     Promise.resolve({ name: "Sumit" }),
//     Promise.resolve([]),
//     Promise.resolve(["Item 1"]),
//     Promise.resolve(["1 New Message"])
//   ]);
//   return { user, orders, products, notifications };
// }

// // Q39:

// async function loadGallery(imageUrls) {
//   const downloadImage = async (url) => `Downloaded: ${url}`;
//   const downloadedImages = await Promise.all(imageUrls.map(url => downloadImage(url)));
//   return downloadedImages;
// }

// // Q40: 


// async function downloadFiles(files) {
//   const download = async (file) => `File ${file} saved`;
//   const results = await Promise.all(files.map(f => download(f)));
//   return results;
// }



// // Q41: 

// async function mixPromisesSettled() {
//   const p1 = Promise.resolve("Success 1");
//   const p2 = Promise.resolve("Success 2");
//   const p3 = Promise.resolve("Success 3");
//   const p4 = Promise.reject("Fail 1");
//   const p5 = Promise.reject("Fail 2");

//   const results = await Promise.allSettled([p1, p2, p3, p4, p5]);
//   console.log(results);
// }

// // Q42:

// async function adminDashboardSettled() {
//   const userStats = Promise.resolve({ active: 100 });
//   const serverLogs = Promise.reject("Log Server Down");
//   const salesData = Promise.resolve({ total: 5000 });

//   const dashboardData = await Promise.allSettled([userStats, serverLogs, salesData]);
//   return dashboardData;
// }

// // Q43:

// async function batchUploader() {
//   const upload = (file, willFail) => willFail ? Promise.reject(`${file} Failed`) : Promise.resolve(`${file} Uploaded`);
  
//   const results = await Promise.allSettled([
//     upload("doc1.pdf", false),
//     upload("img1.png", true),
//     upload("vid1.mp4", false)
//   ]);
//   return results;
// }

// // Q44: 

// async function processStudentResults() {
//   const processResult = (id, valid) => valid ? Promise.resolve(`ID ${id} Processed`) : Promise.reject(`ID ${id} Data Missing`);
  
//   const processing = await Promise.allSettled([
//     processResult(101, true),
//     processResult(102, false),
//     processResult(103, true)
//   ]);
//   return processing;
// }