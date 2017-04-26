import {Component} from '@angular/core';
import {ServerService} from '../../services/server.service';
import {Image} from '../../classes/image'

@Component({
    selector: 'images-list',
    templateUrl: './images-list.component.html',
    styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent {
    public images: Image[];

    constructor(private server: ServerService) {
    }

    ngOnInit() {

        this.server.getImages().subscribe(images => this.images = images)
    }

}
