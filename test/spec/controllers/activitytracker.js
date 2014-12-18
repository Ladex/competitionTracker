'use strict';

describe('Controller: ActivitytrackerCtrl', function () {

  // load the controller's module
  beforeEach(module('competitionTrackerApp'));

  var ActivitytrackerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitytrackerCtrl = $controller('ActivitytrackerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
