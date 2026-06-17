


fetch("https://dummyjson.com/products")
.then((response)=>{
     return reponse.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
