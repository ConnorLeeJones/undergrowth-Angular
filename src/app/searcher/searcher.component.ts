import { Component, OnInit } from '@angular/core';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';
import { SearchCriteria } from '../models/search-criteria';
import { UserProfile } from '../models/user-profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {


  private typeSelector: TypeSelectorComponent = new TypeSelectorComponent();
  private headers = this.typeSelector.header;
  private distances = [{ name: 'Local' }, { name: 'All'}]
  private searchCriteria: SearchCriteria = new SearchCriteria();
  private results: UserProfile[];
  private currentUserProfile: UserProfile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  onSubmit(){

    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.searchCriteria.zipcode = currentUser.userProfile.zipcode;
    console.log(this.searchCriteria);

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserProfile = currentUser.userProfile;
    if (this.searchCriteria.distance === 'Local'){
      this.profileService.findLocalProfiles(this.searchCriteria.profileType)
      .subscribe(profiles => this.results = profiles);
    } else {
      this.profileService.findAllProfiles(this.searchCriteria.profileType)
      .subscribe(profiles => this.results = profiles);
    }
    console.log(this.results);
  }

  

}
