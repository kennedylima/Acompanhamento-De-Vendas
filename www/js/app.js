// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var appAcompanhamentoDeVendas = angular.module('app', [ 'ionic','chart.js','ngAria', 'ngMaterial','app.vendaDiaria','app.vendaSemanal', 'app.inicial', 'app.vendaMensal'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


  .config(function($stateProvider,$urlRouterProvider,$mdThemingProvider){

      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('grey');

      $stateProvider
        .state('vendaDiaria',{
            url:'/vendaDiaria',
            templateUrl:'tamplates/vendaDiaria/vendaDiaria.html',
            controller: 'vendaDiariaController'
        })
        .state('vendaMensal',{
          url:'/vendaMensal',
          templateUrl:'tamplates/vendaMensal/vendaMensal.html',
          controller: 'vendaMensalController'
        })
        .state('vendaSemanal',{
          url:'/vendaSemanal',
          templateUrl:'tamplates/vendaSemanal/vendaSemanal.html',
          controller: 'vendaSemanalController'
        })
        .state('inicial',{
          url:'/inicial',
          templateUrl:'tamplates/inicial/inicial.html',
          controller: 'inicialController'
        });

      $urlRouterProvider.otherwise('/inicial');
  })

  .controller("AppController",function ($scope,$ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.titulo="Acompanhamento de Vendas";

    $scope.alterarTitulo = function (titulo) {
      $scope.titulo = titulo;

    }

  });
  /*.controller("ExampleController", function($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.options = {
      animation: false,
      showScale: false,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 0.5
    };



  })

  .controller("PieCtrl", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
    $scope.options = {
      animation: false,
      showScale: false,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 0.5
    };

  });*/


