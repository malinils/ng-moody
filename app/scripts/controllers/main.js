'use strict';

/**
 * @ngdoc function
 * @name myMoodAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myMoodAppApp
 */
angular.module('myMoodApp')
  .controller('MainCtrl', function (moodSvc) {
    var main = this;
    main.name = 'Malin';
    main.myMoodScale = [1,2,3,4,5];
    main.todayMood = null;
    main.moodStory = moodSvc.savedMoods;
    main.pickerInput = moment();
    main.todayDate = moment();
    var i = 0;

    main.setMood = function(value){
    	if(value){
    		moodSvc.createNewMood(value, main.pickerInput);
    		main.todayMood = value;
    		main.moodStory = moodSvc.savedMoods;
            i++;
    	}
    };
  });
