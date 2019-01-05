
angular.module("SerialGenerate",[]);
/* PARA SUBSTITUIR O TEMPLATEURL NA CRIAÇÃO DE DIRETIVAS
angular.module("SerialGenerate").run(function ($templateCache){
	$templateCache.put('view/accordion.html','<div>Testando</div>');
});
*/
angular.module("SerialGenerate").provider('SerialGenerate',function(){
	var _length;

	this.setLength = function(valor){
		 _length = valor;
	}

	this.$get = function(){
		return {
			generate: function(){
				var serial = "";
				while(serial.length < _length){
					serial += String.fromCharCode(Math.floor(Math.random() * 64 ) + 32);
				}
				return serial;
			}
		}
	}
});