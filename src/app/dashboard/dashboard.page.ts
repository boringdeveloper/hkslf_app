import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  activeView = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toPoliciesPage() {
    this.router.navigate(['/all-policies'])
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
