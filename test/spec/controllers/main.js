'use strict';

describe('Controller: MainController', function () {

  // load the controller's module
  beforeEach(module('competitionTrackerApp'));

  var MainCtrl,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should have four business units', function () {
    expect(scope.businessunits).toBeDefined();
  });

  it('should have a display name and a value', function () {
    expect(scope.businessunits[0].unitId).toBeDefined();
    expect(scope.businessunits[0].unitName).toBeDefined();
  });

  it('should have a selected businessUnit', function () {
    expect(scope.selectedBusinessUnit).toBeDefined();
  });

  it('should have a selected date', function () {
    expect(scope.period).toBeDefined();
  });

  it('should have a list of countries', function () {
    expect(scope.countries.length).toBeGreaterThan(1);
    expect(scope.selectedCountry).toBeDefined();
  });

  it('should have competition figure variable',function(){
    expect(scope.period).toBeDefined();
    expect(scope.invoiceSale).toBeDefined();
    expect(scope.inMarketSales).toBeDefined();
    expect(scope.monthlyForecast).toBeDefined();
    expect(scope.rollPrice).toBeDefined();
    expect(scope.casePrice).toBeDefined();
    expect(scope.packPrice).toBeDefined();
    expect(scope.stickPrice).toBeDefined();
  });

  it('should save the sales volume when save is called',function(){
    scope.save();
    expect(scope.salesVolume.length).toBe(1);
  });

  it('should save and form should reset',function(){

  });

});
