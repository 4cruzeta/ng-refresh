import { Component, Input } from '@angular/core';

@Component({                                    // Diz ao Angular que isso é um Component. @ - decorator
  selector: 'app-persons',                      // convenção usar prefixo app, -, nome do componente
  templateUrl: './persons.component.html'

})
export class PersonsComponent {
  @Input() personList: string[];
}
