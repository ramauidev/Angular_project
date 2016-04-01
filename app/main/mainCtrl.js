(
   function(){
       'use strict';
       angular.module('eKart')
              .controller('mainCtrl',["$scope",function($scope){
                  $scope.content="I am the content";
                  $scope.brandName="e-Karttttt";
                    $scope.navUrl="/app/navigation/navigation.tpl.html";
                  
                  $scope.loadContent = function(type){
                    if(type=='register'){
                        $scope.contentUrl="/app/register/register.tpl.html"
                       }
                      if(type=="login"){
                          $scope.contentUrl="/app/login/login.tpl.html"
                          
                      }
                  };
                
                                }]);
   }
)();