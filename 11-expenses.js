const limit = 1000;
const expenses = [];

function trackExpense(money) {
    expenses.push(money)
}
function calculate() {
    let sum = 0;

    expenses.forEach(function(expense) {
        sum = sum + expense;
    });

    return sum;
}

function checkBalance() {
    if (calculate() < limit) {
        console.log('мы в лимите');
    } else {
        console.log('лимит превышен');
    }
}