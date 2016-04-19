(function (angular) {
  'use strict';

  /**
   * TODO
   *
   * Optimize:
   *  - load time
   *  - search time
   *  - less $watchers
   */

  angular.module('APP', ['angular-debug-bar']);

  angular.module('APP')
    .factory('PerformanceService', PerformanceSrvice)
    .factory('TimeTrackerService', TimeTrackerService)
    .directive('postRepeatTracker', postRepeatTracker)
    .controller('PerformanceCtrl', PerformanceCtrl);

  function PerformanceSrvice () {
    var nestedArray = ['1', '2', '3', '4', '5'];

    function Item (id, name) {
      this.id = id;
      this.name = name;
      this.nested = nestedArray;
    }

    return {
      generateData: function generateData (rows) {
        rows = rows || 5000;

        var items = [];
        for (var i = 1; i <= rows; i++) {
          items.push(new Item(i, ['id-', i].join('')));
        }
        return items;
      }
    };
  }

  function TimeTrackerService ($log) {
    var ref;
    return {
      start: function start () {
        ref = new Date();
      },
      stop: function stop () {
        var end = new Date();
        $log.debug('### Table rendering took: ' + (end - ref) + ' ms');
      }
    };
  }

  function postRepeatTracker (TimeTrackerService) {
    return {
      restrict: 'A',
      link: function ($scope) {
        if ($scope.$first) {
          TimeTrackerService.start();
        }
        if ($scope.$last) {
          $scope.$evalAsync(TimeTrackerService.stop);
        }
      }
    };
  }

  function PerformanceCtrl ($scope, PerformanceService) {
    var items = PerformanceService.generateData();

    $scope.getItems = function () {
      return items;
    };
  }
})(window.angular);
