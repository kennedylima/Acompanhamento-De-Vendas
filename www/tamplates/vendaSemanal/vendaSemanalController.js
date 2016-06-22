angular.module('app.vendaSemanal',['ionic','chart.js','ngMaterial'])
  .controller('vendaSemanalController', function ($scope) {

    $scope.listaDeEmpresa = [
                              {id:1, nome:'Petel CGR'},
                              {id:2, nome:'Petel CBA'},
                              {id:3, nome:'Petel PVH'},
                              {id:4, nome:'Petel SGO'},
                              {id:5, nome:'Petel Treze'},
                              {id:6, nome:'Pedis'}
                            ];

    $scope.linha=true;

    $scope.graficoEmLinha = function () {
      $scope.linha=true;
      $scope.barra=false;
    }

    $scope.graficoEmBarra = function () {
      $scope.linha=false;
      $scope.barra=true;
    }

    $scope.obterGrafico = function (empresaSelecionada) {
      $scope.labels = ["Segunda-Feira", " Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira ", "Sábado"];

      if (empresaSelecionada == 1) {
        $scope.data = [
          [3514, 8145, 20145, 5487, 30514, 4016]
        ];

      }else if(empresaSelecionada == 2){
        $scope.data = [
          [37514, 80145, 20145, 54487, 300514, 47016]
        ];
      }else if(empresaSelecionada == 3){
        $scope.data = [
          [3514, 8145, 20145, 5487, 300514, 47016]
        ];
      }else if(empresaSelecionada == 4){
        $scope.data = [
          [2847, 77451, 95478, 31265, 272203, 4574]
        ];

      }else if(empresaSelecionada == 5){
        $scope.data = [
          [514, 5412, 4478, 555412, 84878, 63215]
        ];
      }else if(empresaSelecionada == 6){
        $scope.data = [
          [12014, 84500, 99000, 4581, 64512, 78451]
        ];
      }

      $scope.options={
        tooltipTemplate: "<%= accounting.formatMoney(value, 'R$', 0)%>"
      }

    };


  });


