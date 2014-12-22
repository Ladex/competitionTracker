'use strict';

/**
 * @ngdoc directive
 * @name competitionTrackerApp.directive:integer
 * @description
 * # integer
 */

var INTEGER_REGEXP = /^\-?\d+$/;
angular.module('competitionTrackerApp')
  .directive('integer', function () {
    return {
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$validators.integer = function (modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) return true;
          if (INTEGER_REGEXP.test(viewValue)) return true;
          return false;
        }
      }
    };
  });
