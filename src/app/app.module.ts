import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import  {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {ImagesListComponent} from './components/images-list/images-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ImagesListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ImagesListComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
