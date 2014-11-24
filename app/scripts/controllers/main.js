'use strict';

/**
 * @ngdoc function
 * @name graphAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphAppApp
 */
angular.module('graphAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
