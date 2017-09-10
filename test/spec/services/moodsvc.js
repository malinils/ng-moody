'use strict';

describe('Service: moodSvc', function () {

  // load the service's module
  beforeEach(module('myMoodAppApp'));

  // instantiate service
  var moodSvc;
  beforeEach(inject(function (_moodSvc_) {
    moodSvc = _moodSvc_;
  }));

  it('should do something', function () {
    expect(!!moodSvc).toBe(true);
  });

});
