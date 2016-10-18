/**
 * TODO: What will be the output of the following snippet?
 */

var name = 'JavaScript';
var obj = {
  name: 'AngularJS',
  prop: {
    name: 'ReactJS',
    getName: function () {
      return this.name;
    }
  }
};

// 1
console.log(obj.prop.getName());

// 2
var test = obj.prop.getName;
console.log(test());
