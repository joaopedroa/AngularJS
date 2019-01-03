
angular.module("listaTelefonica").directive("uiAccordionPai",function(){

	return{
		controller: function($scope,$element,$attrs){
			
			var accordions = [];
			
			this.registerAccordion = function(accordi){
				accordions.push(accordi);
				
			};

			this.closeAll = function(){
				accordions.forEach(function(x){
					x.isOpened = false;
				});
			}

		}
	}

});

angular.module("listaTelefonica").directive("uiAccordion",function(){
	return{
		template: '<div class="cc"><div class="title" ng-click="opened()">{{titulo}}</div> <div class="content" ng-show="isOpened" ng-transclude></div></div>',
		transclude:true,
		scope:{
			titulo : '@titulo'
		},
		require: "^uiAccordionPai",
		link: function(scope, element,attrs,ctrl){
			ctrl.registerAccordion(scope);
			scope.opened =function(){

				ctrl.closeAll();
				scope.isOpened = !scope.isOpened ;

			}
		}
	}
	

});