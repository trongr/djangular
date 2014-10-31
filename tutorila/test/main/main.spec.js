describe('main module', function() {

    beforeEach(module('djangular'));

    var MainCtrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.newpost = "my very new post"
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    xit('alternate example injecting controller', inject(function($rootScope, $controller) {
        var scope = $rootScope.$new()
        scope.newpost = "my new post"
        var MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
        scope.addpost()
        expect(scope.posts.length).toBe(1)
    }));

    it('new posts length 0', function() {
        expect(scope.posts.length).toBe(0);
    });

    it("adding new post to posts", function() {
        expect(scope.posts.length).toBe(0)
        scope.addpost()
        expect(scope.posts.length).toBe(1)
        scope.addpost()
        expect(scope.posts.length).toBe(2)
    })

});