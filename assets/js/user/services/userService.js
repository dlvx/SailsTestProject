
app.factory('UserService', ['$http', '$q', '$sails', function($http, $q, $sails){
  return {

    getAllUsers : function(){
      return $sails.get('/user')
        .then(function(resp){
          if(angular.isArray(resp.data)){
            console.log(resp.data);
            return resp.data;
          }else{
            console.log(resp.data);
          }
        }, function(errResp){
          console.log("Error while getting users");
          return $q.reject(errResp)
        });
    },

    createUser: function(user){
      return $http({
        method: 'POST',
        url: '/user/create',
        params: { name : user.username , email : user.email }
      }).then(function(resp) {

        }, function(errResp) {
          console.log("Error while creating user");
          return $q.reject(errResp)
        });
    },

    updateUser: function(user){
      return $http({
        method: 'POST',
        url: '/user/update/' + user.id,
        data: { id : user.id, name: user.username, email: user.email}
      }).then(function(resp) {

        }, function(errResp) {
          console.log("Error while updating user");
          return $q.reject(errResp)
        });
    },

    deleteUser: function(id){
      return $http({
        method: 'POST',
        url: '/user/destroy/',
        data: { id : id }
      }).then(function(resp) {
        //console.log(resp.data);
      }, function(errResp) {
          // if(errResp.status == 400){
          //   $scope.errorMsg = "Invalid Fields";
          // }
          console.log("Error while deleting user");
          return $q.reject(errResp)
      });
    },

    // userWatcher: function(){
    //   $sails.on('user', function(resp){
    //     console.log(resp);
    //     return resp;
    //   });
    // }

  }
}])
