'use strict';

/**
 * @ngdoc service
 * @name myMoodAppApp.moodSvc
 * @description
 * # moodSvc
 * Service in the myMoodAppApp.
 */
angular.module('myMoodApp')
  .service('moodSvc', function () {
  	var that = this;
    // AngularJS will instantiate a singleton by calling "new" on this function
    that.savedMoods = [];
    that.createNewMood = function(value, date){
    	if(value && date){
			var newMood = new Mood(value, date);
			that.savedMoods.push(newMood);
		}
    };

    var Mood = function(value, timestamp){
    	this.value = value;
    	this.date = new Date(timestamp);
    	this.get = function(){
    		return {value: this.value, date: this.date};
    	};
    };
  });
