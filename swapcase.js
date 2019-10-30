let a = "ThIs Is bRoKeN";

let ans = a
  .split("")
  .map(function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  })
  .join("");
console.log(ans);
