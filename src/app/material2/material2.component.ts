import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material2',
  templateUrl: './material2.component.html',
  styleUrls: ['./material2.component.css']
})
export class Material2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue2: string = '';

  @Output()
  searchTextChanged2: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged2(){
    this.searchTextChanged2.emit(this.enteredSearchValue2)
  }

}
