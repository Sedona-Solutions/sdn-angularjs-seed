/* global document */

import angular from 'angular' ;
import { AppComponent } from 'app/app.component';
import { AppModule } from 'app/app.module';

angular.element(document).ready(() => {
    let wrapper = document.createElement('div'),
        componentElmt = document.getElementsByTagName(AppComponent.$$config.selector)[0];
    componentElmt.parentNode.insertBefore(wrapper, componentElmt);
    wrapper.appendChild(componentElmt);
    angular.bootstrap(wrapper, [AppModule.name], {
        strictDi: false
    });
});
