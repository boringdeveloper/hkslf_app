import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllPoliciesPageRoutingModule } from './all-policies-routing.module';

import { AllPoliciesPage } from './all-policies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllPoliciesPageRoutingModule
  ],
  declarations: [AllPoliciesPage]
})
export class AllPoliciesPageModule {}
