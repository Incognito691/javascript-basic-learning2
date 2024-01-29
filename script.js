/**
 * Assignment
 *
 * 1) 1-1000 number divisible by 3 and 5
 * 2) Find 1000 even number
 * 3) if 23356235 is a prime
 */

//1
for (let i = 15; i <= 1000; i += 15) {
  console.log("Divisivle by 3 and 5", i);
}

//2
let even = 0;
let number = 2;
while (even <= 1000) {
  console.log(number);
  number += 2;
  even++;
}

//3
/*
const numtocheck = 23356235;
let isPrime = true;

if (numtocheck <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i * i <= numtocheck; i++) {
    if (numtocheck % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${numtocheck} is a prime number.`);
} else {
  console.log(`${numtocheck} is not a prime number.`);
}
*/

/**
 * n = 7
 * 1 le saabai lai divide garda remainder 0 aauxa
 * n le afu lai divide garda remainder 0 aauxa
 *
 * 2 - (n - 1) = i
 *
 * n % i === 0 this is not prime aru number check garna pardaina
 *
 * mathi ko case saab number ma jaada pani vayena vane tyo chai prime
 *
 */

let num = 7;
let isPrime = true;

for (i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}

console.log(isPrime);
//

/**
 * 1) 2, 4, 6, 8, ..., nth term
 * 2) 1, 4, 9, 16, 25, ..., nth term
 * 3) 1,1,2,3,5,8,..., n ota
 */

//1
