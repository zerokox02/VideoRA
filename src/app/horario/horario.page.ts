import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {

  horario: any[][] = [
    ["8:00 AM - 9:00 AM", "Clase 1", "Clase 1", "Clase 2", "Clase 3", ""],
    ["9:00 AM - 10:00 AM", "Clase 2", "Clase 5", "", "Clase 6", "CLase 1"],
    ["10:00 AM - 11:00 AM", "Clase 4", "Clase 5", "", "Clase 6", ""],
    ["11:00 AM - 12:00 PM", "Clase 5", "Clase 5", "", "Clase 6", ""],
    ["12:00 PM - 01:00 PM", "Clase 2", "Clase 5", "", "Clase 6", "Clase 2"],
    ["O1:00 PM - 02:00 PM", "Clase 2", "Clase 5", "", "Clase 6", ""],
  ];
}
