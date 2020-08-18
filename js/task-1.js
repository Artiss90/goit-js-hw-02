'use strict';
const getItemsString = function (array) {
  for (let i = 0; i < array.length; i += 1)
    console.log(`${i + 1} - ${array[i]}`);
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/