import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptors
import { HttpErrorInterceptor } from './shared/interceptor/httperror.interceptor';

// Components
import { AppComponent } from './app.component';

// Modules
import { RoutingModule } from './modules/routing/routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './modules/material/material.module';
import { LoginModule } from './modules/login/login.module';

// Guards
import { AuthGuard } from './shared/guards/auth.guard';
import { NegateAuthGuard } from './shared/guards/negate-auth.guard';

// Services

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        BrowserAnimationsModule,
        DashboardModule,
        LoginModule,
        MaterialModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        AuthGuard,
        NegateAuthGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
