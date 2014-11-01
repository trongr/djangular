describe('Home Pages', function() {

    var pro = protractor.getInstance()

    beforeEach(function(){

    })

    it('should load the homepage', function() {
        pro.get('/');
        expect(pro.getTitle()).toBe('Djangular');

        // alternative
        pro.getTitle().then(function(title){
            expect(title).toBe("Djangular")
        })
    });

    it("clicking a link to go somewhere else", function(){
        var elmt = pro.findElement(protractor.By.id('googlelink'))
        expect(elmt.getText()).toBe("click here to go to google")
        elmt.click().then(function(){
            // have to use browser.driver because destination page
            // (google.com) isn't an angular app, so can't use
            // protractor on it
            expect(browser.driver.getCurrentUrl()).toContain("google")
        })
    })

});
