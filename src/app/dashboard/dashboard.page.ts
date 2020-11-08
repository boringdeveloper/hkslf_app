import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  services: any = [
    {
      'icon': 'documents-outline',
      'label': 'Move value from one policy to another',
      'actions': [
        {
          'desc': 'Pay with Policy Value'
        },
        {
          'desc': 'Standing Instructions'
        }
      ]
    },
    {
      'icon': 'wallet-outline',
      'label': 'Cash out your policy values',
      'actions': [
        {
          'desc': 'Value Withdrawal'
        },
        {
          'desc': 'Payout Method'
        }
      ]
    },
    {
      'icon': 'cash-outline',
      'label': 'Take a loan against your policy value',
      'actions': [
        {
          'desc': 'Loans'
        }
      ]
    },
    {
      'icon': 'pricetags-outline',
      'label': 'Payment options for your premiums',
      'actions': [
        {
          'desc': 'Premium Payment Method'
        }
      ]
    }
  ]

  activeView = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  navigate(navId: any) {
    this.activeView = navId;
  }

  back() {
    this.activeView = 0;
  }

}
