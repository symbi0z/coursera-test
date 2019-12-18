(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems :"<",
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.found = [];
  ctrl.searchTerm = "";

  ctrl.narrowItDown = function () {
    if(ctrl.searchTerm == "") {
        ctrl.found = [];
        return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function(response) {
      ctrl.found = response.data;
    }).catch(function(error){
      console.log(error);
    });
  };

  ctrl.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$q'];
function MenuSearchService($q) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

     return promise.then(function (response) {
      console.log(response.data);
       // process result and only keep items that match
      var foundItems=[];

      // return processed items
      return foundItems;
    });
  };
}



})();
