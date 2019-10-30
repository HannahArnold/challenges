// function wordReverser(string) {
//   return string
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
// }
// console.log(wordReverser("New string, same results"));

// function reverseInPlace(str) {
//   let words = [];
//   words = str.match(/\S+/g);
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     result +=
//       words[i]
//         .split("")
//         .reverse()
//         .join("") + " ";
//   }
//   return result;
// }
// console.log(reverseInPlace("hello there"));

function spinWords(backward) {
  let sentence = "";
  let seperate = backward.split(" ");

  for (let i = 0; i < seperate.length; i++) {
    if (sentence) sentence += " ";
    //cant figure out how to do every other words
    if (seperate[i].length >= 5) {
      sentence += seperate[i]
        .split("")
        .reverse()
        .join("");
    } else {
      sentence += seperate[i];
    }
  }
  return sentence;
}
console.log(spinWords("hi fellow humans, kittens. that is all"));
