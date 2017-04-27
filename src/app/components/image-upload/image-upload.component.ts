import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
@Component({
    selector: 'images-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
    private fileContent;
    private http;

    constructor(http: Http) {
        this.http = http;
    }

    selectImage(img, event, description, submitButton) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var $this = this;
            reader.onload = function (e: any) {
                img.src = e.target.result;
                $this.fileContent = e.target.result;
                submitButton.disabled = false;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    submit(event, description, fileSelect, btnFile) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var data = {
            description: description.value,
            imageContent: this.fileContent,
        };
        description.disabled = true;
        fileSelect.disabled = true;

        btnFile.disabled = true;
        event.target.disabled = true;
        event.target.innerHTML = "Uploading ..."
        this.http.post('/api/images', data, {headers: headers})
            .subscribe(console.log);
        console.log('submit event')
    }
}
