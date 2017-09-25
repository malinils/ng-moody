'use strict';

/**
 * @ngdoc function
 * @name myMoodAppApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the myMoodAppApp
 */
angular.module('myMoodApp')
  .controller('ChartCtrl', function (moodSvc) {
  	  var chart = this;
  	  chart.labels = _.map(moodSvc.savedMoods, 'date');
	  chart.savedMoods = moodSvc.savedMoods;
	  chart.data = _.map(moodSvc.savedMoods, 'value');
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
