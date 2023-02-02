import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  songs = [
    { id: 1, name: 'Flaca', artist: 'Andrés Calamaro', chords: "Sol, Si7, Mim, Do, Sol, Re, Sol, Re", technique: "rasguido", type: "↓ ↓↑ ↑↓", difficulty: "facil", gender: "rock", scale: "Mayor", observations:"cosocosocsocscso", instrument: "Guitarra" },
    { id: 2, name: 'Capa tras Capa', artist: 'Bruno Corti', chords: "Sol, Lam, Do, Sim, Re, Mim", technique: "plaqué", type: "Marcha Camión", difficulty: "medio", gender: "murga", scale: "Mayor", observations:"", instrument: "Guitarra"  },
    { id: 3, name: 'Through the Fire and Flames', artist: 'Dragonforce', chords: "Dom, Lab, Sib, Fam, Mib", technique: "púa", type: "Heavy Metal", difficulty: "difícil", gender: "metal", scale: "Minor", observations:"rápida", instrument: "Guitarra" }
  ];

  courseCountRadioButton: string = 'All'
  searchText: string = '';
  searchText2: string = '';
  searchText3: string = '';
  searchText4: string = '';
  searchText5: string = '';
  searchText6: string = '';
  searchText7: string = '';
  searchText8: string = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }

  onSearchTextEntered2(searchValue: string){
    this.searchText2 = searchValue;
  }

  onSearchTextEntered3(searchValue: string){
    this.searchText3 = searchValue;
  }

  onSearchTextEntered4(searchValue: string){
    this.searchText4 = searchValue;
  }
  onSearchTextEntered5(searchValue: string){
    this.searchText5 = searchValue;
  }
  onSearchTextEntered6(searchValue: string){
    this.searchText6 = searchValue;
  }
  onSearchTextEntered7(searchValue: string){
    this.searchText7 = searchValue;
  }

  onSearchTextEntered8(searchValue: string){
    this.searchText8 = searchValue;
  }
}
