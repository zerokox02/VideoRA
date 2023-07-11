import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearReunionModalPage } from './crear-reunion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CrearReunionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearReunionModalPageRoutingModule {}
