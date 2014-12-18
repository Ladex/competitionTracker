'use strict';

/**
 * @ngdoc overview
 * @name competitionTrackerApp
 * @description
 * # competitionTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('competitionTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/competitionSales', {
        templateUrl: 'views/competitionSalesVolume.html',
        controller: 'MainCtrl'
      })
      .when('/admin',{
        templateUrl:'views/about.html',
        controller:'MainCtrl'
      })
      .when('/salesVolumeCompetition', {
        templateUrl: 'views/salesvolumecompetition.html',
        controller: 'SalesvolumecompetitionCtrl'
      })
      .when('/activityTracker', {
        templateUrl: 'views/activitytracker.html',
        controller: 'ActivitytrackerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
