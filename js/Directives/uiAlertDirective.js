angular.module("listaTelefonica").directive("uiAlert",function(){
	return {
		template: "<div>{{message}}</div>",
		replace:true,
		restrict: "AE",
		scope: {
			message: "@message"
		}
	};
});