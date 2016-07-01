import angular from 'angular';
import { Injectable } from 'ng-transition/core';

@Injectable()
export class MessageService {

    /* @ngInject */
    constructor(){
    }

    get message() {
        return 'You got it !';
    }
}
