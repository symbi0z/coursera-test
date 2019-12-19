(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'items.template.html',
  bindings: {
    items: '<'
  }
});

})();
