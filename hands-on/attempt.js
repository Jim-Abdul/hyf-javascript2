//--------------------------------------------------------------------------------------------------------
// (function(n) {
//         for (a = []; n--; a[n] = n + 1);
//         return a;
// })(10)

//--------------------------------------------------------------------------------------------------------
//console.log(Array.from({ length: 10 }, (v, i) => i));
//--------------------------------------------------------------------------------------------------------
// for (let i, a = [i = 0]; i < 10; a[i++] = i);
// console.log(a);
//--------------------------------------------------------------------------------------------------------
// let myArr = [];
// for (let i = 0; i <= 20; i++) {
//     myArr.push(i);
// }
//----------------------------------------------------------------------------------------------------------
// let myArr = [];
// function myFunc(x) {
//     for (let i = x; i < x+5; i++) {
//         myArr.push(i);
//     }
// }   
// myFunc(3)
// console.log(myArr)
//--------------------------------------------------------------------------------------------------------
//let myArr = [];
// let startIndex = 0;
// let stopIndex = 10;
// function sayThree() {
//     for (let i = startIndex; i <= stopIndex; i++){
//         if (i % 3 === 0) { myArr.push(i) }
//     }
// }
// //sayThree();
// function sayFive() {
//     for (let i = startIndex; i <= stopIndex; i++){
//         if (i % 5 === 0) { myArr.push(i)}
//     }
// }
// //sayFive();
// function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
//     for (let i = startIndex; i <= stopIndex; i++){
//         if(i%3 === 0 && i%5 === 0){myArr.push(i)}
//     }
// }
// threeFive(10,30,sayThree,sayFive);
// console.log(myArr)

// threeFive(10, 17, sayThree);
// function threeFive(startIndex, endIndex, threeCallback) {

// }
// function sayThree() {return myArr.filter(val => val % 3 === 0);}
    //function fiveCallback() { return myArr.filter(val => val % 5 === 0); }
    //function threeFive() { return myArr.filter(val => val % 3 === 0 && val % 5 === 0); }    
    //fiveCallback();
//console.log(myArr);
// function palindrome(str) {
//     var arr = str.split("");
//     arr.reverse();

//     //return true;
//     console.log(arr);
// }


//....................................................................................................

// function findLongestWord(str) {
//     let foo = [];
//     let mee= str.split(' ');
    
    
//     for (var i = 0; i < mee.length; i++) {
        
//         foo.push(mee[i].length);
        
//     }
//     //console.log(foo); 
//    console.log(Math.max.apply(null, foo));//6
//   //  console.log(foo.indexOf(6));//4
//    // console.log('The longest word will be: ' + mee[foo.indexOf(Math.max.apply(null, foo))]);
// }


// findLongestWord("The quick brown fox jumped over the lazy dog") //should return 6.
// findLongestWord("May the force be with you") //should return 5.
// findLongestWord("Google do a barrel roll") //should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow")// should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology")// should return 19. 
//=========================================================================================================

//Bonus: Write a function takes this array['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only
//has unique values in it(so it removes the duplicate ones).
//Make it a 'smart' algorithm that could do it for every array(only strings / number).
////////////////////////////////////////Try to make it as fast as possible!





