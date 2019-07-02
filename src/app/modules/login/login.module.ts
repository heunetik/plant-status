import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { LoginComponent } from './login.component';

// Modules
import { MaterialModule } from '../material/material.module';

// Services
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
        AuthService
    ]
})
export class LoginModule { }