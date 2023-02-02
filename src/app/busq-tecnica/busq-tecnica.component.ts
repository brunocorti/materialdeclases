import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-tecnica',
  templateUrl: './busq-tecnica.component.html',
  styleUrls: ['./busq-tecnica.component.css']
})
export class BusqTecnicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue4: string = '';

  @Output()
  searchTextChanged4: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged4(){
    this.searchTextChanged4.emit(this.enteredSearchValue4)
  }

}
