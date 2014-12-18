'use strict';

describe('Controller: SalesvolumecompetitionCtrl', function () {

  // load the controller's module
  beforeEach(module('competitionTrackerApp'));

  var SalesvolumecompetitionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalesvolumecompetitionCtrl = $controller('SalesvolumecompetitionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
