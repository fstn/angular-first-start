
'use strict';

angular.module('it-phonecat.controllers').controller('PhoneDetailCtrl', ['$scope', 'phone',
  function($scope, phone) {
      debugger;
      $scope.phone = phone.data;
  }]);