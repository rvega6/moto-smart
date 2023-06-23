var app = angular.module("motoSmart", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/informacion", {
        templateUrl: "informacion.html",
        controller: "motoSmart"
    }).when("/redenciones",{
        templateUrl: "redenciones.html",
        controller: "motoSmart"
    }).when("/informacion.html/informacion-mes",{
        templateUrl: "/informacion-mes.html",
        controller: "motoSmart"
    }).when("/informacion-todo",{
        templateUrl: "/informacion-todo.html",
        controller: "motoSmart"
    }).when("/redenciones-por-redimir",{
        templateUrl: "/redenciones-por-redimir.html",
        controller: "motoSmart"
    }).when("/redenciones.html/redenciones-redimidos",{
        templateUrl: "/redenciones-por-redimir.html",
        controller: "motoSmart"
    }).when("/informacion-mes",{
        templateUrl: "/informacion-mes.html",
        controller: "motoSmart"
    })
    ;
})

app.controller('motoSmart', function($scope, $window) {
    $scope.redirigir = function(url) {
      $window.location.href = url;
    };
  });