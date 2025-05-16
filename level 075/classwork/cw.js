// BankAccount კონსტრუქტორი
function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    // თანხის შეტანა
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Please enter a valid amount to deposit.");
        }
    };

    // თანხის გამოტანა
    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.owner} withdrew ${amount}. New balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Please enter a valid amount to withdraw.");
        }
    };

    // ანგარიშის წინა ანგარიში (მფლობელის სახელი და ბალანსი)
    this.showBalance = function() {
        console.log(`${this.owner}'s balance: ${this.balance}`);
    };
}

// სამი BankAccount ობიექტის შექმნა
let account1 = new BankAccount("გიორგი", 1000);
let account2 = new BankAccount("ანა", 1500);
let account3 = new BankAccount("მარიამი", 2000);

// პროცედურების შესრულება
account1.deposit(500);  // გიორგი დააბრუნებს 500
account1.withdraw(200); // გიორგი გამოიტანს 200
account1.showBalance(); // გიორგი შეიტანს ბალანსი

account2.deposit(1000);  // ანა დააბრუნებს 1000
account2.withdraw(500);  // ანა გამოიტანს 500
account2.showBalance();  // ანა შეიტანს ბალანსი

account3.deposit(300);   // მარიამი დააბრუნებს 300
account3.withdraw(400);  // მარიამი გამოიტანს 400
account3.showBalance();  // მარიამი შეიტანს ბალანსი
