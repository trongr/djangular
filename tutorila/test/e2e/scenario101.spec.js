describe('Home Pages', function() {

    var pro = protractor.getInstance();

    it('should load the homepage', function() {
        pro.get('/');
        expect(pro.getTitle()).toBe('Djangular');

        // alternative
        pro.getTitle().then(function(title){
            expect(title).toBe("Djangular")
        })
    });

});
