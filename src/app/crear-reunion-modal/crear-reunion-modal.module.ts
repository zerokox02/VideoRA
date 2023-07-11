import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearReunionModalPageRoutingModule } from './crear-reunion-modal-routing.module';

import { CrearReunionModalPage } from './crear-reunion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearReunionModalPageRoutingModule
  ],
  declarations: [CrearReunionModalPage]
})
export class CrearReunionModalPageModule {}
