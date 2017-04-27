import {Component, Input} from '@angular/core';
import {Image} from '../../classes/image'
@Component({
    selector: 'image-row',
    templateUrl: './image-row.component.html',
    styleUrls: ['./image-row.component.css']
})
export class ImageRowComponent {
    @Input() image: Image;
}
