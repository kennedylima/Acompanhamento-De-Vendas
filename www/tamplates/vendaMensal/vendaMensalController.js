angular.module('app.vendaMensal',['ionic','chart.js','ngMaterial'])
  .controller('vendaMensalController',function ($scope) {

    $scope.nomeDasEmpresas = ["Petel CGR", "Petel CBA ", "Petel PVH ", "Petel SGO ", "Petel Treze ", "Pedis "];
    $scope.dados = [3000000, 1000000, 500000, 200000, 2000000, 1020500];


    canvas = {};
    chart = {};
    var graficoCarregado = false;

    $scope.graficoEmPizza = function () {
      criarGraficoEmPizza();
    }

    $scope.graficoEmBarra = function () {
      criarGraficoEmBarra();
    }

    $scope.options={
      tooltipTemplate: "<%= label +' '+accounting.formatMoney(value, 'R$', 0)%>"
    }

    var criarGraficoEmPizza = function () {
      if(graficoCarregado){
        chart.destroy();
      }
      canvas = document.getElementById('graficoMensal').getContext('2d');
      
      var dados = [
        {
          value: 3000000,
          color:"#878BB6",
          label: "Petel CGR"
        },
        {
          value : 1000000,
          color : "#4ACAB4",
          label: "Petel CBA"
        },
        {
          value : 500000,
          color : "#FF8153",
          label: "Petel PVH"
        },
        {
          value : 200000,
          color : "#BFEA88",
          label: "Petel SGO"
        },
        {
          value : 2000000,
          color : "#F0EA88",
          label: "Petel Treze"
        },
        {
          value : 1020500,
          color : "#1FEA88",
          label: "Pedis"
        }
      ];

      var options = {
        segmentShowStroke : false,
        animateScale : true,
        tooltipTemplate: "<%= label +' '+accounting.formatMoney(value, 'R$', 0)%>"
      }

      chart = new Chart(canvas).Pie(dados,options);
      graficoCarregado = true;

    };

    var criarGraficoEmBarra = function () {

      if(graficoCarregado){
        chart.destroy();
      }

      var canvas = document.getElementById('graficoMensal').getContext('2d');

      grafico = {
        labels: $scope.nomeDasEmpresas,
        datasets: [
          {
            fillColor : "rgba(12,96,238, 0.3)",
            strokeColor : "#BBDEFB",
            pointColor : "#fff",
            pointStrokeColor: "#9DB86D",
            data: $scope.dados
          }
        ]

      };

      chart = new Chart(canvas).Bar(grafico,$scope.options);
      graficoCarregado = true;
    };


  });
