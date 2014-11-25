'use strict';

/**
 * @ngdoc function
 * @name graphAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphAppApp
 */
angular.module('graphAppApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.currentTemp = 0;
        $scope.myLocation = 'Austin, TX';
        $scope.cityData = {
            pop: 100000
        }
        

        $scope.getData = function() {
            
            $http.get('http://api.openweathermap.org/data/2.5/find?units=imperial&q=' + $scope.myLocation).
                success(function(data, status, headers, config) {
                    if (data.list.length > 0){
                        var currentTemp = Math.round(data.list[0].main.temp);
                        $scope.currentTemp = currentTemp;
                        $scope.tempChart.load({columns:[['temperature', currentTemp]]});
                        $scope.getHistory();
                    }
                
                }).
                error(function(data, status, headers, config) {
                    console.log(status);
                });
        };

        $scope.getHistory = function () {
            $http.get('http://api.openweathermap.org/data/2.5/history/city?q=' + $scope.myLocation).
                success(function(data, status, headers, config) {
                    console.log(data);
                
                }).
                error(function(data, status, headers, config) {
                    console.log(status);
                });  
        };



        $scope.updateLocation = function() {            
            $scope.getData();
        };

        $scope.getData();

        $scope.tempChart = c3.generate({
            bindto: "#temp-gauge",
            data: {
                columns: [
                    ['temperature', $scope.currentTemp]
                ],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function(value, ratio) {
                        return value + '°F';
                    },
                    show: true
                },
                min: -30, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 130, // 100 is default
                units: '',
                width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ["#008CFF","#1F7BE0","#3F6BC1","#5F5BA3","#7F4B84","#9F3A65","#BF2A47","#DF1A28","#FF0A0A"], 
                threshold: {
                   unit: 'value',
                   max: 130, 
                    values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
                }
            },
            size: {
                height: 180
            }
        });

        $scope.barchart = c3.generate({
            bindto: "#bar-rainfall",
            data: {
                x: 'x',
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    ['wind', 30, 200, 100, 400, 150, 250],
                    ['rain', 10, 30, 120, 50, 120, 135]
                ],
                types: {
                    wind: 'bar',
                    rain: 'area-spline'
                },
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }                
            },
            size: {
                height: 220,
            },
        });


    });
