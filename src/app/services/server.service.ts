import {Injectable} from '@angular/core';

@Injectable()
export class ServerService {

    constructor() {
    }

    getImages() {
        console.log('service works');
        return true;
    }

}
