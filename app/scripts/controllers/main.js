'use strict';

/**
 * @ngdoc function
 * @name realPromptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the realPromptApp
 */
angular.module('realPromptApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
