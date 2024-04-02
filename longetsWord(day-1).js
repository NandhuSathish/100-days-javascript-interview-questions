// longest word in a string.
// write a fun() it takes a string as the argument and returns the largest word and if there is multiple returns the first encountered.

// const longestWord = (sentence) => {
//   let words = sentence.split(' ');
//   let largest = '';
//   let wordLength = 0;
//   words.map((word) => {
//     if (word.length > wordLength) {
//       wordLength = word.length;
//       largest = word;
//     }
//   });
//   return largest;
// };

const longestWord = (sentence) => {
  return sentence.split(' ').reduce((largest, word) => {
    return word.length > largest.length ? word : largest;
  }, '');
};

console.log(longestWord('India is my country'));
