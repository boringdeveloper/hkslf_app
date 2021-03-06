import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliciesService } from './shared/policies.service';
import { Observable } from 'rxjs';
import { IPolicies } from './shared/policy.interface';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.page.html',
  styleUrls: ['./all-policies.page.scss'],
})
export class AllPoliciesPage implements OnInit {
  title: String = "All Policies"

  policies: Observable<IPolicies>;

  constructor(
    private router: Router,
    private policiesService: PoliciesService) { }

  ngOnInit() {
    this.policies = this.policiesService.getAllPolicies();
  }

  private calculateDaysBetween(dateString: string) {
    var dueDate = new Date(Date.parse(dateString));
    var dateNow = new Date();

    var timeDiff = dueDate.getTime() - dateNow.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);

    var suffix = (dayDiff > 1) ? "days" : "day";

    return `${dayDiff.toFixed(0)} ${suffix}`;
  }

  public back() {
    this.router.navigate(['dashboard']);
  }

}
