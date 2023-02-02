import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-dificultad',
  templateUrl: './busq-dificultad.component.html',
  styleUrls: ['./busq-dificultad.component.css']
})
export class BusqDificultadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue7: string = '';

  @Output()
  searchTextChanged7: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged7(){
    this.searchTextChanged7.emit(this.enteredSearchValue7)
  }

}
