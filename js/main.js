var app = angular.module("authoringApp", ['ngRoute', 'ngAnimate']);

// Router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "templates/part_one.html",
    controller: "PartController"
  })
  .when('/settings', {
    templateUrl: "templates/settings.html",
    controller: "SettingsController"
  })
  .when('/part_two', {
    templateUrl: "templates/part_two.html",
    controller: "PartController"
  })
  .when('/stage2', {
    templateUrl: "templates/settings.html",
    controller: "SettingsController"
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

// app.controller('PartController', ['$scope', 'user_db', function($scope, user_db) {
app.controller('PartController', ['$scope', function($scope) {  

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

  // $scope.current_part = 'one';

  // $scope.nextPart = function () = {
  //   $scope.current_part = 'two';

  // };

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