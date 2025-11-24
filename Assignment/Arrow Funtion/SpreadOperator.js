const profile ={name: "ani", age: 20, address:{city:"allahabad", zipcode: 211008}};
const profileb = {age: 21, address:{city:"prayagraj", zipcode: 211015}};
const pp3 = {...profile,...profileb};
console.log(pp3);