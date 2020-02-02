import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { DashboardComponent } from './pages/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
