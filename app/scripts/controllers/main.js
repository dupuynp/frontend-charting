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
    $scope.awesomeThings = [];

    var chart = c3.generate({
        bindto: "#gauge",
        data: {
            x: 'x',
            columns: [
                ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 340, 200, 500, 250, 350]
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
  });
