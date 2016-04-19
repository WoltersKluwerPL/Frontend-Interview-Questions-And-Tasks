(function (angular) {
  'use strict';

  /**
   * TODO
   *
   * Write service to generate random data (pick up a topic).
   * Next, write the controller which use that service and display that data.
   *
   * Hint:
   *  - look at simple-service.html
   */
  angular.module('APP', ['angular-debug-bar']);

  angular.module('APP')
    .controller('SimpleServiceCtrl', SimpleServiceCtrl);

  function SimpleServiceCtrl ($scope) {
    $scope.items = [];

    $scope.load = function () {
      // TODO
    };
  }
})(window.angular);
