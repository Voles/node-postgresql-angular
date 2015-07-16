angular.module('app')
  .controller('HomeCtrl', function (Events) {
    var that = this;

    Events.getAll()
      .then(function (response) {
        that.events = response;
      });
  });
