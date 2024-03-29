app.controller('MainCtrl', function($scope, $http) {
    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;
    $scope.usuario = null;
    $id = null;

    $http.get("/proyecto1_banco_server/api/Session").success(function(result) {
        $scope.usuario = result;

        //////vamos obteniendo la cuenta y los movimientos de dicha cuenta
        $http.get("/proyecto1_banco_server/api/CuentaBancaria/" + $scope.usuario.idUsuario + "/MovimientosBancarios").success(function(r) {
            $scope.movimientosBancarios = r;    
        });
        $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/" + $scope.usuario.idUsuario).success(function(res) {
            $scope.cuentaBancaria = res;
        });
    });

    $scope.logout = function() {
        $http.delete("/proyecto1_banco_server/api/Session").success(function(result) {
        }).error(function() {
            alert("No se ha podido eliminar la session");
        });
    };
});

/*app.controller('MainCtrl', function($scope, $http) {
 $scope.cuentaBancaria = null;
 $scope.movimientosBancarios = null;
 $scope.usuario = null;
 $id = null;
 
 $http.get("/proyecto1_banco_server/api/Session").success(function(result) {
 $scope.usuario = result;
 //$id = $scope.usuario.idUsuario;
 // alert("guarda el id---->" + $id);
 
 //////vamos obteniendo la cuenta y los movimientos de dicha cuenta
 $http.get("/proyecto1_banco_server/api/CuentaBancaria/"+$scope.usuario.idUsuario+"/MovimientosBancarios").success(function(r) {
 $scope.movimientosBancarios = r;
 //   alert("saca los movimientos---->" + $scope.movimientosBancarios);
 });       
 $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/"+$scope.usuario.idUsuario).success(function(res) {
 $scope.cuentaBancaria = res;
 //   alert("saca la cuenta bancaria---->" + $scope.cuentaBancaria);
 });
 });
 
 $scope.logout = function() {
 $http.delete("/proyecto1_banco_server/api/Session").success(function(result) {
 }).error(function() {
 alert("No se ha podido eliminar la session");
 });
 };
 });*/
