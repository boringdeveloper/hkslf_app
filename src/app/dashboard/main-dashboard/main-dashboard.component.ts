import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAssets, ICoverage } from '../shared/dashboard.interface';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  @Input() userAssets: IAssets;
  @Input() userCoverage: ICoverage;
  @Output() _toPoliciesPage = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  __toPoliciesPage() {
    this._toPoliciesPage.emit();
  }

}
