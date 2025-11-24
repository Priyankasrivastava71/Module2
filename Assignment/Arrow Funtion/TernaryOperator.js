const isEven =(n) => n%2 === 0?
true: false;
console.log(isEven(4));
console.log(isEven(5));

// if (marks >= 35) {
//   result = "Pass";
// } else {
//   result = "Fail";
// }

const result = (mark)=> mark >= 35 ?
"pass": "fail";
console.log(result(50));
console.log(result(35));

const greet = (name) => name ?`Hello,${name}`: "Hello Guest";
console.log(greet("anii"));
console.log(greet());

