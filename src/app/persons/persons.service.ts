import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {

  persons: string[] = ['Antonho', 'Justino', 'Deocleciano'];    // Veio do app.component.ts

  addPerson(name: string) {
    this.persons.push(name);
  }
}
