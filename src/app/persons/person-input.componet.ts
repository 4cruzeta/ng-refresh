import { Component } from '@angular/core';

@Component ({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  enteredPersonName = ''; // infere que é string

  onCreatePerson() {
    console.log('Novo Nome Inserido: ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
