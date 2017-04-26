import {Component} from '@angular/core';
import {ServerService} from '../../services/server.service';
@Component({
    selector: 'images-list',
    templateUrl: './images-list.component.html',
    styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent {
    title = 'app works!';

    constructor(server: ServerService) {
        server.getImages();

    }
}
