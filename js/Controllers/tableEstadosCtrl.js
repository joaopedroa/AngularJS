angular.module("listaTelefonica").controller("tableEstadosCtrl", function ($scope,$rootScope,estadosAPI){
	
	var idEstado = $scope.idEstado;	

		$scope.getEstados = function(idEstadoParam){
				estadosAPI.getEstados(idEstadoParam).then(data =>{
					$scope.estados = data.data;
					console.log('Estados: ',$scope.estados);
				})
			}

			$scope.getEstados(idEstado);
})