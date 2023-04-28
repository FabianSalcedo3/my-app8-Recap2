export class Studente {
  matricola!: number;
  nome!: string;
  cognome!: string;
  codiceCorso!: Array<string>;

  constructor(matricola: number, nome: string, cognome: string, codiceCorso: Array<string>) {
    this.matricola = matricola;
    this.nome = nome;
    this.cognome = cognome;
    this.codiceCorso = codiceCorso;
  }
}
