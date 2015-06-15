// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//angular.module('periApp', ['ionic'])
angular.module('periApp', ['ionic','controllers','periApp.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	//$state.go('todos');
  });
  
})

//.config(function($stateProvider){
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //.state('app', {
   // url: "/app",
    //abstract: true,
    //templateUrl: "templates/menu.html",
    //controller: 'AppCtrl'
  //})
        .state('medicos',{
           url:'/medicos',
           controller:'MedicoListController',
           templateUrl:'views/medicos.html',
		   cache:false
        })
		.state('createMedico',{
            url:'/medico/new',
            controller:'MedicoCreationController',
            templateUrl:'views/add-medico.html'
        })
		.state('editMedico',{
            url:'/medico/edit/:id/:crm',
            controller:'MedicoEditController',
            templateUrl:'views/edit-medico.html'
        });
		
		$urlRouterProvider.otherwise('/medicos');
}); 
