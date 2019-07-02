import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components

// Modules
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    entryComponents: [
    ],
    providers: [
        HttpClient,
        LoginService
    ]
})
export class LoginModule { }