class BankAccount {
  constructor(owner, accountNumber) {
    this.owner = owner
    this.accountNumber = accountNumber
    this.transactions = []
  }

  deposit (amount) {
    let newTransaction = new Transaction(this.owner,amount);
    this.transactions.push(newTransaction);
  }

  charge(payee, amount) {
    let negativeAmount = amount * -1
    let newTransaction = new Transaction(payee,negativeAmount);
    this.transactions.push(newTransaction);
  }
//this is the part I need help with 
  balance(){
    //loop through the transactions, and sum up the amounts;
    let newBalance = this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
  return newBalance;
}
}


class Transaction {
  constructor(payee, amount) {
    this.payee = payee
    this.amount = amount
    this.date = new Date()
  }

}

let account = new BankAccount("John", "12345");
account.deposit(100);
account.charge("Target", 40);
console.log("New Balance:", account.balance()); 
account.charge("Chipotle", 10);
account.deposit(400);
console.log("New Balance:", account.balance()); 
console.log(account.transactions);
