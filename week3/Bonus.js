//Bonus: Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique
//values in it(so it removes the duplicate ones).Make it a 'smart' algorithm that could do it for every 
//array(only strings / number).Try to make it as fast as possible!

let myArr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];//[ 'a', 'b', 'c', 'd', 'e', 'f' ]

let newArr = myArr.filter(function (val, index, self) {

    return self.indexOf(val) === index;

});
console.log(newArr);