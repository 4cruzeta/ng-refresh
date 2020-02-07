import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({                                    // Diz ao Angular que isso é um Component. @ - decorator
  selector: 'app-persons',                      // convenção usar prefixo app, -, nome do componente
  templateUrl: './persons.component.html'

})
export class PersonsComponent implements OnInit{
personList: string[];
// private personService: PersonsService;

constructor(private prsService: PersonsService) {
  // this.personList = prsService.persons;
  // this.personService = prsService;
}

ngOnInit(){
  this.personList = this.prsService.persons;
  this.prsService.personsChanged.subscribe(persons => {
    this.personList = persons;
  } );
}

onRemovePerson(personName: string) {
  this.prsService.removePerson(personName);
}

}
