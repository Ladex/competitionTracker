'use strict';

/**
 * @ngdoc function
 * @name competitionTrackerApp.controller:MainController
 * @description
 * # MainController
 * Controller of the competitionTrackerApp
 */
angular.module('competitionTrackerApp')
  .controller('MainController', function ($scope) {

    $scope.maxSize = 5;
    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;


    function clearFields() {
      $scope.period = '';
      $scope.invoiceSale = '';
      $scope.inMarketSales = '';
      $scope.monthlyForecast = '';
      $scope.rollPrice = '';
      $scope.casePrice = '';
      $scope.packPrice = '';
      $scope.stickPrice = '';
    }

    $scope.businessunits = [
      {unitId: 1, unitName: 'Business Unit 1'},
      {unitId: 2, unitName: 'Business Unit 2'}];

    $scope.countries = [
      {countryId: 1, name: 'United Kingdom'},
      {countryId: 2, name: 'Nigeria'}];

    $scope.brands = [{brandId: 1, countryId: 1, brandName: 'Malboro'},
      {brandId: 2, countryId: 1, brandName: 'Benson & Hedges'}];

    $scope.selectedBusinessUnit = $scope.businessunits[0];
    $scope.selectedCountry = $scope.countries[0];


    $scope.getBrands = function (country) {
      $scope.filteredBrands = $scope.brands.filter(function (brand) {
        return brand.countryId === country.countryId;
      });
    };

    clearFields();
    $scope.salesVolume = [];

    $scope.save = function () {

      var salesVolume = {
        businessUnit: $scope.selectedBusinessUnit,
        period: $scope.period,
        country: $scope.selectedCountry,
        brand: $scope.brand,
        invoiceSale: $scope.invoiceSale,
        inMarketSale: $scope.inMarketSales,
        monthlyForecast: $scope.monthlyForecast,
        casePrice: $scope.casePrice,
        rollPrice: $scope.rollPrice,
        packPrice: $scope.packPrice,
        stickPrice: $scope.stickPrice
      };

      $scope.totalItems =  $scope.salesVolume.unshift(salesVolume);
      $scope.pageChanged();
      //clearFields();
    };

    $scope.edit = function (sale) {
      $scope.activeSale = sale;
    };

    $scope.delete = function (sale) {
      var index = $scope.salesVolume.indexOf(sale);
      $scope.salesVolume.splice(index,1);
    };

    $scope.cancel = function () {
      $scope.activeSale = null;
    };

    $scope.pageChanged = function(){
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;

      $scope.filteredSales = $scope.salesVolume.slice(begin, end);
    };
  });
