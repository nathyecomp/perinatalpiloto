angular.module('controllers', [])

.controller('PacienteCreationController',function($scope,Paciente){
Parse.initialize("rfQ7w9oTczTm7Ft1pvbGp0xKtnsLvcXBChb95ITk", "nSt0YHWeBHJyW1HgG6WoreCr1CvqOrZgVLCylljm");
var Paciente = Parse.Object.extend("Paciente");
var paciente = new Paciente();

paciente.set("nome", $scope.paciente.nome);
paciente.set("email", $scope.paciente.email);

//paciente.save({foo: "bar"}).then(function(object) {
 // alert("yay! it worked");
//});

paciente.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('Paciente cadastrado com sucesso: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Erro em criar novo paciente: ' + error.message);
  }
});

})

.controller('MedicoListController',function($scope,Medico){

    Medico.getAll().success(function(data){
        $scope.items=data.results;
    });

    $scope.onItemDelete=function(item){
        Medico.delete(item.objectId);
        $scope.items.splice($scope.items.indexOf(item),1);
    }

})
.controller('MedicoCreationController',function($scope,Medico,$state){

    $scope.medico={};

    $scope.create=function(){
	Parse.initialize("rfQ7w9oTczTm7Ft1pvbGp0xKtnsLvcXBChb95ITk", "nSt0YHWeBHJyW1HgG6WoreCr1CvqOrZgVLCylljm");
			var Medico = Parse.Object.extend("Medico");
			var medico = new Medico();
			medico.set("crm", $scope.medico.crm);
			medico.set("nome", $scope.medico.nome);

			return medico.save(null, {
				success: function(medico) {
					// Execute any logic that should take place after the object is saved.
					alert('Médico cadastrado com sucesso: ' + $scope.medico.crm);
					$state.go('medicos');
				},
				error: function(medico, error) {
					// Execute any logic that should take place if the save fails.
					// error is a Parse.Error with an error code and message.
					alert('Erro em cadastrar medico: ' + error.message);
				}
			});
    }
})
.controller('MedicoEditController',function($scope,Medico,$state,$stateParams){

    $scope.medico={id:$stateParams.id,crm:$stateParams.crm,nome:$stateParams.nome};

    $scope.edit=function(){
	Parse.initialize("rfQ7w9oTczTm7Ft1pvbGp0xKtnsLvcXBChb95ITk", "nSt0YHWeBHJyW1HgG6WoreCr1CvqOrZgVLCylljm");
	var Medico = Parse.Object.extend("Medico");
	var medico = new Medico();
	medico.set("objectId",$stateParams.id);
	medico.set("crm", $scope.medico.crm);
	medico.set("nome", $scope.medico.nome);
		return medico.save(null, {
				success: function(medico) {
					// Execute any logic that should take place after the object is saved.
					alert('Cadastro atualizado com sucesso: ' + $stateParams.id);
					$state.go('medicos');
				},
				error: function(medico, error) {
					// Execute any logic that should take place if the save fails.
					// error is a Parse.Error with an error code and message.
					alert('Erro em atualizar cadastro: ' + error.message);
				}
			});
       // Medico.edit($scope.medico.id,{crm:$scope.medico.crm}).success(function(data){
         //   $state.go('medicos');
        //});
    }

});