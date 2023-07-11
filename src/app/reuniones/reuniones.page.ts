import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearReunionModalPage } from '../crear-reunion-modal/crear-reunion-modal.page';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.page.html',
  styleUrls: ['./reuniones.page.scss'],
})
export class ReunionesPage {
  reuniones = [
    {
      titulo: 'Reunión 1',
      fecha: new Date('2023-07-10'),
      hora: '09:00 AM',
    },
    {
      titulo: 'Reunión 2',
      fecha: new Date('2023-07-12'),
      hora: '14:30 PM',
    },
    {
      titulo: 'Reunión 3',
      fecha: new Date('2023-07-15'),
      hora: '11:00 AM',
    },
  ];

  constructor(private modalController: ModalController) {}

  async abrirCrearReunionModal() {
    const modal = await this.modalController.create({
      component: CrearReunionModalPage,
    });
    return await modal.present();
  }
}
