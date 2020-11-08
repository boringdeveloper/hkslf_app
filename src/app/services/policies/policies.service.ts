import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { IPolicies } from 'src/interface/policy.interface';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
  url = 'assets/mock_data/all_policies.json';

  constructor(private http: HttpClient) { }

  getAllPolicies(): Observable<IPolicies> {
    return this.http.get<IPolicies>(`${this.url}`).pipe(
      map(results => results)
    );
  }
}
