'use strict';

/**
 * @ngdoc function
 * @name realPromptApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the realPromptApp
 */
angular.module('realPromptApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
