import { filter } from 'array-utils';

const array = [1, 2, 3, 4, 5];

// Filter the array to only include even numbers
const result = filter(array, x => x % 2 === 0);

console.log(result); // [2, 4]