arr1 = [1, 2, 3];
arr2 = [4, 5];
arr3 = [...arr1,...arr2]
console.log(arr3)

const sum = (...nums) => {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
};
console.log(sum());

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {name,city,pin}=user
console.log(user)