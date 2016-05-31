app.controller('UserController', ['$scope', 'toastr', '$sails', 'UserService',
  function($scope, toastr, $sails, UserService){

 console.log('registered');


  $scope.getAllUsers = function(){
    UserService.getAllUsers()
      .then(function(data){
        if(data){
          $scope.users = data;
        }
      }, function(errResp){
        console.log(errResp);
      });
  };

  $scope.create = function(){
    UserService.createUser($scope.user)
      .then(function(data){

      }, function(errResp){

      });
  };

  $scope.update = function(user, $index){
    UserService.updateUser(user)
      .then(function(data){

      }, function(errResp){

      });
  };

  $scope.delete = function(user, $index){
    UserService.deleteUser(user.id)
      .then(function(data){

      }, function(errResp){

      });
  }

  $scope.getAllUsers();

  // --- Update watcher listening to the sails sockets--- //

  var userWatcher = $sails.on('user', function(response){
    console.log(response);
    if(response.verb === 'created'){
      $scope.users.push(response.data);
      toastr.success(response.data.username, 'Created user');
    }else if(response.verb === 'updated'){
      var index = $scope.users.map(function (user) {
            return user.id;
      }).indexOf(response.data.id);
      $scope.users[index] = response.data;
      toastr.info(response.data.username, 'Updated user');
    }else if(response.verb === 'destroyed'){
      var index = $scope.users.map(function (user) {
            return user.id;
      }).indexOf(response.id);
      $scope.users.splice(index,1);
      toastr.info(response.id, 'Deleted user');
    }
  });

}]);
