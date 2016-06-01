
app.controller('LoginController', ['$scope', '$location', 'AuthService',
  function($scope, $location, AuthService){

      $scope.login = function(){
        $scope.error = false;
        $scope.diabled = true;

        AuthService.login($scope.loginForm.identifier, $scope.loginForm.password)
          .then(function(){
            $location.path('/');
            $scope.disabled = false;
            $scope.loginForm = {};
            console.log('logged');
          })
          .catch(function(){
            $scope.error = true;
            $scope.errorMessage = 'Invalid username and/or password';
            $scope.disabled = false;
            $scope.loginForm = {};
            console.log('Error login');
          });
      }
}]);
