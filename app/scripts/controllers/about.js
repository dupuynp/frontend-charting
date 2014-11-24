'use strict';

/**
 * @ngdoc function
 * @name graphAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the graphAppApp
 */
angular.module('graphAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
