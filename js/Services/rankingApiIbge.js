//Criando serviço factory
angular.module("listaTelefonica").factory("rankingAPI", function($http,config){

	var _getRankings = function(){
		return $http.get(config.baseUrl + "/v2/censos/nomes/ranking");
	}

	return {
		getRankings: _getRankings
	}

});