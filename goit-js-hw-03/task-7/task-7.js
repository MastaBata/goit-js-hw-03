const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

class Account {
    balance = 0;
    transactions = [];

    createTransaction(amount, type) {
        this.transactions.push({id: this.transactions.length + 1, amount, type});
        this.balance += amount;
        console.log('%c%s', 'color: green', 'Transaction: SUCCESS!');
    }

    deposit(amount) {
        if (amount < 0) {
            alert('Нельзя положить сумму меньше нуля!');
            return;
        }

        this.createTransaction(amount, Transaction.DEPOSIT)
        alert('Вы положили на счет:', amount);
    }

    withdraw(amount) {
        if (this.balance < amount) {
            alert('Недостаточно средств');
            return; 
        }

        this.createTransaction(-amount, Transaction.WITHDRAW);
        alert('Вы сняли со счета:', amount);
    }

    get name() {
        return this._name;
    }
    
    getBalance() {
        alert('Ваш баланс:', this.balance);
    }

    getTransactionDetails(id) {
        const yourTransaction = this.transactions.find(item => item.id === id);
        alert('Сумма операции:', yourTransaction.amount, '\n Тип операции:', yourTransaction.type === Transaction.WITHDRAW ? 'Снято' : 'Депозит');
    }
    getTransactionTotal(type) {
        const filteredTransactions = this.transactions.filter(item => item.type === type);
        let total = 0;
        filteredTransactions.forEach(item => total += item.amount);
        alert(total);
    }
}

const myAccount = new Account();
myAccount.deposit(1000);
myAccount.withdraw(200);
myAccount.getBalance();
myAccount.getTransactionDetails(1);
myAccount.getTransactionTotal(Transaction.WITHDRAW);