'use strict';

describe('Directive: salesRow', function () {

  // load the directive's module
  beforeEach(module('competitionTrackerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sales-row></sales-row>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the salesRow directive');
  }));
});
