import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  mieiStudenti: Studente[] = [
    new Studente(1, 'Laura', 'Rossi', ['Angular1', 'Java0', 'Htcss3']),
    new Studente(2, 'Mario', 'Verdi', ['Angular2', 'Java1', 'Htcss3']),
    new Studente(3, 'Mirkone', 'Griggi', ['Angular3', 'Java2', 'Htcss3']),
    new Studente(4, 'Manco', 'Pois', ['Angular4', 'Java3', 'Htcss3']),
  ];

  constructor() { }

  descriviStudente(matricola: number): Studente {
    let indice = matricola - 1;
    let mioStudente = this.mieiStudenti[indice];
    return mioStudente;
  }
}
