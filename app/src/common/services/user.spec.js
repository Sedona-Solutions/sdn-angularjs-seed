import angular from 'angular';
import 'angular-mocks';
import userModule from './user';

describe('CurrentUser', () => {
    beforeEach(angular.mock.module(userModule.name));

    let CurrentUser, scope;

    beforeEach(inject(($injector) => {
        CurrentUser = $injector.get('CurrentUser');
        scope = $injector.get('$rootScope');
    }));

    describe('.get', () => {
        it('has a user', () => {
            let user;
            CurrentUser.getUser().then((data) => {
                user = data;
            });

            scope.$digest();

            expect(user).toEqual({ name: 'Panda' });
        });
    });

});
