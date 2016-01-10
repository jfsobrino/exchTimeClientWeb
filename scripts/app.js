var eTApp = angular.module('exchTimeApp', ['ngRoute', 'SingInCtrl']);

eTApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/SingInView.html',
            controller: 'FormSingInCtrl'
        });
}]);