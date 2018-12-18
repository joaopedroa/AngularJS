angular.module("listaTelefonica").service('estadosAPI',function($http,config){
	this.getEstados = function(){
		return $http.get(config.baseUrl + "/v1/localidades/estados/");
	}

})