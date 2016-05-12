var myApp = angular.module('myApp', []);

myApp.controller('UserController', ['$scope', '$http', function($scope, $http){

  $scope.loadUsers = function(){
    $http({
      method: 'GET',
      url: '/user'
    }).then(function successCallback(response) {
        $scope.users = response.data;
      }, function errorCallback(response) {

    });

  }

  $scope.create = function(){
    $http({
      method: 'POST',
      url: '/user/create',
      params: { name : $scope.user.name , email : $scope.user.email }
    }).then(function successCallback(response) {
      $scope.user.name = '';
      $scope.user.email = '';
      console.log(response.data);
      $scope.users.push(response.data);
      $scope.errorMsg = null;
      }, function errorCallback(response) {
        if(response.status == 400){
          $scope.errorMsg = "Invalid Fields";
        }
    });

   }

   $scope.delete = function(user, $index){
     $http({
       method: 'DELETE',
       url: '/user/',
       data: { id : user.id }
     }).then(function successCallback(response) {
       console.log(response.data);
       $scope.users.splice($index,1);
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

  $scope.loadUsers();

}]);
