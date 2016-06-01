app.factory('AuthService', ['$q', '$timeout', '$http',
  function($q, $timeout, $http){
    var user = null;

    function isLoggedIn(){
      if(user){
        return true;
      }else{
        return false;
      }
    }

    function currentUser(){

      return $http.get('/currentUser')
        .then(function(resp){
          return resp.data;
        }, function(){
          return 'No user is logged in';
        });
    }

    function register(username, email, password){
      var deferred = $q.defer();

      $http.post('/auth/local/register',
        { username : username, email : email,  password : password } )
        .success(function(data, status){
          if(status === 200 && data.status){
            console.log(data.status);
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        .error(function(data){
          console.log('err registering');
          deferred.reject();
        });

        return deferred.promise;
    }

    function login(identifier, password){
      var deferred = $q.defer();
      $http.post('/auth/local',
        { identifier : identifier, password : password } )
        .success(function(data, status){

          if(status === 200 && data.status){
            user = true;
            deferred.resolve(data);
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function(data){
          user = false;
          deferred.reject();
        });

        return deferred.promise;

    };

    function logout(){
      var deferred = $q.defer();

      $http.post('/auth/logout')
        .success(function(data){
          //console.log(data.status);
          user = false;
          deferred.resolve();
        })
        .error(function(data){
          user = false;
          deferred.reject();
        });

        return deferred.promise;
    };



    return {
      login : login,
      logout : logout,
      register : register,
      currentUser : currentUser
    }

  }]);
