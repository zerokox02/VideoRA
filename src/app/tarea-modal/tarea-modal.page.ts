import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tarea-modal',
  templateUrl: './tarea-modal.page.html',
  styleUrls: ['./tarea-modal.page.scss'],
})
export class TareaModalPage {
  @Input() nuevaTarea: any = {};

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  agregarTarea() {
  

    this.modalController.dismiss();
  }

  marcarComoEntregado() {


    this.nuevaTarea.completada = true;
  }
}
