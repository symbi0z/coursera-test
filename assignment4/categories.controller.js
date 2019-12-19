(function () {
"use strict";

angular.module('data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['menuCategories'];
function CategoriesController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
