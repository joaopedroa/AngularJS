angular.module("listaTelefonica").directive("uiDate",function(){
	return {
		require: "ngModel", // para o parametro ctrl funcionar é preciso da propriedade "require".
		link: function(scope,element,attrs,ctrl){
			
			var _formatDate = function(date){
				
				date = date.replace(/[^0-9]+/g, ""); //trocar tudo que nao for digito por vazio.
				
				if(date.length > 2){
					date = date.substring(0,2) + '/' + date.substring(2);
				}
				if(date.length > 5 ){
					date = date.substring(0,5) + '/' + date.substring(5,9);
				}

				return date;
			}

			element.bind("keyup",function() {
				//console.log(ctrl.$viewValue); // pega o valor do ngModel onde a diretiva foi colocada.
					ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
					ctrl.$render();
			});

			// so mostra os dados quando a data estiver validada. Transforma a data digitada em UNIX
			ctrl.$parsers.push(function(value){
				if(value.length === 10){
					var dateArray = value.split('/');
					return new Date(dateArray[2], dateArray[1]-1,dateArray[0]).getTime();
				}
			});

			// transformando dado de UNIX para data tipo DATE

			ctrl.$formatters.push(function(value){
				return $filter('date')(value,"dd/MM/yyyy");
			});
		}
	};
});