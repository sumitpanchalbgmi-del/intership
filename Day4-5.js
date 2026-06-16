// Q.1 OOPS
// DONE

// Q.2 TYPEERROR
// Q.3 INNER
// CAUGHT
// OUTER


// Q.4 2
// Q.5 BAD 
// FIN

// Q.6 REFERENCE ERROR

// Q.7  FAIL 404

// Q.8 TRUE

// Q.9 NOT KNOW
// Q.10  TYPE ERROR

// Q.11 ,12,13 NOT KNOWN
// Q.14 export function add(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// export function mul(a, b) {
//   return a * b;
// }

// export function div(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed");
//   }
//   return a / b;
// }

             // +
//     import { add, sub, mul, div } from "./mathUtils.js";

// console.log("Add:", add(10, 5));
// console.log("Sub:", sub(10, 5));
// console.log("Mul:", mul(10, 5));

// try {
//   console.log("Div:", div(10, 2));
//   console.log("Div:", div(10, 0));
// } catch (err) {
//   console.error("Error:", err.message);
// }

// Q.15 function log(level, msg) {
//   console.log(`[${level.toUpperCase()}] ${msg}`);
// }

// module.exports = log;

            //  +
//             const log = require("./logger");

// log("info", "Application started");
// log("warn", "Low disk space");
// log("error", "Something went wrong");

// Q.18 function errorBoundary(fn) {
//   return async (...args) => {
//     try {
//       const result = await fn(...args);
//       return { ok: true, data: result };
//     } catch (e) {
//       return { ok: false, error: e.message };
//     }
//   };
// }

// Q.23 no
// Q.24{ value: 1, done: false }
// { value: 3, done: false }
// { value: 'done', done: true }

// Q.25 True 
// Q.51 valid:-// ESM module
// const m = await import('./mod.js');
// SyntaxError:-
// CommonJS file
// const m = await import('./mod.js');

// Q.52 SyntaxError
// Q.53 HTTP 500 HttpError: HTTP 500
// Q.54 Try Catch Block
// Q.55 true true false
// Q.56 hi alert(1)
// Q.62 function tryCatch(fn, fallback) {
//   return async (...args) => {
//     try {
//       return await fn(...args);
//     } catch (err) {
//       return typeof fallback === "function"
//         ? fallback(err)
//         : fallback;
//     }
//   };
// }

// Q.73 caught: sync
// Q.74 after click
// Q.85 range caught
// Q.87 btn.onclick = async () => {

//   try {

//     await navigator.clipboard
//       .writeText(text);

//     btn.textContent =
//       "Copied!";

//     setTimeout(() => {
//       btn.textContent = "Copy";
//     }, 2000);

//   } catch {

//     alert("Copy failed");

//   }
// };

// Q.91  import "./a.js";
                //   +
                //  import "./b.js";
// console.log("A loaded");
            //   +
//             import "./c.js";
// console.log("B loaded");
                //  +
  // console.log("C loaded");
// Q.26 child
// parent

// Q.29
//  [object object]


// Q.30 
// 0
// Q.31 
// fired fied
// Q.35
//  val


// Q.36
//  in html file{}
// <p id="para">Old Text</p>}
// in js script{
// const paragraph = document.querySelector("#para");

// paragraph.textContent = "New Text";
// paragraph.style.backgroundColor = "yellow";}
// Q.38
// function virtualDOM(config) {
//   const el = document.createElement(config.tag);

  
//   if (config.props) {
//     for (const [key, value] of Object.entries(config.props)) {
//       el.setAttribute(key, value);
//     }
//   }


//   if (config.text) {
//     el.textContent = config.text;
//   }
//   if (config.children) {
//     config.children.forEach(child => {
//       el.appendChild(virtualDOM(child));
//     });
//   }

//   return el;
// }
// Q.39
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Image Gallery</title>

//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//     }

//     #preview {
//       width: 600px;
//       max-width: 90%;
//       height: 400px;
//       object-fit: cover;
//       border: 2px solid #ccc;
//       margin: 20px 0;
//     }

//     .thumbnails {
//       display: flex;
//       justify-content: center;
//       gap: 10px;
//       flex-wrap: wrap;
//     }

//     .thumb {
//       width: 100px;
//       height: 70px;
//       object-fit: cover;
//       cursor: pointer;
//       border: 2px solid transparent;
//     }

//     .thumb.active {
//       border-color: blue;
//     }

//     button {
//       padding: 10px 20px;
//       margin: 10px;
//       cursor: pointer;
//     }
//   </style>
// </head>

// <body>

//   <h2>Image Gallery</h2>

//   <img id="preview" src="" alt="Preview">

//   <div>
//     <button id="prev">Prev</button>
//     <button id="next">Next</button>
//   </div>

//   <div class="thumbnails">
//     <img class="thumb" src="https://picsum.photos/id/1015/600/400">
//     <img class="thumb" src="https://picsum.photos/id/1025/600/400">
//     <img class="thumb" src="https://picsum.photos/id/1035/600/400">
//     <img class="thumb" src="https://picsum.photos/id/1045/600/400">
//   </div>

//   <script src="app.js"></script>

// </body>
// </html>
// Q.74
//  clicked


// Q.84
//  1


// Q.87 
// 1.html


// Q.98
//  hi



