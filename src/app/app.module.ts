import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import  {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {ImagesListComponent} from './components/images-list/images-list.component';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {ImageRowComponent} from './components/image-row/image-row.component';
import {ServerService} from './services/server.service';


@NgModule({
    declarations: [
        AppComponent,
        ImagesListComponent,
        ImageRowComponent,
        ImageUploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ImagesListComponent
            },
            {
                path: 'upload',
                component: ImageUploadComponent
            }
        ])
    ],
    providers: [ServerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
