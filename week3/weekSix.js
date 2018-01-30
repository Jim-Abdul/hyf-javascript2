//..............................................{ 1 }.................................................
function foo(parameter) {
    //console.log('What to do here?');
    bar();
}

function bar() {
    console.log('Hello, I am bar!'); 
}
foo(bar);
//..............................................{ 2 }.................................................

let arr = [];
function sayThree(i) { if (i % 3 === 0) {
        arr.push(i);
    }
}
function sayFive(i) { if (i % 5 === 0) {
        arr.push(i);
    }
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    for (let i = startIndex; i <= stopIndex; i++) {

        if (i % 3 === 0) {
            sayThree(i);
        }
        else if (i % 5 === 0) {
            sayFive(i);
        }
        else if ((i % 3 === 0) && (i % 5 === 0)) {
            sayThree(i);
            sayFive(i);
        }
    }
}
threeFive(4, 19, sayFive, sayThree);//[ 5, 6, 9, 10, 12, 15, 18 ]
console.log(arr);

