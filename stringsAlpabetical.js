// Reorganising words into alphabetical order
let sortAlphabets = function(text) {
  return text
    .split("")
    .sort()
    .join("");
};
console.log(sortAlphabets("cat"));
