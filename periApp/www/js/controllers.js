angular.module('controllers', [])

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
        Medico.create({crm:$scope.medico.crm}).success(function(data){
            $state.go('medicos');
        });
    }
})
.controller('MedicoEditController',function($scope,Medico,$state,$stateParams){

    $scope.medico={id:$stateParams.id,crm:$stateParams.crm};

    $scope.edit=function(){
        Medico.edit($scope.medico.id,{crm:$scope.medico.crm}).success(function(data){
            $state.go('medicos');
        });
    }

});