/* ============================================================
   LESSON 5 â€” STRINGS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: .length, [i], .toUpperCase/.toLowerCase, .includes,
   .indexOf, .slice, .trim, + , String()/Number()/isNaN, if.
   NO loops, NO functions-inside beyond these. Each RETURNS a value.

   Run:  node 5-strings.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Shout it -----
// Write `shout(text)` that RETURNS text in ALL CAPS.
// your code here
function shout(text) {
  return text.toUpperCase();
}
console.log(shout("hi"));
console.log(shout("Code"));
console.log(shout("a"));
// TEST 1:  shout("hi")     ->  "HI"
// TEST 2:  shout("Code")   ->  "CODE"
// TEST 3:  shout("a")      ->  "A"

// ----- 2. First letter -----
// Write `firstLetter(word)` that RETURNS the character at index 0.
// your code here
function firstLetter(word) {
  return word[0];
}
console.log(firstLetter("hello"));
console.log(firstLetter("Zebra"));
console.log(firstLetter("x"));
// TEST 1:  firstLetter("hello")  ->  "h"
// TEST 2:  firstLetter("Zebra")  ->  "Z"
// TEST 3:  firstLetter("x")      ->  "x"

// ----- 3. Last letter -----
// Write `lastLetter(word)` that RETURNS the last character of any length word.
// your code here
function lastLetter(word) {
  return word[word.length - 1];
}
console.log(lastLetter("hello"));
console.log(lastLetter("cat"));
console.log(lastLetter("z"));
// TEST 1:  lastLetter("hello")  ->  "o"
// TEST 2:  lastLetter("cat")    ->  "t"
// TEST 3:  lastLetter("z")      ->  "z"

// ----- 4. Initials -----
// Write `initials(first, last)` that RETURNS the two first letters,
// uppercased, joined with a dot: "M.J".
// your code here
function initials(first, last) {
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
console.log(initials("maria", "jones"));
console.log(initials("sam", "lee"));
console.log(initials("a", "b"));
// TEST 1:  initials("maria", "jones")  ->  "M.J"
// TEST 2:  initials("sam", "lee")      ->  "S.L"
// TEST 3:  initials("a", "b")          ->  "A.B"

// ----- 5. Capitalize -----
// Write `capitalize(word)` that RETURNS the word with the first letter
// uppercased and the rest unchanged.
// your code here
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("maria"));
console.log(capitalize("code"));
console.log(capitalize("x"));
// TEST 1:  capitalize("maria")  ->  "Maria"
// TEST 2:  capitalize("code")   ->  "Code"
// TEST 3:  capitalize("x")      ->  "X"

// ----- 6. Looks like an email -----
// Write `isEmail(text)` that RETURNS true when text includes "@", else false.
// your code here
function isEmail(text) {
  if (text.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmail("sam@mail.com"));
console.log(isEmail("sam.com"));
console.log(isEmail("@"));
// TEST 1:  isEmail("sam@mail.com")  ->  true
// TEST 2:  isEmail("sam.com")       ->  false
// TEST 3:  isEmail("@")             ->  true

// ----- 7. Valid username length -----
// Write `validUsername(name)` that RETURNS "Valid" when length is >= 3
// AND <= 15, otherwise "Invalid".
// your code here
function validUsername(name) {
  if (name.length >= 3 && name.length <= 15) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
console.log(validUsername("jordan"));
console.log(validUsername("jo"));
console.log(validUsername("a"));
// TEST 1:  validUsername("jordan")  ->  "Valid"
// TEST 2:  validUsername("jo")      ->  "Invalid"
// TEST 3:  validUsername("a")       ->  "Invalid"

// ----- 8. Area code -----
// Write `areaCode(phone)` (10-char string) that RETURNS the first 3 chars.
// your code here
function areaCode(phone) {
  //   return phone[0] + phone[1] + phone[2];
  return phone.slice(0, 3);
}
console.log(areaCode("5551234567"));
console.log(areaCode("2129998888"));
console.log(areaCode("0000000000"));
// TEST 1:  areaCode("5551234567")  ->  "555"
// TEST 2:  areaCode("2129998888")  ->  "212"
// TEST 3:  areaCode("0000000000")  ->  "000"

// ----- 9. Same word ignoring case -----
// Write `sameWord(a, b)` that RETURNS true when a and b match ignoring case.
// your code here
function sameWord(a, b) {
  if (a.toLowerCase() === b.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(sameWord("Hello", "hello"));
console.log(sameWord("cat", "dog"));
console.log(sameWord("ABC", "abc"));
// TEST 1:  sameWord("Hello", "hello")  ->  true
// TEST 2:  sameWord("cat", "dog")      ->  false
// TEST 3:  sameWord("ABC", "abc")      ->  true

// ----- 10. Clean and measure -----
// Write `cleanLength(raw)` that trims the spaces off both ends and RETURNS
// the length of what is left.
// your code here
function cleanLength(raw) {
  return raw.trim().length;
}
console.log(cleanLength(" hi "));
console.log(cleanLength(" hello "));
console.log(cleanLength("x"));
// TEST 1:  cleanLength("  hi  ")      ->  2
// TEST 2:  cleanLength("  hello   ")  ->  5
// TEST 3:  cleanLength("x")           ->  1

// ----- 11. Pad the clock -----
// Write `padClock(minute)` (0-59 number). RETURN a 2-char string, adding a
// leading "0" when it is a single digit: 5 -> "05", 42 -> "42".
// your code here
function padClock(minute) {
  if (minute <= 9) {
    return "0" + minute;
  } else {
    return minute;
  }
}
console.log(padClock(5));
console.log(padClock(42));
console.log(padClock(0));
// TEST 1:  padClock(5)   ->  "05"
// TEST 2:  padClock(42)  ->  "42"
// TEST 3:  padClock(0)   ->  "00"

// ----- 12. Cents to price tag -----
// Write `priceTag(cents)` (3+ digit whole number). RETURN "$D.CC" where CC
// is the last 2 digits and D is the rest: 150 -> "$1.50", 905 -> "$9.05".
// your code here
function priceTag(cents) {
  //   let text = cents.toString();
  //   return (
  //     "$" + text.slice(0, text.length - 2) + "." + text.slice(text.length - 2)
  //   );
  const text = cents.toString();
  const dollor = text.slice(0, -2);
  const cent = text.slice(-2);
  return "$" + dollor + "." + cent;
}
console.log(priceTag(1299));
console.log(priceTag(905));
console.log(priceTag(150));
// TEST 1:  priceTag(150)  ->  "$1.50"
// TEST 2:  priceTag(905)  ->  "$9.05"
// TEST 3:  priceTag(1299) ->  "$12.99"

/* ============================================================
   LESSON 6 â€” LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.
// your code here
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumTo(5));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55

// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.
// your code here
function countFours(max) {
  let divNum = 0;
  for (let n = 1; n <= max; n++) {
    if (n % 4 === 0) divNum += 1;
  }
  return divNum;
}
console.log(countFours(20));
console.log(countFours(7));
console.log(countFours(3));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0

// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.
// your code here
function factorial(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1

// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.
// your code here

function power(base, exp) {
  let result = 1;
  for (let n = 0; n < exp; n++) {
    result = result * base;
  }
  return result;
}
console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(7, 0));
// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1

// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here
function digitCount(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(7384));
console.log(digitCount(50));
console.log(digitCount(0));
// TEST 1:  digitCount(7384)  ->  4
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1

// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
// your code here
function digitSum(n) {
  let total = 0;
  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
  }
  return total;
}
console.log(digitSum(1234));
console.log(digitSum(999));
console.log(digitSum(5));
// TEST 1:  digitSum(1234)  ->  10
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5

// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
// your code here
function countLetter(text, letter) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      result++;
    }
  }
  return result;
}
console.log(countLetter("banana", "a"));
console.log(countLetter("hello", "l"));
console.log(countLetter("dog", "z"));
// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0

// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
// your code here
function reverse(text) {
  result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text[i];
  }
  return result;
}
console.log(reverse("code"));
console.log(reverse("abc"));
console.log(reverse("x"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
// your code here
const vowels = "aeiou";

function countVowels(text) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      result++;
    }
  }
  return result;
}
console.log(countVowels("javascript"));
console.log(countVowels("aeiou"));
console.log(countVowels("xyz"));
// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
// your code here
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(14));
// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true

// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
// your code here
function stepsToZero(n) {
  let steps = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n / 2;
    } else {
      n = n - 1;
    }
  }
  return steps;
}
console.log(stepsToZero(14));
console.log(stepsToZero(8));
console.log(stepsToZero(3));
// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1

// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.
// your code here
function isNumPalindrome(n) {
  let original = n;
  let reverse = 0;
  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
  }
  return original === reverse;
}
console.log(isNumPalindrome(121));
// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true

// ----- 1. Shout it -----
// Write `shout(text)` that RETURNS text in ALL CAPS.
// your code here
function shout(text) {
  return text.toUpperCase();
}
console.log(shout("hi"));
// TEST 1:  shout("hi")     ->  "HI"
// TEST 2:  shout("Code")   ->  "CODE"
// TEST 3:  shout("a")      ->  "A"

// ----- 2. First letter -----
// Write `firstLetter(word)` that RETURNS the character at index 0.
// your code here
function irstLetter(word) {
  return word[0];
}
console.log(firstLetter("hello"));
// TEST 1:  firstLetter("hello")  ->  "h"
// TEST 2:  firstLetter("Zebra")  ->  "Z"
// TEST 3:  firstLetter("x")      ->  "x"

// ----- 3. Last letter -----
// Write `lastLetter(word)` that RETURNS the last character of any length word.
// your code here
function lastLetter(word) {
  return word[word.length - 1];
}
console.log(lastLetter("cat"));
// TEST 1:  lastLetter("hello")  ->  "o"
// TEST 2:  lastLetter("cat")    ->  "t"
// TEST 3:  lastLetter("z")      ->  "z"

// ----- 4. Initials -----
// Write `initials(first, last)` that RETURNS the two first letters,
// uppercased, joined with a dot: "M.J".
// your code here
function initials(first, last) {
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
console.log(initials("maria", "jones"));
// TEST 1:  initials("maria", "jones")  ->  "M.J"
// TEST 2:  initials("sam", "lee")      ->  "S.L"
// TEST 3:  initials("a", "b")          ->  "A.B"

// ----- 5. Capitalize -----
// Write `capitalize(word)` that RETURNS the word with the first letter
// uppercased and the rest unchanged.
// your code here
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(capitalize("maria"));
// TEST 1:  capitalize("maria")  ->  "Maria"
// TEST 2:  capitalize("code")   ->  "Code"
// TEST 3:  capitalize("x")      ->  "X"

// / ----- 6. Looks like an email -----
// Write `isEmail(text)` that RETURNS true when text includes "@", else false.
// your code here
function isEmail(text) {
  if (text.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmail("sam@mail.com"));
// TEST 1:  isEmail("sam@mail.com")  ->  true
// TEST 2:  isEmail("sam.com")       ->  false
// TEST 3:  isEmail("@")             ->  true

// ----- 7. Valid username length -----
// Write `validUsername(name)` that RETURNS "Valid" when length is >= 3
// AND <= 15, otherwise "Invalid".
// your code here
function validUsername(name) {
  if (name.length >= 3 && name.length <= 15) {
    return "Valid";
  } else {
    ("Invalid");
  }
}
console.log(validUsername("jordan"));
// TEST 1:  validUsername("jordan")  ->  "Valid"
// TEST 2:  validUsername("jo")      ->  "Invalid"
// TEST 3:  validUsername("a")       ->  "Invalid"

// ----- 8. Area code -----
// Write `areaCode(phone)` (10-char string) that RETURNS the first 3 chars.
// your code here
function areaCode(phone) {
  return phone.slice(0, 3);
}
console.log(areaCode("5551234567"));
// TEST 1:  areaCode("5551234567")  ->  "555"
// TEST 2:  areaCode("2129998888")  ->  "212"
// TEST 3:  areaCode("0000000000")  ->  "000"

// ----- 9. Same word ignoring case -----
// Write `sameWord(a, b)` that RETURNS true when a and b match ignoring case.
// your code here
function sameWord(a, b) {
  if (a.toLowerCase() === b.toLowerCase()) {
    return true;
  } else {
    false;
  }
}
console.log(sameWord("Hello", "hello"));
// TEST 1:  sameWord("Hello", "hello")  ->  true
// TEST 2:  sameWord("cat", "dog")      ->  false
// TEST 3:  sameWord("ABC", "abc")      ->  true

// ----- 10. Clean and measure -----
// Write `cleanLength(raw)` that trims the spaces off both ends and RETURNS
// the length of what is left.
// your code here
function cleanLength(raw) {
  return raw.trim().length;
}
console.log(cleanLength("  hi  "));
// TEST 1:  cleanLength("  hi  ")      ->  2
// TEST 2:  cleanLength("  hello   ")  ->  5
// TEST 3:  cleanLength("x")           ->  1

// ----- 11. Pad the clock -----
// Write `padClock(minute)` (0-59 number). RETURN a 2-char string, adding a
// leading "0" when it is a single digit: 5 -> "05", 42 -> "42".
// your code here
function padClock(minute) {
  if (minute <= 9) {
    return "0" + minute;
  } else {
    return minute;
  }
}
console.log(padClock(5));
// TEST 1:  padClock(5)   ->  "05"
// TEST 2:  padClock(42)  ->  "42"
// TEST 3:  padClock(0)   ->  "00"

// ----- 12. Cents to price tag -----
// Write `priceTag(cents)` (3+ digit whole number). RETURN "$D.CC" where CC
// is the last 2 digits and D is the rest: 150 -> "$1.50", 905 -> "$9.05".
// your code here
function priceTag(cents) {
  const text = cents.toString();
  let dollor = text.slice(0, -2);
  let cent = text.slice(-2);
  return "$" + dollor + "." + cent;
}
console.log(priceTag(150));
// TEST 1:  priceTag(150)  ->  "$1.50"
// TEST 2:  priceTag(905)  ->  "$9.05"
// TEST 3:  priceTag(1299) ->  "$12.99"

/* ============================================================
   LESSON 6 â€” LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.
// your code here
function sunTo(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    return (result += n[i]);
  }
}
console.log(sumTo(5));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55

// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.
// your code here
function countFours(max) {
  let result = 0;
  for (let i = 1; i < max; i++) {
    if (i % 4 === 0) {
      result += 1;
    }
  }
  return result;
}
console.log(countFours(20));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0

// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.
// your code here
function factotial(n) {
  let total = 1;
  for (i = 0; i < n; i++) {
    total = total * n;
  }
  return total;
}
console.log(factorial(5));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1

// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.
// your code here
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result = result * base;
  }
  return result;
}
console.log(power(2, 3));
// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1

// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here
function digitCount(n) {
  let count = 0;
  while (n >= 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(7384));
// TEST 1:  digitCount(7384)  ->  4
function digitCount(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(digitCount(50));
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1

// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
// your code here
function digitSum(n) {
  let result = 0;
  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }
  return result;
}
console.log(digitSum(1234));
// TEST 1:  digitSum(1234)  ->  10
function digitSum(n) {
  let total = 0;
  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
  }
  return total;
}
console.log(digitSum(999));
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5

// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
// your code here
function countLetter(text, letter) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      result++;
    }
  }
  return result;
}
console.log(countLetter("banana", "a"));
// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0

// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
// your code here
function reverse(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}
console.log(reverse("code"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
// your code here
const vowel = "aeiou";
function countVowels(text) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowel.includes(text[i])) {
      result++;
    }
  }
  return result;
}

console.log(countVowels("javascript"));
// TEST 1:  countVowels("javascript")  ->  3
const vowelss = "aeiou";

function countVowels(text) {
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      result++;
    }
  }
  return result;
}
console.log(countVowels("happy"));
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
// your code here
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(2));
// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true

// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
// your code here
function stepsToZero(n) {
  let steps = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n = n - 1;
    }
    steps++;
  }
  return steps;
}
console.log(stepsToZero(14));
// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1

// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.
// your code here

function isNumPalindrome(n) {
  let original = n;
  let reverse = 0;
  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
  }
  return original === reverse;
}

console.log(isNumPalindrome(121));
console.log(isNumPalindrome(123));
console.log(isNumPalindrome(7));
// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true

/* ============================================================
   LESSON 7 â€” FUNCTIONS: FRESH EXERCISES
   ------------------------------------------------------------
   Focus: parameters, return, default values, and CALLING one
   function from inside another (composition). Tools: everything
   from lessons 1-6. NO arrays.

   Run:  node 7-functions.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Add three -----
// Write `addThree(a, b, c)` that RETURNS the sum of all three.
// your code here
function addThree(a, b, c) {
  let total = 0;
  return (total = a + b + c);
}
console.log(addThree(1, 2, 3));
console.log(addThree(10, 0, 5));
console.log(addThree(-1, 1, 0));
// TEST 1:  addThree(1, 2, 3)   ->  6
// TEST 2:  addThree(10, 0, 5)  ->  15
// TEST 3:  addThree(-1, 1, 0)  ->  0

// ----- 2. Greet with default -----
// Write `greet(name)` that RETURNS "Hello, " + name. If name is not given,
// default it to "friend". (Use a default parameter.)
// your code here
function greet(name = "friend") {
  return "Hello," + name;
}
console.log(greet("Sam"));
console.log(greet());
console.log(greet("Ada"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam"
// TEST 2:  greet()       ->  "Hello, friend"
// TEST 3:  greet("Ada")  ->  "Hello, Ada"

// ----- 3. Max of two -----
// Write `maxTwo(a, b)` that RETURNS the larger of the two.
// your code here
function maxTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxTwo(3, 9));
console.log(maxTwo(10, 2));
console.log(maxTwo(5));
// TEST 1:  maxTwo(3, 9)    ->  9
// TEST 2:  maxTwo(10, 2)   ->  10
// TEST 3:  maxTwo(5, 5)    ->  5

// ----- 4. Max of three (compose #3) -----
// Write `maxThree(a, b, c)` that RETURNS the largest, by CALLING maxTwo twice.
// your code here
function maxThree(a, b, c) {
  //   if (a > b && a > c) {
  //     return a;
  //   } else if (b > a && b > c) {
  //     return b;
  //   } else {
  //     return c;
  //   }
  let biggest = maxTwo(a, b);
  return maxTwo(biggest, c);
}
console.log(maxThree(3, 9, 5));
console.log(maxThree(8, 2, 4));
console.log(maxThree(1, 1, 7));
// TEST 1:  maxThree(3, 9, 5)    ->  9
// TEST 2:  maxThree(8, 2, 4)    ->  8
// TEST 3:  maxThree(1, 1, 7)    ->  7

// ----- 5. Is even (helper) -----
// Write `even(n)` that RETURNS true when n is even.
// your code here
function even(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(even(4));
console.log(even(7));
console.log(even(0));
// TEST 1:  even(4)  ->  true
// TEST 2:  even(7)  ->  false
// TEST 3:  even(0)  ->  true

// ----- 6. Label parity (compose #5) -----
// Write `parityLabel(n)` that RETURNS "even" or "odd" by CALLING even(n).
// your code here
function parityLabel(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(parityLabel(7));
console.log(parityLabel(4));
console.log(parityLabel(0));
// TEST 1:  parityLabel(7)  ->  "odd"
// TEST 2:  parityLabel(4)  ->  "even"
// TEST 3:  parityLabel(0)  ->  "even"

// ----- 7. Rectangle area -----
// Write `area(w, h)` that RETURNS w * h.
// your code here
function area(w, h) {
  return w * h;
}
console.log(area(3, 4));
console.log(area(5, 5));
console.log(area(1, 9));
// TEST 1:  area(3, 4)  ->  12
// TEST 2:  area(5, 5)  ->  25
// TEST 3:  area(1, 9)  ->  9

// ----- 8. Total cost (compose #7) -----
// Write `tileCost(w, h, pricePerTile)` that RETURNS area(w, h) * pricePerTile.
// your code here
function titleCost(w, h, pricePerTitle) {
  let totalPrice = area(w, h);
  return totalPrice * pricePerTitle;
}

console.log(titleCost(2, 3, 5));
console.log(titleCost(4, 4, 2));
console.log(titleCost(1, 1, 10));
// TEST 1:  tileCost(2, 3, 5)   ->  30
// TEST 2:  tileCost(4, 4, 2)   ->  32
// TEST 3:  tileCost(1, 1, 10)  ->  10

// ----- 9. Clamp -----
// Write `clamp(n, low, high)` that RETURNS low if n < low, high if n > high,
// otherwise n.
// your code here
function clamp(n, low, high) {
  if (n < low) {
    return low;
  } else if (n > high) {
    return high;
  } else {
    return n;
  }
}
console.log(clamp(15, 0, 10));
console.log(clamp(-3, 0, 10));
console.log(clamp(5, 0, 10));
// TEST 1:  clamp(15, 0, 10)  ->  10
// TEST 2:  clamp(-3, 0, 10)  ->  0
// TEST 3:  clamp(5, 0, 10)   ->  5

// ----- 10. Count down to string -----
// Write `countdown(n)` that RETURNS a string of n down to 1 joined by spaces,
// using a loop inside the function. countdown(3) -> "3 2 1".
// your code here
function countdown(n) {
  let countdownStging = "";
  for (let i = n; i > 0; i--) {
    countdownStging += i + " ";
  }
  return countdownStging;
}
console.log(countdown(3));
console.log(countdown(5));
console.log(countdown(7));
// TEST 1:  countdown(3)  ->  "3 2 1"
// TEST 2:  countdown(5)  ->  "5 4 3 2 1"
// TEST 3:  countdown(1)  ->  "1"

/* ============================================================
   LESSON 8 â€” OBJECTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: obj.key / obj[key], "key" in obj, delete, for..in,
   Object.keys / Object.values, { ...spread }. Plus everything before.

   Run:  node 8-objects.js
   Comparing objects: two objects are never === even when equal.
   To check in code, compare JSON.stringify(yours) to the expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Make a book -----
// Write `makeBook()` (no input) that RETURNS { title: "Dune", pages: 412 }.
// your code here
function makeBook() {
  return {
    title: "Dune",
    pages: 412,
  };
}
console.log(makeBook());
console.log(makeBook().title);
console.log(makeBook().pages);
console.log(typeof makeBook());
// TEST 1:  makeBook().title       ->  "Dune"
// TEST 2:  makeBook().pages       ->  412
// TEST 3:  typeof makeBook()      ->  "object"

// ----- 2. Read a key -----
// Write `getTitle(book)` that RETURNS the title property.
// your code here
function getTitle(book) {
  return book;
}
console.log(getTitle({ title: "1984", pages: 328 }));
console.log(getTitle({ title: "it" }));
console.log(getTitle({ title: "" }));
// TEST 1:  getTitle({ title: "1984", pages: 328 })  ->  "1984"
// TEST 2:  getTitle({ title: "It" })                ->  "It"
// TEST 3:  getTitle({ title: "" })                  ->  ""

// ----- 3. Read by variable key -----
// Write `field(obj, key)` that RETURNS the value behind key (use brackets).
// your code here
function field(obj, key) {
  return obj[key];
}
console.log(field({ a: 1, b: 2 }, "b"));
console.log(field({ city: "NYC" }, "city"));
console.log(field({ a: 1 }, "missing"));
// TEST 1:  field({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  field({ city: "NYC" }, "city")    ->  "NYC"
// TEST 3:  field({ a: 1 }, "missing")        ->  undefined

// ----- 4. Set a price (mutate) -----
// Write `setPrice(item, price)` that sets item.price = price and RETURNS item.
// your code here
function setPrice(item, price) {
  item.price = price;
  return item;
}
console.log(setPrice({ name: "pen" }, 3));
console.log(setPrice({ price: 1 }, 9));
console.log(setPrice({ name: "x" }, 0));
// TEST 1:  setPrice({ name: "pen" }, 3).price  ->  3
// TEST 2:  setPrice({ price: 1 }, 9).price     ->  9
// TEST 3:  setPrice({ name: "x" }, 0).price    ->  0

// ----- 5. Has key? -----
// Write `hasKey(obj, key)` that RETURNS true when key exists in obj.
// your code here
function hasKey(obj, key) {
  return key in obj;
}
console.log(hasKey({ a: 1 }, "a"));
console.log(hasKey({ a: 1 }, "b"));
console.log(hasKey({ name: "x" }, "name"));
// TEST 1:  hasKey({ a: 1 }, "a")        ->  true
// TEST 2:  hasKey({ a: 1 }, "b")        ->  false
// TEST 3:  hasKey({ name: "x" }, "name") ->  true

// ----- 6. Remove a key (mutate) -----
// Write `removeKey(obj, key)` that deletes key from obj and RETURNS obj.
// your code here
function removeKey(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeKey({ a: 1, b: 2 }, "b"));
console.log(removeKey({ a: 1, b: 2 }, "a"));
console.log(removeKey({ a: 1, b: 2 }, "b"));
// TEST 1:  "b" in removeKey({ a: 1, b: 2 }, "b")  ->  false
// TEST 2:  "a" in removeKey({ a: 1, b: 2 }, "b")  ->  true
// TEST 3:  removeKey({ x: 9 }, "x").x             ->  undefined

// ----- 7. Count the keys -----
// Write `keyCount(obj)` that RETURNS how many keys obj has.
// your code here
function keyCount(obj) {
  return Object.keys(obj).length;
}
console.log(keyCount({ a: 1, b: 2, c: 3 }));
console.log(keyCount({}));
console.log(keyCount({ only: true }));
// TEST 1:  keyCount({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  keyCount({})                    ->  0
// TEST 3:  keyCount({ only: true })        ->  1

// ----- 8. Sum the values -----
// Write `sumValues(obj)` (all values are numbers) that RETURNS their total.
// your code here
function sumValues(obj) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ a: 10, b: 5 }));
console.log(sumValues({ only: 7 }));
// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10, y: 5 })       ->  15
// TEST 3:  sumValues({ only: 7 })           ->  7

// ----- 9. Merge two objects (copy) -----
// Write `merge(a, b)` that RETURNS a NEW object with both, b winning on
// shared keys. Do not change a or b.
// your code here
function merge(a, b) {
  let newMerge = {
    ...a,
    ...b,
  };
  return newMerge;
}
console.log(merge({ a: 1 }, { b: 2 }));
console.log(merge({ a: 1 }, { b: 9 }).b);
console.log(keyCount(merge({ a: 1 }, { b: 2 })));
// TEST 1:  merge({ a: 1 }, { b: 2 }).b         ->  2
// TEST 2:  merge({ a: 1 }, { a: 9 }).a         ->  9
// TEST 3:  keyCount(merge({ a: 1 }, { b: 2 })) ->  2

// ----- 10. Highest value key -----
// Write `topKey(scores)` (values are numbers) that RETURNS the key with the
// biggest value.
// your code here
function topKey(scores) {
  let biggistScore = 0;
  let biggistKey = "";
  for (const key in scores) {
    if (scores[key] > biggistScore) {
      biggistScore = scores[key];
      biggistKey = key;
    }
  }
  return biggistKey;
}
console.log(topKey({ sam: 5, ada: 9, bo: 3 }));
console.log(topKey({ a: 1, b: 2 }));
console.log(topKey({ only: 7 }));
// TEST 1:  topKey({ sam: 5, ada: 9, bo: 3 })  ->  "ada"
// TEST 2:  topKey({ a: 1, b: 2 })             ->  "b"
// TEST 3:  topKey({ only: 7 })                ->  "only"

/* ============================================================
   LESSON 9 â€” ARRAYS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: [ ], arr[i], arr.length, push/pop/unshift/shift,
   includes/indexOf, and a for loop over the items. Plus before.

   Run:  node 9-arrays.js
   Comparing arrays by eye: the test shows the expected list.
   To check in code, compare JSON.stringify(yours) to expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. First item -----
// Write `firstItem(arr)` that RETURNS the item at index 0.
// your code here
function firstItem(arr) {
  return arr[0];
}
console.log(firstItem([10, 20, 30]));
console.log(firstItem(["a", "b"]));
console.log(firstItem([7]));
// TEST 1:  firstItem([10, 20, 30])  ->  10
// TEST 2:  firstItem(["a", "b"])    ->  "a"
// TEST 3:  firstItem([7])           ->  7

// ----- 2. Sum all -----
// Write `sumAll(arr)` (numbers) that RETURNS the total of every item.
// your code here
function sumAll(arr) {
  let total = 0;
  for (const item of arr) {
    total += +item;
  }
  return total;
}
console.log(sumAll([1, 2, 3, 4]));
console.log(sumAll([]));
console.log(sumAll([5]));
// TEST 1:  sumAll([1, 2, 3, 4])  ->  10
// TEST 2:  sumAll([])            ->  0
// TEST 3:  sumAll([5])           ->  5

// ----- 3. Biggest number -----
// Write `maxOf(arr)` (numbers) that RETURNS the largest item.
// your code here
function maxOf(arr) {
  let biggest = arr[0];
  for (const item of arr) {
    if (item > biggest) {
      biggest = item;
    }
  }
  return biggest;
}
console.log(maxOf([3, 9, 5]));
console.log(maxOf([-7, -5, -2]));
console.log(maxOf([7]));
// TEST 1:  maxOf([3, 9, 5])      ->  9
// TEST 2:  maxOf([-1, -5, -2])   ->  -1
// TEST 3:  maxOf([7])            ->  7

// ----- 4. Count occurrences -----
// Write `countOf(arr, target)` that RETURNS how many items equal target.
// your code here
function countOf(arr, target) {
  let count = 0;
  for (const item of arr) {
    if (item === target) {
      count += 1;
    }
  }
  return count;
}
console.log(countOf([1, 2, 2, 3, 2], 2));
console.log(countOf(["a", "b", "a"], "a"));
console.log(countOf([1, 2, 3], 9));
// TEST 1:  countOf([1, 2, 2, 3, 2], 2)        ->  3
// TEST 2:  countOf(["a", "b", "a"], "a")      ->  2
// TEST 3:  countOf([1, 2, 3], 9)              ->  0

// ----- 5. Add to end -----
// Write `append(arr, item)` that pushes item and RETURNS arr.
// your code here
function append(arr, item) {
  arr.push(item);
  return arr;
}
console.log(append([1, 2], 3));
console.log(append([], "hi").length);
console.log(append(["a"], "b"));
// TEST 1:  append([1, 2], 3)          ->  [1, 2, 3]
// TEST 2:  append([], "hi").length    ->  1
// TEST 3:  append(["a"], "b")         ->  ["a", "b"]

// ----- 6. Remove first -----
// Write `removeFirst(arr)` that shifts off the first item and RETURNS arr.
// your code here
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3]));
console.log(removeFirst([9]).length);
console.log(removeFirst(["a", "b", "c"]));
// TEST 1:  removeFirst([1, 2, 3])        ->  [2, 3]
// TEST 2:  removeFirst([9]).length       ->  0
// TEST 3:  removeFirst(["a", "b", "c"])  ->  ["b", "c"]

// ----- 7. Contains -----
// Write `contains(arr, item)` that RETURNS true when item is in arr.
// your code here
function contains(arr, item) {
  //   if (arr.includes(item)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return arr.includes(item);
}

console.log(contains(["cat", "dog"], "dog"));
console.log(contains([1, 2, 3], 9));
console.log(contains([], "x"));
// TEST 1:  contains(["cat", "dog"], "dog")   ->  true
// TEST 2:  contains([1, 2, 3], 9)            ->  false
// TEST 3:  contains([], "x")                 ->  false

// ----- 8. Count even numbers -----
// Write `countEven(arr)` (numbers) that RETURNS how many items are even.
// your code here
function countEven(arr) {
  let countEven = 0;
  for (const item of arr) {
    if (item % 2 === 0) {
      countEven++;
    }
  }
  return countEven;
}
console.log(countEven([1, 2, 3, 4, 6]));
console.log(countEven([1, 3, 5]));
console.log(countEven([2, 4]));
// TEST 1:  countEven([1, 2, 3, 4, 6])  ->  3
// TEST 2:  countEven([1, 3, 5])        ->  0
// TEST 3:  countEven([2, 4])           ->  2

// ----- 9. Join with dashes -----
// Write `dashJoin(arr)` that RETURNS the items joined into one string with
// "-" between them, built with a loop. dashJoin(["a","b","c"]) -> "a-b-c".
// your code here
function dashJoin(arr) {
  let result = " ";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i !== arr.length - 1) {
      result += "-";
    }
  }
  return result;
}
console.log(dashJoin(["a", "b", "c"]));
console.log(dashJoin(["one"]));
console.log(dashJoin([1, 2]));
// TEST 1:  dashJoin(["a", "b", "c"])  ->  "a-b-c"
// TEST 2:  dashJoin(["one"])          ->  "one"
// TEST 3:  dashJoin([1, 2])           ->  "1-2"

// ----- 10. Average -----
// Write `average(arr)` (numbers) that RETURNS the mean of the items.
// your code here
function average(arr) {
  let averageNum = 0;
  for (const item of arr) {
    averageNum += item / arr.length;
  }
  return averageNum;
}
console.log(average([2, 4, 6]));
console.log(average([10, 20]));
console.log(average([5]));
// TEST 1:  average([2, 4, 6])    ->  4
// TEST 2:  average([10, 20])     ->  15
// TEST 3:  average([5])          ->  5

// ----- 11. Reverse into a new array -----
// Write `reverseArr(arr)` that RETURNS a NEW array with the items reversed.
// Do not change the original.
// your code here

// console.log(reverseArr([1, 2, 3]));
// TEST 1:  reverseArr([1, 2, 3])        ->  [3, 2, 1]
// TEST 2:  reverseArr(["a", "b"])       ->  ["b", "a"]
// TEST 3:  reverseArr([7])              ->  [7]

// ----- 12. Only the evens (build a new array) -----
// Write `evensOnly(arr)` that RETURNS a NEW array with only the even numbers,
// in the same order.
// your code here

// console.log(evensOnly([1, 2, 3, 4, 5, 6]));
// TEST 1:  evensOnly([1, 2, 3, 4, 5, 6])  ->  [2, 4, 6]
// TEST 2:  evensOnly([1, 3, 5])           ->  []
// TEST 3:  evensOnly([2, 4])              ->  [2, 4]
