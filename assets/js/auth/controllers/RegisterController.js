
app.controller('RegisterController', ['$scope', '$location', 'AuthService',
  function($scope, $location, AuthService){

      $scope.register = function(){
        $scope.error = false;
        $scope.diabled = true;

        AuthService.register($scope.registerForm.username, $scope.registerForm.email, $scope.registerForm.password)
          .then(function(){
            $location.path('/login');
            $scope.disabled = false;
            $scope.loginForm = {};
          })
          .catch(function(){
            $scope.error = true;
            $scope.errorMessage = 'Something went wrong';
            $scope.disabled = false;
            $scope.loginForm = {};
          });
      }
}]);
