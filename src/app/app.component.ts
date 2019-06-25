import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SubscriptionLike } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;
    title = 'Plant Status';

    constructor(private router: Router) {
        router.events.subscribe( (event: any) => {
            if (event instanceof NavigationStart) {
                this.sidenav.close();
            }
        });
    }
}





