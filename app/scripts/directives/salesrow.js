//'use strict';
//
///**
//* @ngdoc directive
//* @name competitionTrackerApp.directive:salesRow
//* @description
//* # salesRow
//*/
//angular.module('competitionTrackerApp')
//  .directive('salesRow', function () {
//    return {
//      templateUrl: '../../salesRow.html',
//      restrict: 'A',
//      link: function (scope,element,attrs,ctrl) {
//
//       scope.isEditing = false;
//
//        scope.editSale = function(){
//          scope.original = angular.copy(scope.sale)
//          scope.isEditing = true;
//        };
//
//        scope.updateSale = function(){
//          scope.update(scope.sale);
//          scope.isEditing = false;
//        };
//
//        scope.deleteSale = function(){
//          scope.delete(scope.sale);
//        };
//
//        scope.cancelEdit = function(){
//          scope.isEditing = false;
//          angular.copy(scope.original,scope.sale);
//        };
//      }
//    };
//  });
