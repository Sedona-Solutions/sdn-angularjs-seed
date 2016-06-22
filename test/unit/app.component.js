import angular from 'angular';
import ngMock from 'angular-mocks';
import 'app/app.component';

describe('app component', () => {

    beforeEach(ngMock.module('sdnSeed'));

    let element, ctrl;

    beforeEach(inject(($rootScope, $compile) => {
        let scope = $rootScope.$new();
        element = angular.element('<sdn-seed></sdn-seed>');
        $compile(element)(scope);
        scope.$digest();
        ctrl = element.controller('sdnSeed');
    }));
    
    describe('controller', () => {
        it('should have a toggleLeftMenu function', () => {
            expect(angular.isFunction(ctrl.toggleLeftMenu)).toBe(true);
        });
    });
});
