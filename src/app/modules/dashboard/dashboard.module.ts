import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';

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
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    entryComponents: [
    ],
    providers: [
        HttpClient,
        DashboardService
    ]
})
export class DashboardModule { }