'use strict';

angular.module('it-phonecat.controllers').directive('tutoPhone', function () {
    return {
        restrict: 'EA',
        scope: {
            phone:'=phoneObject',
            buyPhoneFunction:"&"
        },
        controller: ["$scope",function(scope){
        }],
        templateUrl:"app/features/phone/phoneTemplate.html"
    }
})
