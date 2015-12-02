describe('it-phonecat', function () {

    describe('it-phonecat', function () {
        var scope, ctrl, $httpBackend;

        // Load our app module definition before each test.
        beforeEach(module('it-phonecat'));

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service in order to avoid a name conflict.
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').
            respond([{
                name: 'Nexus S'
                            }, {
                name: 'Motorola DROID'
                            }]);

            scope = $rootScope.$new();
            ctrl = $controller('PhoneListCtrl', {
                $scope: scope
            });
        }));

        it('should contain 2 phones'),
            function () {
                expect(scope.phones.size).toBe(2);
            };
        it('should set the default value of orderProp model'),
            function () {
                expect(scope.orderProp).toBe('age');
            };
        it('should render phone specific links', function () {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function (url) {
                expect(url).toBe('/phones/nexus-s');
            });
        });
    });
});
