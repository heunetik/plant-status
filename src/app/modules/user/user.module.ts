import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { UserComponent } from './user.component';

// Services

// Modules
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    entryComponents: [
    ],
    providers: [
        HttpClient
    ]
})
export class UserModule { }
