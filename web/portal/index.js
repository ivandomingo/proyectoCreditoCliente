var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "../cliente/main.html",
                controller: "ClientemainCtrl"
            })
               
        .otherwise({
        redirectTo: "/"
    });
});