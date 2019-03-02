//Sword Circle
// 100 people stand in a circle in order 1 to 100. No. 1 has a sword. He kills the next person (i.e. No. 2) and gives the sword to the next living person (i.e. No. 3). All people do the same until only 1 survives. Which number survives to the end?

// Answer: 73
// make function with array passed in
// need a way to check if the last item in the array is going need to have a turn in the circle
// return the array

// function swordPasser(arr) {
//   let killed = 0;
//   let killer = 0;
//   let endOfCircle = arr.length;
//   let turn = true;
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (arr[i]) {
//         killer = arr[i];
//     killed = arr[i + 1];
//     console.log(killed);
//     arr.splice(i + 1, 1);
//     turn = false;} else if (arr[i] === endOfCircle && arr[i+1] === undefined) {
//     arr.splice(0, 1);
//   }
//   if (arr.length > 1) {
//     console.log(arr);
//     swordPasser(arr);
//     turn = true;
//   }
//   return arr;
// }}

function swordPasser(arr) {
  let arr2 = arr;
  for (let i = 0; i <= arr.length; i++) arr.splice(i + 1, 1);
  arr.push(arr.shift());
  // console.log(arr);
  if (arr.length > 1) {
    swordPasser(arr);
  }
  return arr;
}

// console.log(swordPasser([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// tried two different methods to find answer. neither work because I need a way to find out if the array needs to pass the last element to the front
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

// console.log(switcher(newArray));

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
    if (val.indexOf("1") === -1) {
      withoutPrime.push(val);
    }
  });
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
  for (key in duplicates) {
    if (duplicates[key] === 5) {
      final.push(key);
    }
  }
  return final;
}

// I thought 2 would have been counted as a prime digit that needs to be considered. If I take out the part about two then it works but if I don't I get 13 as the final answer.
// This one was looks like a mess after the forEach loops I copied over and over, I tried a few different ways using a ternary, but couldn't get it to work that way.
//--------------------------

// 100 doors to be painted
// You have 100 doors to be painted and 2 painters. 1 starts at one end and paints every other door. The other painter starts at the other end and paints every 3rd door. What door number will they meet at?

// Answer: Between 40 and 41 (it doesn’t land perfectly on the same door)

//need to take in arr on function of 100
//two for loops, on going forward by two, the second going back by 3. When they meet return number

function painters(arr) {
  let array1 = [];
  let array2 = [];
  let finalNum = 0;
  for (var i = 0; i < arr.length; i += 2) {
    array1.push(arr[i]);
  }
  for (var j = arr.length - 1; j > 0; j -= 3) {
    array2.push(arr[j]);
  }
  console.log(array1.length)
  console.log(array2.length)
  return finalNum;
}



