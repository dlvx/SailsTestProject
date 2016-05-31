app.controller('ProductController', ['$scope', 'toastr', 'ProductService',
  function($scope, toastr, ProductService){

    $scope.createProduct = function(){
      ProductService.createProduct($scope.product)
        .then(function(data){

        }, function(errResp){

        });
    };

    $scope.myProducts = function(){
      ProductService.myProducts()
        .then(function(data){
          if(data){
            console.log(data);
            $scope.products = data;
          }
        }, function(errResp){
          console.log(errResp);
        });
    };

}]);
