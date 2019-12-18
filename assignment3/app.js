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
    // promise.then(function(response) {
    //   ctrl.found = response.data;
    // }).catch(function(error){
    //   console.log(error);
    // });
    ctrl.found = promise;
  };

  ctrl.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$q'];
function MenuSearchService($q) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    // var promise = $http({
    //   method: "GET",
    //   url: (ApiBasePath + "/menu_items.json")
    // });
    //
    //  return promise.then(function (response) {
    //   console.log(response.data);
    var data = [
      {id:877,short_name:"A1",name:"Won Ton Soup with Chicken",description:"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",price_small:2.55,price_large:5.0,small_portion_name:"pint",large_portion_name:"quart"}
      ,{id:878,short_name:"A2",name:"Egg Drop Soup",description:"chicken broth with egg drop",price_small:2.25,price_large:4.5,small_portion_name:"pint",large_portion_name:"quart"},{id:879,short_name:"A3",name:"Chicken Corn Soup",description:"clear chicken broth with creamy corn and egg drop with white meat chicken pieces",price_small:2.75,price_large:5.5,small_portion_name:"pint",large_portion_name:"quart"},{id:880,short_name:"A4",name:"Hot and Sour Soup",description:"tofu, chicken, mushroom, bamboo shoot, and egg",price_small:2.55,price_large:5.0,small_portion_name:"pint",large_portion_name:"quart"},{id:881,short_name:"A5",name:"Egg Drop with Won Ton Soup",description:"chicken soup with egg drop and won tons",price_small:3.0,price_large:6.0,small_portion_name:"pint",large_portion_name:"quart"},{id:882,short_name:"A6",name:"Chicken Noodle (or Rice) Soup",description:"clear broth and lo mein noodles or white rice, chicken pieces",price_small:2.55,price_large:5.0,small_portion_name:"pint",large_portion_name:"quart"},{id:883,short_name:"A7",name:"Garden Vegetable Soup",description:"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)",price_small:2.55,price_large:5.0,small_portion_name:"pint",large_portion_name:"quart"},{id:884,short_name:"A8",name:"Garden Vegetable Soup with Tofu",description:"clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas) with tofu pieces",price_small:3.0,price_large:6.0,small_portion_name:"pint",large_portion_name:"quart"}
    ];

       // process result and only keep items that match
      var foundItems=[];

      for (var i = 0; i < data.length; i++) {
        if(data[i] != null && data[i].description != null && data[i].description.indexOf(searchTerm) !== -1) {
          foundItems.push(data[i]);
        }
      }

      // return processed items
      return foundItems;
  //  });
  };
}



})();
