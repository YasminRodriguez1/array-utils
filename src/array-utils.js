// array-utils.js

// Filters an array based on a callback function.
// Returns a new array containing only the elements for which the callback returned true.
export function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  // Maps an array to a new array of values based on a callback function.
  // Returns a new array containing the results of calling the callback on each element.
  export function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  // Reduces an array to a single value based on a callback function.
  // Returns the accumulated result.
  export function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
  // Determines the type of an array.
  // Returns 'array' if the input is an array, or 'not-array' if it is not.
  export function getType(input) {
    return Array.isArray(input) ? 'array' : 'not-array';
  }
  
  // Gets the length of an array.
  // Returns the length of the input array, or 0 if the input is not an array.
  export function getLength(input) {
    return Array.isArray(input) ? input.length : 0;
  }
  