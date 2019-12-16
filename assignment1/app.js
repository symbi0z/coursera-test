(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckerCtrl', LunchCheckerCtrl);

LunchCheckerCtrl.$inject = ['$scope', '$filter'];
function LunchCheckerCtrl($scope, $filter) {
  $scope.lunch = "";
  $scope.lunchMessage = "";
  $scope.lunchColor = "";

  $scope.checkLunch = function () {
    if($scope.lunch == "") {
        $scope.lunchMessage = "Please enter data first";
        $scope.lunchColor = "red";
        return;
    }
    var lunchSize = computeCommaSize($scope.lunch);
    if(lunchSize == 0) {
        $scope.lunchMessage = "Please enter data first";
        $scope.lunchColor = "red";
    }else if (lunchSize <= 3) {
        $scope.lunchMessage = "Enjoy!";
        $scope.lunchColor = "green";
    }else {
        $scope.lunchMessage = "Too much!";
        $scope.lunchColor = "green";
    }
  };
}

function computeCommaSize(string) {
  var words = string.split(',');
  if(words != null) {
    var size = 0;
    for (var i = 0; i < words.length; i++) {
      if(words[i] != null && words[i].trim() != "") {
        size ++;
      }
    }
    return size;
  }
}


})();
