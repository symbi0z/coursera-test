(function () {
"use strict";

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['menuItems'];
function ItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems.menu_items;
}


})();
