import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { MaterialComponent } from './material/material.component';
import { Material2Component } from './material2/material2.component';
import { BusqAcordeComponent } from './busq-acorde/busq-acorde.component';
import { BusqTecnicaComponent } from './busq-tecnica/busq-tecnica.component';
import { BusqGeneroComponent } from './busq-genero/busq-genero.component';
import { BusqModoComponent } from './busq-modo/busq-modo.component';
import { BusqDificultadComponent } from './busq-dificultad/busq-dificultad.component';
import { BusqInstrumentoComponent } from './busq-instrumento/busq-instrumento.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MaterialComponent,
    Material2Component,
    BusqAcordeComponent,
    BusqTecnicaComponent,
    BusqGeneroComponent,
    BusqModoComponent,
    BusqDificultadComponent,
    BusqInstrumentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
