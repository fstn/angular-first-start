
angular.module('it-phonecat').config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/phones', {
    templateUrl: 'app/features/phones/phones.html',
    controller: 'PhoneListCtrl',
    resolve:{
        phones:['$http',function($http){
            return $http.get('assets/js/phones/phones.json')
        
        }]
    }
  }).when('/phone/:phoneId', {
    templateUrl: 'app/featues/phoneDetail/phoneTemplateDetails.html',
    controller: 'PhoneListCtrl',
      
  })
  .otherwise({
      redirectTo:'/phones'})
}]);

