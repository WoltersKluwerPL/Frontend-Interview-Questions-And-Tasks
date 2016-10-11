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
    .factory('PerformanceService', PerformanceSrvice);

  angular.module('APP')
    .factory('TimeTrackerService', TimeTrackerService);

  angular.module('APP')
    .directive('postRepeatTracker', postRepeatTracker);

  angular.module('APP')
    .controller('PerformanceCtrl', PerformanceCtrl);

  function PerformanceSrvice () {
    var nestedArray = ['1', '2', '3', '4', '5'];

    function Item (id, name) {
      this.id = id;
      this.name = name;
      this.nested = nestedArray;
    }

    return {
      generateData: generateData
    };

    function generateData (rows) {
      var items = [];
      for (var i = 1; i <= rows; i++) {
        items.push(new Item(i, ['id-', i].join('')));
      }
      return items;
    }
  }

  function TimeTrackerService ($log) {
    var ref;
    return {
      start: start,
      stop: stop
    };

    function start () {
      ref = new Date();
    }

    function stop () {
      var end = new Date();
      $log.info('### Table rendering: ' + (end - ref) + ' ms');
    }
  }

  function postRepeatTracker (TimeTrackerService) {
    return {
      restrict: 'A',
      link: link
    };

    function link ($scope) {
      if ($scope.$first) {
        TimeTrackerService.start();
      }
      if ($scope.$last) {
        $scope.$evalAsync(TimeTrackerService.stop);
      }
    }
  }

  function PerformanceCtrl (PerformanceService) {
    var vm = this,
      items = PerformanceService.generateData(5000);

    vm.getItems = function () {
      return items;
    };
  }
})(window.angular);
