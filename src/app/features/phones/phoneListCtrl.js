'use strict';

angular.module('it-phonecat.controllers').controller('PhoneListCtrl', ['$scope', 'phoneService', function ($scope, phoneService) {
    
        $scope.phones = [];
        $scope.selectedPhones = [];
        var success = function (data) {
            $scope.phones  = data.data;
        }
        var error = function (data) {
            console.log('error');
        }
        phoneService.get().then(success, error);
        $scope.orderProp = 'age';

        $scope.buyPhone = function (phone) {
            var index = $scope.selectedPhones.indexOf(phone);
            if (index != -1) {
                $scope.selectedPhones[index].count++;

            } else {
                phone.count = 1;
                $scope.selectedPhones.push(phone);
            }
        }

        $scope.removeSelected = function (phone) {
            var index = $scope.selectedPhones.indexOf(phone);
            $scope.selectedPhones.splice(index, 1);
        }



}

]);
