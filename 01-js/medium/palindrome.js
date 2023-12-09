/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let length = str.length;
  str = str.toLowerCase();
  let start = 0;
  let end = length - 1;
  while (start < end) {
    if (
      str.charCodeAt(start) < "a".charCodeAt(0) ||
      str.charCodeAt(start) > "z".charCodeAt(0)
    ) {
      start++;
      continue;
    }

    if (
      str.charCodeAt(end) < "a".charCodeAt(0) ||
      str.charCodeAt(end) > "z".charCodeAt(0)
    ) {
      end--;
      continue;
    }

    if (str[start] !== str[end]) {
      return false;
    } else {
      end--;
      start++;
    }
  }
  return true;
}

module.exports = isPalindrome;
