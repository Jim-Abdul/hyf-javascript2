
 let numbers = [1, 2, 3, 4];
 let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
console.log('-----------------------------------------------------------------');



newNumbers.push(numbers.filter(a => a % 2 !== 0).map(b => b * 2));
console.log(newNumbers);
console.log('-----------------------------------------------------------------');



let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
console.log('------------------------------------------------------------------');

console.log(tasks.length);

console.log('-------------------------------------------------------------------');

let x = tasks.map(function (item) {
return item.name +' - '+ item.duration/60 + ' hour!';
});
console.log(x);

console.log('------------------------------ OR ---------------------------------');


// let more = tasks.filter(function (item) {
// return item.duration = item.duration / 60 + ' hour';
// });
// console.log(more);

console.log('--------------------------------------------------------------------');


let twoOrMore = tasks.filter(val => val.duration >= 120);
console.log(twoOrMore);

console.log('--------------------------------------------------------------------');

let sum = tasks.filter(item => item.duration =
    item.duration / 60 * 15).map(element => element.duration).reduce(function (previousVal, currentVal) {
        return previousVal + currentVal;
    });
console.log(sum + ' Euro');







