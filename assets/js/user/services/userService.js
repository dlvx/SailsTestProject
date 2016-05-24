
app.factory('UserService', ['$http', '$q', '$sails', function($http, $q, $sails){
  return {

    getAllUsers : function(){
      return $sails.get('/user')
        .then(function(resp){
          return resp.data;
        }, function(errResp){
          console.log("Error while getting users");
          //return $q.reject(errResp)
        });
    },

    createUser: function(user){
      return $http({
        method: 'POST',
        url: '/user/create',
        params: { name : user.name , email : user.email }
      }).then(function(resp) {

        }, function(errResp) {

        });
    },

    updateUser: function(user){
      return $http({
        method: 'POST',
        url: '/user/update/' + user.id,
        data: { id : user.id, name: user.name, email: user.email}
      }).then(function(resp) {

        }, function(errResp) {

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
