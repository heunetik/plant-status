import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BMEData } from '../interfaces/dashboard.interface';

@Injectable()
export class DashboardService {
    // Temporary gist URL
    // tslint:disable-next-line:max-line-length
    private url = 'https://gist.githubusercontent.com/heunetik/0f5556ad8e9f522a2a421f1dd1a805c1/raw/7b23543498680c381090210decedbf5d4b578f46/BMEMock.json';

    constructor(private http: HttpClient) { }

    getBMEData(): Observable<BMEData[]> {
        return this.http.get(`${this.url}`).pipe(
            map((response: BMEData[]) => response)
        );
    }
}
