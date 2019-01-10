angular.module("listaTelefonica").config(function($routeProvider){
	$routeProvider.when('/contatos',{
		templateUrl: 'view/contatos.html',
		controller: 'listaTelefonicaCtrl'
	});
	$routeProvider.when('/novoContato',{
		templateUrl: 'view/novoContato.html',
		controller: 'listaTelefonicaCtrl'
	});
	// caso nao encontre nenhuma rota
	$routeProvider.otherwise({redirectTo: "/contatos"})
});