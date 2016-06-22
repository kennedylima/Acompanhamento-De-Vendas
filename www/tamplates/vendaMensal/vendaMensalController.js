angular.module('app.vendaMensal',['ionic','chart.js','ngMaterial'])
  .controller('vendaMensalController',function ($scope) {

    $scope.labels = ["Petel CGR", "Petel CBA ", "Petel PVH ", "Petel SGO ", "Petel Treze ", "Pedis "];
    $scope.data = [3000000, 1000000, 500000, 200000, 2000000, 1020500];


    $scope.pizza=true;

    $scope.graficoEmPizza = function () {
      $scope.pizza=true;
      $scope.barra=false;
      $scope.data = [3000000, 1000000, 500000, 200000, 2000000, 1020500];
    }

    $scope.graficoEmBarra = function () {
      $scope.pizza=false;
      $scope.barra=true;
      $scope.data = [[3000000, 1000000, 500000, 200000, 2000000, 1020500]];
    }

    $scope.options={
      tooltipTemplate: "<%= accounting.formatMoney(value, 'R$', 0)%>"
    }


  });
