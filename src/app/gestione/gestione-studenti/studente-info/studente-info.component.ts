import { Component } from '@angular/core';
import { Studente } from 'src/app/models/studente.model';
import { StudentiService } from 'src/app/services/studenti.service';

@Component({
  selector: 'app-studente-info',
  templateUrl: './studente-info.component.html',
  styleUrls: ['./studente-info.component.css']
})
export class StudenteInfoComponent {

  singoloStudente!: Studente;
  matricola!: number;

  constructor(private studenteService: StudentiService) {
    this.onStampaInfo();
  }

  onStampaInfo(): Studente {
    this.singoloStudente = this.studenteService.descriviStudente(this.matricola);
    return this.singoloStudente;
  }
}
