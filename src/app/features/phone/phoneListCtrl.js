'use strict';

angular.module('it-phonecat.controllers', []);
angular.module('it-phonecat', ['it-phonecat.controllers']);
angular.module('it-phonecat.controllers').controller('PhoneListCtrl', ['$scope','$http', function ($scope,$http) {
        $http.get('assets/js/phones/phones.json').success(function (data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
        }
]);
