import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-policy-servicing',
  templateUrl: './policy-servicing.component.html',
  styleUrls: ['./policy-servicing.component.scss'],
})
export class PolicyServicingComponent implements OnInit {
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
  ];

  @Output() back = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  returnToDshboardMain() {
    this.back.emit();
  }

}
