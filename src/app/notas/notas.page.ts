import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage {
  notas: any[] = []; // Arreglo para almacenar las notas

  constructor() { }

  agregarNota() {
    // Simulación de creación de una nueva nota
    const nuevaNota = {
      titulo: 'Nueva Nota',
      descripcion: 'Contenido de la nueva nota'
    };

    this.notas.push(nuevaNota);
  }
}
