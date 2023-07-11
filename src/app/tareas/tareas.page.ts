import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TareaModalPage } from '../tarea-modal/tarea-modal.page';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  tareas: any[] = []; // Arreglo para almacenar las tareas

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Lógica para obtener las tareas (puedes reemplazar esta lógica con tus datos reales)
    this.obtenerTareas();
  }

  obtenerTareas() {
    // Simulación de obtención de tareas desde una fuente de datos
    this.tareas = [
      {
        titulo: 'Tarea 1',
        descripcion: 'Descripción de la tarea 1',
        completada: false
      },
      {
        titulo: 'Tarea 2',
        descripcion: 'Descripción de la tarea 2',
        completada: true
      },
      {
        titulo: 'Tarea 3',
        descripcion: 'Descripción de la tarea 3',
        completada: false
      }
    ];
  }

  async agregarTarea() {
    const modal = await this.modalController.create({
      component: TareaModalPage
    });
    return await modal.present();
  }
}
