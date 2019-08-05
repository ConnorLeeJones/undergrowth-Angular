import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {

  public header = [{ name: 'Artist' }, { name: 'Musician'}, { name: 'Photographer' },
  { name: 'Band' }, { name: 'Appreciator'}, { name: 'Other' }]; 

  public types = [  
      {Name:'Artist', id: 1}, 
      {Name:'Musician', id: 2}, 
      {Name:'Photographer', id: 3}, 
      {Name:'Band', id: 4}, 
      {Name:'Appreciator', id: 5}, 
      {Name:'Other', id: 6}, 
  ];


  constructor() { }

  ngOnInit() {
  }

}
