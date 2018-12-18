// Criando serviço do tipo provider
angular.module("listaTelefonica").provider('SerialGenerate',function(){
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