import { Injectable } from 'decorators/Injectable';

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