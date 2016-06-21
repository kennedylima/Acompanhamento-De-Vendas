angular.module('app.vendaDiaria',['ionic','chart.js'])
  .controller('vendaDiariaController',function ($scope) {

    $scope.labels=["Petel CGR","Petel CBA ","Petel PVH ", "Petel SGO ", "Petel Treze ","Pedis "];
    $scope.data=[
                  [350400,300000,18080,15514,55141,12547]
                ];

  });



/*
 animation: false,
 pointDot: false,
 datasetStrokeWidth: 0.5
 showScale: false,
 showTooltips: false,
 pointDot: false,
 datasetStrokeWidth: 0.5*/
