app.factory('ProductService', ['$http', '$q', function($http, $q){
  return {
    createProduct: function(product){
      console.log(product);
      return $http({
        method: 'POST',
        url: '/product/create',
        data: { name : product.name , price : product.price }
      }).then(function(resp) {

        }, function(errResp) {
          console.log("Error while creating product");
          return $q.reject(errResp)
        });
    },

    myProducts: function(){

      return $http({
        method: 'GET',
        url: '/product/myProducts'
      }).then(function(resp){
        return resp.data;
      });
    }

  }
}]);
