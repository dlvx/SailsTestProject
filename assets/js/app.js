var app = angular.module('app', ['ngSails', 'toastr', 'ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/auth/login.html',
      controller: 'LoginController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/auth/register.html',
      controller: 'RegisterController'
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutController'
    })
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
