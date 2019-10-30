// fibonacci sequence

var previous = 0;
var current = 1;
var sum = 0;
var next;
for (i = 1; i < 100; i++) {
  next = current + previous;
  previous = current;
  current = next;
  if (current % 2 === 0 && current < 4000000) {
    sum += current;
    console.log(sum);
  }
}
