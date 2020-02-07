import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';                       // infere que é :string

  onCreatePerson() {
    console.log('Novo Nome Inserido: ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
