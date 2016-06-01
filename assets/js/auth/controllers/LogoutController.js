
app.controller('LogoutController', ['$scope', '$location', 'AuthService',
  function($scope, $location, AuthService){

      $scope.logout = function (){
        AuthService.logout()
          .then(function(){
            $location.path('/login');
            console.log("Logged out");
          });
      };
}]);
