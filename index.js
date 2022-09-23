// const globalVar = 1;

// function firstFunc() {
//     const firstVar = 2;

//     function secondFun() {
//         const secondVar = 3;
//         return secondVar + firstVar + globalVar;
//     }

//     const resultFromSecondFunc = secondFunc();
//     return resultFromSecondFunc;
// }

var customerName = 'bob';

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'person';
function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'joe'
}

