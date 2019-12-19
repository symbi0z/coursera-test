(function () {
'use strict';

angular.module('data')
.service('MenuDataService ', MenuDataService );

MenuDataService .$inject = ['$http','ApiBasePath'];
function MenuDataService ($http,ApiBasePath) {
  var service = this;

  service.getAllCategories  = function () {
    console.log("MenuDataService getAllCategories");
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

     return promise.then(function (response) {
      console.log(response.data);

      return response.data;
    });
  };

  service.getItemsForCategory  = function (categoryShortName) {
    console.log("MenuDataService getItemsForCategory"+categoryShortName);
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      param : {
        category : categoryShortName
      }
    });

     return promise.then(function (response) {
      console.log(response.data);

      return  response.data;
    });
  };
}



})();
