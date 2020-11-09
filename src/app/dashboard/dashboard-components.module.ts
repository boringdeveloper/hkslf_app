import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PolicyServicingComponent } from './policy-servicing/policy-servicing.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [PolicyServicingComponent, MainDashboardComponent],
  exports: [PolicyServicingComponent, MainDashboardComponent]
})

export class DashboardComponentsModule { }