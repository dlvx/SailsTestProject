
app.directive('currentUser', ['AuthService', function(AuthService){
  return {
    templateUrl: 'js/auth/directives/currentUser.html',
    restrict: 'E',
    scope: {},
    controller: function($scope, AuthService){
      $scope.currentUser = AuthService.currentUser()
        .then(function(data){
          if(data.hasOwnProperty('currentUser')){
            $scope.currentUser = data.currentUser.username;
          }else{
            $scope.currentUser = 'No User Logged'
          }
        }, function(err){
          console.log(err);
        });
    }
  }
}])
