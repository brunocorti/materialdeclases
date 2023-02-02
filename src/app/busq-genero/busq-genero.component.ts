import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-genero',
  templateUrl: './busq-genero.component.html',
  styleUrls: ['./busq-genero.component.css']
})
export class BusqGeneroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue5: string = '';

  @Output()
  searchTextChanged5: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged5(){
    this.searchTextChanged5.emit(this.enteredSearchValue5)
  }
}
