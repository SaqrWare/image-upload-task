import {Component} from '@angular/core';
@Component({
    selector: 'images-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
    private fileContent;

    selectImage(img, event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var $this = this;
            reader.onload = function (e: any) {
                img.src = e.target.result;
                $this.fileContent = e.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}
