// var igpayAtinlay = function(input) {
//   var inputArray = input.split('');
//   var newWord;
//   if ('aeiou'.indexOf(input[0]) !== -1) {
//     return input.concat('ay');
//   } else {
//       for (var i=0; i<=inputArray.length; i++) {
//         if (input[i]==='q' && input[i+1]==='u') {
//           inputArray.splice(0, 2);
//           inputArray.push('qu');
//           i++;
//         } else if ('aeiouy'.indexOf(inputArray[0]) === -1) {
//           inputArray.shift();
//           inputArray.push(input[i]);
//         } else {
//             newWord = inputArray.join('');
//             newWord = newWord.concat('ay');
//             return newWord;
//           }
//       }
//     }
// }

var leetSpeak = function(input) {
  var inputArray = input.split('');
  for (var i=0; i < inputArray.length; i++)
    if (inputArray[i] === 'e' || inputArray[i] === 'E' ) {
      inputArray[i] = '3';
    } else if (inputArray[i] === 'o' || inputArray[i] === 'O') {
      inputArray[i] = '0';
    } else if (inputArray[i] === 'l' || inputArray[i] === 'L') {
      inputArray[i] = '1';
    } else if ((inputArray[i] === 's') && i!==0) {
      inputArray[i] = 'z'
    }
  return inputArray.join('');
}
