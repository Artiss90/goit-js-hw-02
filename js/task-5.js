'use strict';
function checkForSpam(message) {
  let lowerString = message.toLowerCase();
  return lowerString.includes('spam') || lowerString.includes('sale');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
