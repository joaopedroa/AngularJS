angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope,$filter,rankingAPI,$location,estadosAPI,SerialGenerate){
			console.log(SerialGenerate.generate());
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
				{nome:$filter('uppercase')("Joao"), telefone: 99998888, operadora:{nome:"Vivo",codigo:15, categoria:"Celular"},data: new Date(),cor: "blue"},
				{nome:"Pedro", telefone: 99998855,operadora:{nome:"Oi",codigo:14, categoria:"Celular"},data: new Date() ,cor: "yellow"},
				{nome:"Marcos", telefone: 99995555,operadora:{nome:"Tim",codigo:41, categoria:"Celular"}, data: new Date(),cor: "red"},
				{nome:"Maria", telefone: 999985555,operadora:{nome:"GVT",codigo:25, categoria:"Fixo"},data: new Date(), cor: "green"},
			];
			$scope.operadoras = [
				{nome:"Oi",codigo:14, categoria:"Celular",preco:3},
				{nome:"Vivo",codigo:15, categoria:"Celular",preco:3},
				{nome:"Tim",codigo:41, categoria:"Celular",preco:3},
				{nome:"GVT",codigo:25, categoria:"Fixo",preco:3},
				{nome:"Embratel",codigo:21, categoria:"Fixo",preco:3}
			];
			

			$scope.inserir = function(contato){
					contato.data = new Date();						
					$scope.contatos.push(angular.copy(contato));					
					delete $scope.contato;
					$scope.contatoValid.$setPristine();
					$location.path('/contatos');
			}

			$scope.apagar = function(contatos){

				$scope.contatos = contatos.filter(function(x){
					if(!x.selecionado) return x;				
				});
			}

			$scope.isContatoSelecionado = function(contatos){
					return contatos.some(function(x){
						return x.selecionado;
					});
			}

			$scope.ordernarPor = function(campo){
				$scope.ordenado = campo;
				$scope.ordem = !$scope.ordem ;
			}

			// Teste API IBGE
			$scope.getRankings = function(){
				rankingAPI.getRankings().then(data =>{
					$scope.rankings = data.data[0].res;
					console.log('Rankings: ',$scope.rankings);
				});
			}

			$scope.getEstados = function(){
				estadosAPI.getEstados().then(data =>{
					$scope.estados = data.data;
					console.log('Estados: ',$scope.estados);
				})
			}
			// chamadas de funções
			$scope.getRankings();
			$scope.getEstados();

		});