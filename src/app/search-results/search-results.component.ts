import { Component, OnInit } from '@angular/core';
import { SearcherComponent } from '../searcher/searcher.component';
import { UserProfile } from '../models/user-profile';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  results : UserProfile[];

  constructor(private searcher: SearcherComponent) { }

  ngOnInit() {
    this.results = this.searcher.results;
    console.log(this.results);
  }

}
