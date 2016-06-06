/**
 * TODO: What will be the output of the following snippet?
 */

var n = 1;

(function printSomething () {
  console.log(n);
  var n = 2;
  console.log(n);
})();

console.log(n);

//

n = 1;

(function printSomething () {
  console.log(n);
  var n = 2;
  console.log(n);
})();

console.log(n);

// 

var n = 1;

(function printSomething () {
  console.log(n);
  n = 2;
  console.log(n);
})();

console.log(n);

//

var n = 1;

(function printSomething () {
  console.log(n);
  n = 2;
  console.log(n);
})();

console.log(n);
