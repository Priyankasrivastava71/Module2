function displayMessage(name){
console.log("Hello"+name)
}
function getUserInput(callback){
    setTimeout( ()=> {
        let username = "Alice"
        console.log(username)
    },1000)
    
}

getUserInput(displayMessage)
