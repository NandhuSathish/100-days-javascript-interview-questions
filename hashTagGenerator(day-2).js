// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let camelCasedWords = str
    .split(' ')
    .map((word) =>
      word.length > 0 ? word.replace(word[0], word[0].toUpperCase()) : ''
    );
  console.log(camelCasedWords);
  let hashTag = '#' + camelCasedWords.join('');
  return hashTag.length > 140 || hashTag.length === 1 ? false : hashTag;
}

console.log(generateHashtag('India     is my country'));
