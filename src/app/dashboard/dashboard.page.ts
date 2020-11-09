import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './shared/dashboard.service';
import { IDashboard } from './shared/dashboard.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  navs: any = [
    {
      'id': 1,
      'icon': 'icon_fund.png',
      'label': 'Manage ILAS Funds'
    },
    {
      'id': 2,
      'icon': 'icon_claims.png',
      'label': 'Claims'
    },
    {
      'id': 3,
      'icon': 'icon_serving.png',
      'label': 'Policy Servicing'
    }
  ];

  dashboardData: Observable<IDashboard>;

  activeView = 0;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardData = this.dashboardService.getDashboardData();
  }

  toPoliciesPage() {
    this.router.navigate(['/all-policies'])
  }

  notifCount(count: number) {
    return (count > 9) ? "9+" : count;
  }

  navigate(navId: any) {
    if (this.activeView == navId) {
      this.activeView = 0;
    }
    else {
      this.activeView = navId;
    }
  }

  back() {
    this.activeView = 0;
  }

}
