import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.page.html',
  styleUrls: ['./all-policies.page.scss'],
})
export class AllPoliciesPage implements OnInit {
  title: String = "All Policies"

  policies: any = [
    {
      name: 'LifeSuper 20',
      number: '601007042',
      status: 'Inforce',
      sum: 5900000,
      surrenderValue: 240770,
      premium: 3441,
      isDue: true,
      dueDate: '11/16/2020',
      duePremium: 1280.90
    },
    {
      name: 'Sun Architect',
      number: '201491780',
      status: 'Inforce',
      contribAmt: 11066,
      fundBal: 10539,
      surrenderValue: 7337,
      premium: 3441,
      isDue: false
    },
    {
      name: 'Critical Medical Care Plan II',
      number: '048267442',
      status: 'Inforce',
      amtBenefit: 500000,
      premium: 3441,
      isDue: false
    },
    {
      name: 'Sun Educator 5',
      number: '60158495',
      status: 'Inforce',
      amtBenefit: 25000,
      cashValue: 2046,
      surrenderValue: 2251,
      premium: 3441,
      isDue: false
    }
  ];

  constructor(
    private router: Router) { }

  ngOnInit() {
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
    this.router.navigate(['folder']);
  }

}
