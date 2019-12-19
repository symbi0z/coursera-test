(function() {
'use strict';

angular.module('data')
.config(RouteConfig);

/**
 * Configures the routes and views
 */
RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig ($stateProvider,$urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
  // Routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "home.html"
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categoriesCtrl',
      resolve: {
       menuCategories: function () {
          console.log("resolve getAllCategories");
          return null;
        }
       // ['MenuDataService', function (MenuDataService) {
       //   console.log("resolve getAllCategories");
       //    return MenuDataService.getAllCategories();
       //  }]
      }
    })
    .state('categories.items', {
      //url: '/categories/{category}',
      templateUrl: 'items.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      },
      params: {
        itemId: null
      }
});
};
})();
