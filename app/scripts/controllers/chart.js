'use strict';

/**
 * @ngdoc function
 * @name myMoodAppApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the myMoodAppApp
 */
angular.module('myMoodApp')
  .controller('ChartCtrl', function () {
  	  var chart = this;
	  /*chart.labels = ['Mood 1', 'Mood 2', 'Mood 3', 'Mood 4', 'Mood 5'];
	  chart.data = [1, 4, 3, 10, 4];*/
	  chart.labels = ['Dag 1','Dag 2','Dag 3','Dag 4','Dag 5','Dag 6','Dag 7','Dag 8','Dag 9'];
	  chart.data = [1, 4, 3, 5, 4, 4, 5, 4, 2];
	  chart.options = {};
	  // chart.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  chart.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        /*{
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }*/
	      ]
	    }
	  };
	});
