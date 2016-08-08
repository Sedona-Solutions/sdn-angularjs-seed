import * as CONFIG from 'config/config.json!';
import { lazyLoadStateFactory } from 'common/utils/routes';

export let mdTheming = ($mdThemingProvider) => {
    $mdThemingProvider.theme(CONFIG.mdTheme.name)
        .backgroundPalette(CONFIG.mdTheme.bg)[CONFIG.mdTheme.color]();
};
mdTheming.$inject = ['$mdThemingProvider'];

export let lazyLoadConfig = ($futureStateProvider, $httpProvider) => {
    $httpProvider.useApplyAsync(true);
    $futureStateProvider.stateFactory('lazy', lazyLoadStateFactory);
};
lazyLoadConfig.$inject = ['$futureStateProvider', '$httpProvider'];

export let html5modeConfig = ($locationProvider) => {
    $locationProvider.html5Mode(CONFIG.html5mode);
};
html5modeConfig.$inject = ['$locationProvider'];

export let debugConfig = ($logProvider, $compileProvider, $ocLazyLoadProvider) => {
    $logProvider.debugEnabled(CONFIG.debug);

    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $compileProvider.debugInfoEnabled(CONFIG.debug);
    $ocLazyLoadProvider.config({ debug: CONFIG.debug });
};
debugConfig.$inject = ['$logProvider', '$compileProvider', '$ocLazyLoadProvider'];
