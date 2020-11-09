import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { IDashboard } from './dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = 'assets/mock_data/user.json';

  constructor(private http: HttpClient) { }

  getDashboardData(): Observable<IDashboard> {
    return this.http.get<IDashboard>(`${this.url}`).pipe(
      map(results => results)
    );
  }
}
