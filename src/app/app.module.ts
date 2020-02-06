import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component'; // Registra o novo componente
import { PersonInputComponent } from './persons/person-input.componet';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,          // Declara o novo componente
    PersonInputComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
