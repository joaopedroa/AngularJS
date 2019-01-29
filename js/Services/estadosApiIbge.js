angular.module("listaTelefonica").service('estadosAPI',function($http,config){
	this.getEstados = function(idEstado){
		if(idEstado == null){
			return $http.get(config.baseUrl + "/v1/localidades/estados/");
		}
		else{
			return $http.get(config.baseUrl + "/v1/localidades/estados/" + idEstado + "/mesorregioes");	
		}
	}

})