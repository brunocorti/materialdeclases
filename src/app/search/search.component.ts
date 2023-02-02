import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = '';
  enteredSearchValue2: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  searchTextChanged2: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }

  onSearchTextChanged2(){
    this.searchTextChanged2.emit(this.enteredSearchValue2)
  }

}
