import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SubscriptionLike, Observable } from 'rxjs';
import { AuthService } from './modules/login/services/auth.service';
import { map } from 'rxjs/operators';
import { User } from './shared/interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidenav', { static: false }) public sidenav: MatSidenav;
    title = 'Plant Status';
    isLoggedIn$: Observable<boolean>;
    currentUser: User;

    constructor(private router: Router, private authService: AuthService) {
        router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart && this.sidenav) {
                this.sidenav.close();
            }
        });
        authService.currentUser.subscribe((user: User) => {
            this.currentUser = this.authService.currentUserValue;
        });
    }
}





