function createCounter(){
    let counter = 0;


function increment(){
    counter++
    console.log(counter)
}
function decrement(){
    counter--
    console.log(counter)
}

 return {increment, decrement

 }
}
const counter = createCounter();
counter.increment(); 
 counter.increment(); 
counter.decrement(); 

function createBankAccount() {
    let balance = 0;
    let history = [];   

    return {
        deposit(amount) {
            balance += amount;
            history.push(`Deposited ${amount}`);
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                history.push(`Failed withdrawal of ${amount}`);
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
                history.push(`Withdrew ${amount}`);
            }
        },

        getBalance() {
            return balance;
        },

        getHistory() {
            return history;
        }
    };
}
const account = createBankAccount();

account.deposit(500);
account.withdraw(200);
account.withdraw(400);

console.log(account.getBalance()); 
console.log(account.getHistory());



