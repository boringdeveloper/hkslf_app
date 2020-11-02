import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPoliciesPage } from './all-policies.page';

const routes: Routes = [
  {
    path: '',
    component: AllPoliciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPoliciesPageRoutingModule {}
