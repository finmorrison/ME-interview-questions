//Sword Circle
// 100 people stand in a circle in order 1 to 100. No. 1 has a sword. He kills the next person (i.e. No. 2) and gives the sword to the next living person (i.e. No. 3). All people do the same until only 1 survives. Which number survives to the end?

// Answer: 73

var numArr = 0;

function swordPasser(arr) {
  var remainder = numArr % arr.length;
  for (var i = 0; i <= arr.length; i++) arr.splice(i + 1, 1);
  if (arr.length > 1) {
    numArr += 1;
    if (arr.length % 2 === 0) {
      numArr = 0;
    } else {
      numArr = arr.length + 1;
    }
    if (remainder === 1) {
      arr.splice(0, 1);
    }
    swordPasser(arr);
  }
  return arr;
}

// console.log(swordPasser([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


console.log(
  swordPasser([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
  ])
);


// this took me about one and a half hours
//----------------------------------------------------

// 100 Switches with 100 Bulbs
// There are 100 switches in a room operating 100 bulbs. Initially all switches are off. You are asked to make 100 passes through them, in such a manner that during i th pass all the switches that are multiples of i are toggled (if a switch is off, you switch it on, if it is on, you switch it off). For example, during 10th pass you will toggle switch number 10,20,30….100. After completing 100 passes through the switches how many bulbs are on?

// Answer: 10

//function that has an array of 100
//loop through the array i
//second loop going backwards through array j
//compare j with i using modulus to see if i is a multiple of j
//push all the multiples to array
//loop through that array to see if i is ever equal to a number in that array k
// if it's in the second array take it out but push all of the new values in

function switcher(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = arr.length; k >= 0; k--)
      if (arr[k] % arr[i] === 0) {
        arr2.push(arr[k]);
      }
  }
  var duplicates = {};
  let arr3 = [];
  arr2.forEach(function(x) {
    duplicates[x] = (duplicates[x] || 0) + 1;
  });
  for (key in duplicates) {
    if (duplicates[key] % 2 === 1) {
      arr3.push(key);
    }
  }
  return arr3.length;
}

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(switcher(newArray));
console.log(switcher([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]));

//This one got to be a little too much at the end. I was trying to count how many times each of the objects repeated in the duplicates object. if they were odd then the light was on at the end, even meant the light was off.
//Also, I realize that this only works with an array of numbers. I believe I could assign each of them a number though and then do the same thing.
// this took 1 hour to complete
//------------------------------------------

// Prime number problem
// A man has to buy 7 floors in a building. Numbered floor 1 to 68.
// Conditions:
// 1. He cannot buy floors with prime number.
// 2. He cannot buy floor number containing prime digit.
// 3. Floor number 1 is reserved for services.

// How many floors are legal?

// Answer: 17

//Need a function to take in array
//set some variables to make sure I can see the data that's going in to them
//loop through the array
//find all prime numbers by dividing that number by looping through and checking if the number divided by anything below it will be whole number. modulus
//

function primeNumProb(arr) {
  let primes = [];
  let legal = [];
  for (var i = 2; i <= arr.length; i++) {
    var notPrime = false;
    for (var j = 2; j <= arr.length; j++) {
      if (i % j === 0 && j !== i) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      primes.push(i);
    } else {
      legal.push(i);
    }
  }
  console.log(primes);
  let withoutPrime = [];
  legal.forEach(val => {
    val = "" + val;
    if (val.indexOf("2") === -1) {
      withoutPrime.push(val);
    }
  });
  legal.forEach(val => {
    val = "" + val;
    if (val.indexOf("3") === -1) {
      withoutPrime.push(val);
    }
  });
  legal.forEach(val => {
    val = "" + val;
    if (val.indexOf("5") === -1) {
      withoutPrime.push(val);
    }
  });
  legal.forEach(val => {
    val = "" + val;
    if (val.indexOf("7") === -1) {
      withoutPrime.push(val);
    }
  });
  let final = [];
  let duplicates = {};
  withoutPrime.forEach(function(x) {
    duplicates[x] = (duplicates[x] || 0) + 1;
  });
  console.log(duplicates)
  for (key in duplicates) {
    if (duplicates[key] === 4) {
      final.push(key);
    }
  }
  return final.length;
}

console.log(primeNumProb([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68
]))

// I thought 2 would have been counted as a prime digit that needs to be considered. If I take out the part about two then it works but if I don't I get 13 as the final answer.
// This one was looks like a mess after the forEach loops I copied over and over, I tried a few different ways using a ternary, but couldn't get it to work that way.
//--------------------------

// 100 doors to be painted
// You have 100 doors to be painted and 2 painters. 1 starts at one end and paints every other door. The other painter starts at the other end and paints every 3rd door. What door number will they meet at?

// Answer: Between 40 and 41 (it doesn’t land perfectly on the same door)

//need to take in arr on function of 100
//two for loops, on going forward by two, the second going back by 3. When they meet return number

function painters(arr) {
 
  let finalNum = 0;
  for (var i = 0, j = arr.length-1; i < arr.length, j >= 0; i += 2, j -= 3) {
    if(arr[j]-arr[i] < 1){
      console.log(arr[i])
      console.log(arr[j])
      finalNum = arr[i] - (arr[j]/arr[i])
     break
    }
  }
  return finalNum;
}


console.log(painters([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]))

