import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  url = 'assets/mock_data/all_policies.json';

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => results)
    );
  }
}
