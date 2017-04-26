import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Image} from '../classes/image';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

    constructor(private http:Http) {
    }
    extractData(res: Response) {
        return res.json();
    }

    getImages():Observable<Image[]> {
        return this.http.get('/api/images').map(this.extractData);
    }

}
