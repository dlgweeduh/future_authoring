var app = angular.module("authoringApp", ['ngRoute', 'ngAnimate']);

// Router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "templates/part_one.html",
    controller: "PartOneController"
  })
  .when('/settings', {
    templateUrl: "templates/settings.html",
    controller: "SettingsController"
  })
  .when('/part_two', {
    templateUrl: "templates/part_two.html",
    controller: "PartTwoController"
  })
  .otherwise({redirect_to: '/'})
}]);
// app.factory('user_db', function(){
//   return {
//     data: {
//       i1_1: '',
//       i1_2: '',
//       i1_3: '',
//       i1_4: '',
//       i1_5: '',
//       i1_9: '',
//       i1_10: '',
//     }
//   }
// })


// Controllers
app.controller('HomeController', 
  ['$scope',
      function($scope) {
      $scope.name = "test home";
      $scope.message = '';
}]);

// app.controller('PartOneController', ['$scope', 'user_db', function($scope, user_db) {
app.controller('PartOneController', ['$scope', function($scope) {  

  $scope.i1_1 = '';
  $scope.i1_2 = '';
  $scope.i1_3 = '';
  $scope.i1_4 = '';
  $scope.i1_5 = '';
  $scope.i1_9 = '';
  $scope.i1_10 = '';

  // $scope.i1_2 = user_db.data.i1_2;
  // $scope.i1_3 = user_db.data.i1_3;
  // $scope.i1_4 = user_db.data.i1_4;
  // $scope.i1_5 = user_db.data.i1_5;
  // $scope.i1_9 = user_db.data.i1_9;
  // $scope.i1_10 = user_db.data.i1_10;


  // $scope.selected_i = $scope.i1_1;
}]);


app.controller('PartTwoController', ['$scope', function($scope) {  


}]);


app.controller('SettingsController', ['$scope', function($scope) {  

}]);


app.controller('animateController', function($scope) {
    $scope.showRectangle = false;
    $scope.extraClass = false;
});


// var parts = document.getallElementsByClassName(".part")
// parts.getTime("time", "120");



app.directive('time', function() {
  return {
    restrict: 'A',
    scope: { time1: '@' },
    controller: function ($scope, $element) { 
      $scope.time = $scope.time1;
    }
  }
});