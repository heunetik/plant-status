import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './services/dashboard.service';
import { AuthService } from '../login/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BMEData } from './interfaces/dashboard.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    constructor(private dashboardService: DashboardService) { }

    destroy$: Subject<boolean> = new Subject<boolean>();
    bmeData: BMEData[];
    latestData: any;

    ngOnInit() {
        this.getBMEData();
    }

    getBMEData() {
        this.dashboardService.getBMEData().pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.bmeData = data;
            this.latestData = Object.entries(data[data.length - 1]);
        });
    }

    componentDebug() {
        console.log(this.bmeData);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
