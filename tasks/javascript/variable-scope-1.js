/**
 * TODO: What will be the output of the following snippet?
 */

var n1 = 1;

(function printSmth () {
  console.log(n1);
  var n1 = 2;
  console.log(n1);
})();

console.log(n1);

////////////////////////

n2 = 1;

(function printSmth () {
  console.log(n2);
  var n2 = 2;
  console.log(n2);
})();

console.log(n2);

////////////////////////

var n3 = 1;

(function printSmth () {
  console.log(n3);
  n3 = 2;
  console.log(n3);
})();

console.log(n3);

////////////////////////

n4 = 1;

(function printSmth () {
  console.log(n4);
  n4 = 2;
  console.log(n4);
})();

console.log(n4);
