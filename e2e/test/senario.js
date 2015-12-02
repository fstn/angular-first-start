describe('PhoneCat controllers', function () {

    describe('PhoneListCtrl', function () {
        var scope, ctrl, $httpBackend;

        beforeEach(function(){
                   browser.get('index.html');
                   });


        it('should render phone specific links', function () {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function (url) {
                expect(url).toBe('http://127.0.0.1:4000/index.html#/phones/nexus-s');
            });
        });
    });
});
