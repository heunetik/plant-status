import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SubscriptionLike, Observable } from 'rxjs';
import { LoginService } from './modules/login/services/login.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;
    title = 'Plant Status';
    isLoggedIn$: Observable<boolean>;  

    constructor(private router: Router, private loginService: LoginService) {
        router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart && this.sidenav) {
                this.sidenav.close();
            }
        });
    }

    ngOnInit() {
        this.isLoggedIn$ = this.loginService.isLoggedIn;
    }
}





