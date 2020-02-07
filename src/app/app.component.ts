import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: string[] = ['Antonho', 'Justino', 'Deocleciano']; // aqui é a entrada de dados que é "exportada",
                                                            // enviada para o app.component.html
     onPersonCreate(name: string){
      this.persons.push(name);
     }
}
