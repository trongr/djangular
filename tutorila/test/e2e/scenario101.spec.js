describe('Home Pages', function() {

    var prot = protractor.getInstance();

    it('should load the homepage', function() {
        prot.get('/');
        expect(ptor.findElement(protractor.By.id('view-container')).getText()).toBe('Welcome Home...');
    });

});