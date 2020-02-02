import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { UserComponent } from './pages/user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule { }
