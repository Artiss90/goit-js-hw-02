'use strict';
function findLongestWord(string = '') {
  //   let arr = string.split(' ');
  //   let longestWord = arr[0];
  //   for (const oneWord of arr) {
  //     let isLonges = oneWord.length > longestWord.length;
  //     if (isLonges) {
  //       longestWord = oneWord;
  //     }
  //   }
  //     return longestWord;

  // альтернативный метод!!!
  let arr = string.split(' ');
  let earlyWord = 0;
  let longestWordText = '';
  //   console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > earlyWord) {
      earlyWord = arr[i].length;
      longestWordText = arr[i];
    }
  }
  return longestWordText;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
