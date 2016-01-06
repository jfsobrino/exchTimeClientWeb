
var exchTimeApp = angular.module("exchTimeApp", ["ngRoute", "route-segment", "view-segment"]);

exchTimeApp.module("exchTimeApp").config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/seccion1", {
            controller: "IndexController",
            template: "<h1>Seccion 1</h1>"
        })
        .when("/seccion2", {
            controller: "Seccion1Ctrl2",
            template: "<h1>Seccion 2</h1>"
        })
}]);

angular.module("exchTimeApp").controller("Seccion1Ctrl1", function () { /* codigo */ });
angular.module("exchTimeApp").controller("Seccion1Ctrl2", function () { /* codigo */ });