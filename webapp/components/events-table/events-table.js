angular.module('app')
  .directive('eventsTable', function () {
    return {
      restrict: 'E',
      scope: {
        events: '=',
        enableSearch: '='
      },
      templateUrl: 'components/events-table/events-table.html'
    };
  });
