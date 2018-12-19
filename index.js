function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substring(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  } else {
    if (string.charAt(0) === string.charAt(string.length - 1)) {
      return isPalindrome(string.substring(1, string.length - 1));
    }
    return false;
  }
}

function addUpTo(array, idx) {
  if (idx) {
    return array[idx] + addUpTo(array, --idx);
  } else {
    return array[idx];
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}
