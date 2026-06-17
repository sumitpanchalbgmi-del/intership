//  MJS 

// const { useCallback } = require("react");


// export const city = 'New York';
// export const country = 'USA';


// export default 
//     function add(a, b) {
//         return a + b;
//     }


// common js

//    function add(a, b) {
//         return a + b;
//     }
// module.exports = add;




// DAy 7  


// const promise =new Promise((resolved,reject)=>
//     {resolved("100")
//     });

//     // how to use (consume) promise 

//     promise.then((amount)=>{
//         console.log(amount);
//     })


  

// // reject
//   const promise =new Promise((resolved,reject)=>{
//     reject("network error"); 
// })
// promise.catch((error)=>{
//     console.log(error);
// })



// const  promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//     resolve("success");
//     }else{
//         reject("failed");
//     }
// })
// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })







// fetch("https://dummyjson.com/products")
// .then((response)=>{
//      return reponse.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });




// Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// })
// .then(()=>{
//     console.log("step 2")
//     throw new error("BooooM")
// })
// .then(()=>{
//     console.log("step 3")
// }).catch((err)=>{
//     console.log(err.message);
// }).finally(()=>{
//     console.log("helllo");
// })


    // Promise.any([
    // Promise.reject("A"),
    //  Promise.reject("b"),
    //   Promise.resolve("S")
    // ]).then(console.log)
