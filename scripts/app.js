
angular.module("exchTimeApp", ["ngRoute"]);

angular.module("exchTimeApp").config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/singin", {
            controller: "SingInCtrl",
            template: "views/SingInView.html"
        })
        .when("/main", {
            controller: "Seccion1Ctrl2",
            template: "<h1>Seccion 2</h1>"
        })
}]);