
app.controller('LoginController', ['$scope', '$location', 'AuthService',
  function($scope, $location, AuthService){

      $scope.login = function(){
        $scope.error = false;
        $scope.diabled = true;

        AuthService.login($scope.loginForm.identifier, $scope.loginForm.password)
          .then(function(resp){
            $scope.currentUser = resp.currentUser.username;
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

      $scope.getCurrentUser = function(){
        AuthService.currentUser()
          .then(function(data){
            if(data.hasOwnProperty('currentUser')){
              $scope.currentUser = data.currentUser.username;
            }else{
              $scope.currentUser = 'No User Logged'
            }
          }, function(err){
            console.log(err);
          })
      }

      $scope.getCurrentUser();
}]);
