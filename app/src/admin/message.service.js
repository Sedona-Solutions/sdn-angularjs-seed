import { Injectable } from 'ng-transition/core';

// start-non-standard
@Injectable()
// end-non-standard
export class MessageService {

    /* @ngInject */
    constructor(){
    }

    get message() {
        return 'You got it !';
    }
}
