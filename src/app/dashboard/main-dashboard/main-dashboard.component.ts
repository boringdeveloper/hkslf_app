import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {

  @Output() _toPoliciesPage = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  __toPoliciesPage() {
    this._toPoliciesPage.emit();
  }

}
