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
	  chart.labels = ['Mood 1', 'Mood 2', 'Mood 3', 'Mood 4', 'Mood 5'];
	  chart.data = [1, 4, 3, 10, 4];
	  chart.options = {};
	  chart.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  chart.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	  };
	});
