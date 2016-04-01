(
    function(){
        'use strict';
        angular.module('eKart.register')
              .controller('registerCtrl',   ["$scope",function($scope){
                  
                  $scope.registerUser=function(){
                      console.log($scope);
                  };
              
              }]);
    }
)();