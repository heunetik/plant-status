import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private dashboardService: DashboardService) { }

    bmeData: BMEData[];
    latestData: any;

    ngOnInit() {
        this.getBMEData();
    }

    getBMEData() {
        let obs = this.dashboardService.getBMEData().subscribe(data => {
            this.bmeData = data;
            this.latestData = Object.entries(data[data.length - 1]);
            obs.unsubscribe();
        });
    }

    componentDebug() {
        console.log(this.bmeData);
    }
}
