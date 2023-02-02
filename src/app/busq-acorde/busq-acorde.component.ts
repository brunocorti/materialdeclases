import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-acorde',
  templateUrl: './busq-acorde.component.html',
  styleUrls: ['./busq-acorde.component.css']
})
export class BusqAcordeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue3: string = '';

  @Output()
  searchTextChanged3: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged3(){
    this.searchTextChanged3.emit(this.enteredSearchValue3)
  }

}
