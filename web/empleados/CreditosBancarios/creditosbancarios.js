app.controller('CreditoBancarioInsertCtrl', function($scope, $http, $location) {
    $scope.creditoBancario = null;

    $scope.insertCreditoBancario = function() {
        $http.post("/proyecto1_banco_server/api/Credito/", $scope.creditoBancario).success(function(result) {
            $scope.ListaMensajes = [];
            $scope.creditoBancario = result;
            $location.path("/CuentasBancarias");
        }).error(function(data, status) {
            switch (status) {
                case 400 :
                    data = 'Bad Request';
                    break;
                case 500 :
                    data = 'Internal Server Error';
                    break;
                default:
                    data = 'Could not perform this request';
                    break;
            }
            $scope.ListaMensajes = [{datos: status, mensaje: data}];
            $location.path("/CuentasBancariasInsert/");
        });
    };
});

app.controller('CuentasBancariasReadAllCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;

    $http.get("/proyecto1_banco_server/api/CuentasBancarias").success(function(result) {
        $scope.cuentasBancarias = result;
    });

    $scope.mostrarCuentas = function() {
        $http.get("/proyecto1_banco_server/api/CuentasBancarias").success(function(result) {
            $scope.cuentasBancarias = result;
        });
        $location.path("/CuentasBancarias");
    };
});
