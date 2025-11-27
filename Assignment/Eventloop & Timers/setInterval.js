let intervalld=setInterval(()=>{
console.log("Loading")
},1000)
setTimeout(()=>{
    clearInterval(intervalld);
    console.log("Loaded Successfullly!")
},5000);
