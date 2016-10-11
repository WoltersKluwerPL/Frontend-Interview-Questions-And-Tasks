(function (angular) {
  'use strict';

  /**
   * TODO
   *
   * Write simple directive, which shows us a list of provided items.
   */
  angular.module('APP', ['angular-debug-bar']);

  angular.module('APP')
    .controller('SimpleCtrl', SimpleCtrl);

  angular.module('APP')
    .directive('simpleDirective', simpleDirective);

  function SimpleCtrl () {
    var vm = this;

    vm.items = ['Trust', 'Me', 'I\'m', 'an', '"Engineer"'];
  }

  function simpleDirective () {
    // TODO
  }
})(window.angular);


