'use strict';

angular.module('it-phonecat.controllers').factory('phoneService', ['$http', function ($http) {
    var phoneService = {};
    phoneService.get = function () {
            return $http.get('assets/js/phones/phones.json');
        }
        // factory function body that constructs shinyNewServiceInstance
    return phoneService;
}]);
