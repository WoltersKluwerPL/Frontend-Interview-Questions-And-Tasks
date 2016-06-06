(function (angular) {
  'use strict';

  /**
   * TODO
   *
   * Write simple directive, which shows us only the text `Hello world from AngularJS directive!`
   *
   * Use case:
   * <div simple-directive></div>
   */
  angular.module('APP', ['angular-debug-bar']);

  angular.module('APP')
    .directive('simpleDirective', simpleDirective);

  function simpleDirective () {
    // TODO
  }
})(window.angular);


