'use strict';

mdTheming.$inject = [ '$mdThemingProvider' ];
export function mdTheming($mdThemingProvider) {
    $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
}
