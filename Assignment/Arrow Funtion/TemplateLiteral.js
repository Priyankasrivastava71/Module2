const username = "anika";
const course = "full stack web development";
console.log(`Hello ${username}`, `Welcome to the ${course} course`);

// 
//shorthand version
const name = "Sam";
const age = 21;
const student = {
   name,
   age,
  greet: () => console.log("Hello")
 

};
 student.greet();

 const getFullName = (first,last) => `${first} ${last}`;
 console.log(getFullName("ani","singh"));
    


