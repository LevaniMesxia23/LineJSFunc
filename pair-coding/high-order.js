// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => {
  return num + 2;
};
console.log(addTwo(3))

// Challenge 2
const addS = (word) => {
  return `${word}S`;
};

// Challenge 3
const map = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

// Challenge 4
const forEach = (array, callback) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
};

function addLetter(string, letter) {
  return string + letter;
}

// Challenge 5
const mapWith = (array, callback) => {
  let newArray = [];
  array.forEach((item) => {
    newArray.push(callback(item));
  });
  return newArray;
};

// Challenge 6
const reduce = (array, callback, initialValue) => {
  let value = initialValue;
  for (let i = 0; i < array.length; i++) {
    value = callback(value, array[i]);
  }
  return value;
};

// Challenge 7
const intersection = (...arrays) => {
  return arrays.reduce((acc, curr) => acc.filter((item) => curr.includes(item)));
};

