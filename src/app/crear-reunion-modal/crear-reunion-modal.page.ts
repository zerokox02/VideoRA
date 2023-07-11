import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear-reunion-modal',
  templateUrl: './crear-reunion-modal.page.html',
  styleUrls: ['./crear-reunion-modal.page.scss'],
})
export class CrearReunionModalPage {
  tituloReunion: string | undefined;
  fechaReunion: string | undefined;
  horaReunion: string | undefined;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  crearReunion() {
    // Aquí puedes implementar la lógica para crear la reunión con los datos ingresados
    // Por ejemplo, puedes almacenar la reunión en una base de datos o enviarla a través de una API
    console.log('Título:', this.tituloReunion);
    console.log('Fecha:', this.fechaReunion);
    console.log('Hora:', this.horaReunion);

    this.modalController.dismiss();
  }
}
