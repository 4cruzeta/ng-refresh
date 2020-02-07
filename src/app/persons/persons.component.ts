import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({                                    // Diz ao Angular que isso é um Component. @ - decorator
  selector: 'app-persons',                      // convenção usar prefixo app, -, nome do componente
  templateUrl: './persons.component.html'

})
export class PersonsComponent {
personList: string[];

constructor(prsService: PersonsService) {
  this.personList = prsService.persons;
}
}
