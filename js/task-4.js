'use strict';
function formatString(string = '', maxLength = 40) {
  let result;
  let lengthString = string.split('');
  console.log(lengthString.length);
  if (lengthString.length > maxLength) {
    lengthString.length = maxLength;
    return (result = lengthString.join('') + '...');
  } else {
    result = string;
  }
  return result;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
