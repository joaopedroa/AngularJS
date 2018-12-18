angular.module("listaTelefonica").filter('filterNome',function(){

	return function(input){
		var listaDeNomes = input.split(" ");
		var listaFormatada = listaDeNomes.map(function(nome){
			if(nome == "da" || nome == "de") return nome.toLowerCase();
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		
		return listaFormatada.join(" ");
	}

});