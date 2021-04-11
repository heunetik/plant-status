import { Component, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.interface';
import { AuthService } from './core/services/auth/auth.service';
@Component({
    selector: 'ps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('sidenav') public sidenav: MatSidenav;
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





