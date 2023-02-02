import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-instrumento',
  templateUrl: './busq-instrumento.component.html',
  styleUrls: ['./busq-instrumento.component.css']
})
export class BusqInstrumentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue8: string = '';

  @Output()
  searchTextChanged8: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged8(){
    this.searchTextChanged8.emit(this.enteredSearchValue8)
  }

}
