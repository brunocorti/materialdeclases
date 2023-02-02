import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busq-modo',
  templateUrl: './busq-modo.component.html',
  styleUrls: ['./busq-modo.component.css']
})
export class BusqModoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue6: string = '';

  @Output()
  searchTextChanged6: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged6(){
    this.searchTextChanged6.emit(this.enteredSearchValue6)
  }
}
