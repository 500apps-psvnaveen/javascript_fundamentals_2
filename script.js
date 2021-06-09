'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive : D");
// const age1 = calcAge1(1999);
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }





// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1999);

// console.log(`age1 = ${age1} \n age2 = ${age2}`);




// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1999));

// const yearsUntilRetirement = (birthYear, firstName1) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName1} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1999, "robinson"));

// coading challenge#1 fundamental part-2 

// const calcAverage = (score1, score2, score3) => { return (score1 + score2 + score3) / 3 };
// const dolphineAvg = calcAverage(85, 54, 41);
// const koalasAvg = calcAverage(23, 34, 27);


// function checkWinner(dolphineAvg, koalasAvg) {
//     if (dolphineAvg >= 2 * koalasAvg) console.log(`Dolphine win (${dolphineAvg} vs. ${koalasAvg})`);
//     else if (koalasAvg >= 2 * dolphineAvg) console.log(`koalas win ${koalasAvg} vs. ${dolphineAvg}`);
//     else console.log('No team wins!');
// }

// checkWinner(dolphineAvg, koalasAvg);

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// console.log(friends.unshift('John'));

// console.log(friends);

// // Remove elements
// console.log(friends.pop()); //last
// console.log(friends.pop());
// console.log(friends);

// friends.shift() //first
// console.log(friends);

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
// }

// const calcTotal = function (bill, tip) {
//     return bill + tip;
// }


// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// const total = [calcTotal(bills[0], tips[0]), calcTotal(bills[1], tips[1]), calcTotal(bills[2], tips[2])];

// console.log(bills);
// console.log(tips);
// console.log(total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interstedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// //console.log(jonas[interstedIn]);

// if (jonas[interstedIn]) {
//     console.log(jonas[interstedIn]);
// } else {
//     console.log('Wrong request!')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `"Jonas is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license"`;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas);

// console.log(jonas.getSummary());


//coding challenge #3

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// console.log('mark properties = ', mark);

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// console.log('john properties = ', john);

// console.log(mark.BMI > john.BMI ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s (${john.calcBMI()})` : `${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.calcBMI()})`);

// console.log(mark);

// console.log(john);


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

const calcTips = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 15 / 100;
    }
    else {
        return bill * 20 / 100;
    }
}


for (let i = 0; i < bills.length; i++) {
    tips.push(calcTips(bills[i]));
    total.push(tips[i] + bills[i]);
}

console.log(`${bills} \n\ ${tips} \n\ ${total}`);


const calcAvg = function (arr) {
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
        val = val + arr[i];
    }
    return val / arr.length;


}


console.log('average of total =', calcAvg(total));
console.log('average of tips =', calcAvg(tips));
