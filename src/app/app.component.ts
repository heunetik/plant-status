import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './shared/services/sidenav.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;
    title = 'plantStatus';
    opened: boolean;

    constructor(private sidenavService: SidenavService) {
    }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}





