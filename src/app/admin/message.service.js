import angular from 'angular';
import { Injectable } from 'decorators/Injectable';

@Injectable()
export class MessageService {

    /* @ngInject */
    constructor(){
    }

    get message() {
        return 'You got it !';
    }
}