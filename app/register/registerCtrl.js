(
    function () {
        'use strict';
        angular.module('eKart.register')
            .controller('registerCtrl', ["$scope", "countriesFact",
               function ($scope, countriesFact) {

                   

                    countriesFact.getCountries()
                        .success(function (response) {
                            $scope.countries = response.countries;
                        })
                        .error(function (response) {
                            console.log(response);
                        });


                    var states = [
                        {
                            name: "New York",
                            "code": "NY",
                            countryCode: "US"
                        },
                        {
                            name: "Telangana",
                            "code": "TG",
                            countryCode: "IN"
                        },
                        {
                            name: "New Jersy",
                            "code": "NJ",
                            countryCode: "US"
                        }]

                    $scope.registerUser = {
                        firstName: "",
                        lastName: "",
                        address: "",
                        gender: "",
                        age: "",
                        email: "",
                        phoneNumber: "",
                        address: {
                            country: "",
                            state: "",
                            city: "",
                            streetNumber: "",
                            zipcode: ""
                        }
                    };

                    $scope.countryChanged = function () {
                        $scope.states = [];
                        angular.forEach(states, function (item) {
                            if (item.countryCode == $scope.selectedCountry.code) {
                                $scope.states.push(item);
                            }
                        });
                    };

                    $scope.register = function () {
                        $scope.registerUser.address.country = $scope.selectedCountry.code;
                        console.log($scope.registerUser);
                    }
              }]);
    }
)();
