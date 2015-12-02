'use strict';

angular.module('it-phonecat.controllers').controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.phones = [];
        $scope.selectedPhones = [];
        $scope.panier = "";
        console.log("toto");
        $http.get('assets/js/phones/phones.json').then(function (data) {
            $scope.phones = data.data;
            console.log(data);

        });

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
