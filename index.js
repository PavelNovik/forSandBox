// class Class {
//   static number = 1;

//   static getNumber() {
//     const currentVal = this.number;
//     this.number *= 2;
//     return currentVal;
//   }
// }
// let varia = Class.getNumber();
// console.log(varia);
// varia = Class.getNumber();
// console.log(varia);
// varia = Class.getNumber();
// console.log(varia);
// varia = Class.getNumber();
// console.log(varia);
// varia = Class.getNumber();
// console.log(varia);
// varia = Class.getNumber();
// console.log(varia);
/////////////////////////////////////////
// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split('')
//     .reduce((sum, n) => {
//       return sum + +n;
//     }, 0);
// }

// console.log(sumDigits(99));
// console.log(sumDigits(-994));
// console.log(sumDigits(9));
/////////////////////////////////////////

// function double(array) {
//   return array.map((i) => i * 2);
// }

// console.log(double([1, 2, 3, 4, 5]));
// console.log(double([71, -548, 12.3, 31415]));
// console.log(double([1, 2, 10, 57]));

/////////////////////////////////////////
var kookaCounter = function (laughing) {
  // Your code here!
  return 0;
};

// console.log('HahaHahaHaha'.split('a'));
// console.log('HahaHahaHaha'.split('a'));
// console.log('hahahahahaHaHaHa'.split('ha'));
// console.log('hahahahahaHaHaHa'.split('Ha'));
// console.log('HaHaHahahaHaHa'.split('Ha'));
// console.log('HaHaHahahaHaHa'.split('ha'));

/////////////////////////////////////////

function realNumbers(n) {
  // your code here
  let counter = 0;
  while (n !== 0) {
    if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) {
      counter++;
    }
    n--;
  }
  return counter;
}

console.log(realNumbers(100));
console.log(realNumbers(200));
console.log(realNumbers(300));
console.log(realNumbers(400));
console.log(realNumbers(500));
console.log(realNumbers(600));
console.log(realNumbers(700));
console.log(realNumbers(800));
console.log(realNumbers(900));
console.log(realNumbers(1000));
console.log(realNumbers(1100));
console.log(realNumbers(2000));
console.log(realNumbers(3000));
console.log(realNumbers(4000));

// const myStr =
//   'FirstLine\n\t\\SecondLine\nThirdline\n\rFourLine\n\bFiveLine\n\fSixLine';
// console.log(myStr);
