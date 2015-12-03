'use strict';

angular.module('it-phonecat.controllers').controller('PhoneListCtrl', ['$scope', 'phones', function ($scope, phones) {
        $scope.phones = [];
        $scope.selectedPhones = [];
        $scope.panier = "";
        console.log("toto");
        $scope.phones = phones.data;

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
