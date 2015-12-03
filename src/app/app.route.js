
angular.module('it-phonecat').config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/phones', {
    templateUrl: 'app/features/phones/phones.html',
    controller: 'PhoneListCtrl'
  }).when('/phone/:phoneId', {
    templateUrl: 'app/features/phoneDetail/phoneDetail.html',
    controller: 'PhoneDetailCtrl',
      resolve:{
          phone:['$http','$route',function($http,$route){
              
            return $http.get('assets/phones/' + $route.current.params.phoneId + '.json');
      }]
      }
      
  })
  .otherwise({
      redirectTo:'/phones'})
}]);

