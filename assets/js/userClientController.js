var myApp = angular.module('myApp', ['ngSails', 'toastr', 'ngAnimate']);

myApp.controller('UserController', ['$scope', '$http', '$sails', 'toastr',
  function($scope, $http, $sails, toastr){

  // --- Load Users --- /
  (function(){

    // -- By HTTP -- //

    // $http({
    //   method: 'GET',
    //   url: '/user'
    // }).then(function successCallback(response) {
    //     $scope.users = response.data;
    //     console.log($scope.users);
    //   }, function errorCallback(response) {
    //
    // });

    // --- By Sockets -- //

    $sails.get('/user')
      .then(function(resp){
        $scope.users = resp.data;
      }, function(resp){
        console.log("error");
      });
  })();

  // --- Update watcher listening to the sails sockets--- //

  var userWatcher = $sails.on('user', function(response){
    console.log(response);
    if(response.verb === 'created'){
      $scope.users.push(response.data);
      toastr.success(response.data.name, 'Created user');
    }else if(response.verb === 'updated'){
      var index = $scope.users.map(function (user) {
            return user.id;
      }).indexOf(response.data.id);
      $scope.users[index] = response.data;
      toastr.info(response.data.name, 'Updated user');
    }else if(response.verb === 'destroyed'){
      var index = $scope.users.map(function (user) {
            return user.id;
      }).indexOf(response.id);
      $scope.users.splice(index,1);
      toastr.info(response.id, 'Deleted user');
    }
  });

  // -- HTTP Methods -- //

  $scope.create = function(){
    $http({
      method: 'POST',
      url: '/user/create',
      params: { name : $scope.user.name , email : $scope.user.email }
    }).then(function successCallback(response) {
      $scope.user.name = '';
      $scope.user.email = '';

      //$scope.users.push(response.data);
      $scope.errorMsg = null;
      }, function errorCallback(response) {
        if(response.status == 400){
          $scope.errorMsg = "Invalid Fields";
        }
    });

   }

   $scope.update = function(user, $index){
     $http({
       method: 'PUT',
       url: '/user/' + user.id,
       data: { id : user.id, name: user.name, email: user.email}
     }).then(function successCallback(response) {
        console.log(response.data);
       }, function errorCallback(response) {

     });
   }

   $scope.delete = function(user, $index){
     $http({
       method: 'DELETE',
       url: '/user/',
       data: { id : user.id }
     }).then(function successCallback(response) {
       console.log(response.data);
       //$scope.users.splice($index,1);
       }, function errorCallback(response) {
         if(response.status == 400){
           $scope.errorMsg = "Invalid Fields";
         }
     });
   }



}]);
