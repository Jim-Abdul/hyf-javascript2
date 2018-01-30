
function createBase(val) {

  return function (x) {

    return x += val;

  }

};

let addSix = createBase(6);
let addSeven = createBase(7);
let addEight = createBase(8);

console.log(addSix(12));
console.log(addSeven(3));
console.log(addEight(1));





