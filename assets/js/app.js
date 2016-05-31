var app = angular.module('app', ['ngSails', 'toastr', 'ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'templates/users.html',
      controller: 'UserController'
    })
    .state('products', {
      url: '/products',
      templateUrl: 'templates/products.html',
      controller: 'ProductController'
    })
});
