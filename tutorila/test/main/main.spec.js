describe('main module', function() {

  beforeEach(module('djangular'));

  it('should test the main controller', inject(function($scope) {
        expect(0).toBe(0);
        expect(1).toBe(0)
  }));


});
