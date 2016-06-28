export let mdTheming = ($mdThemingProvider) => {
    $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
};

mdTheming.$inject = ['$mdThemingProvider'];
