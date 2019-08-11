import { Component, OnInit, Injectable } from '@angular/core';
import { TypeSelectorComponent } from '../type-selector/type-selector.component';
import { SearchCriteria } from '../models/search-criteria';
import { UserProfile } from '../models/user-profile';
import { ProfileService } from '../services/profile.service';
import { User } from '../models/user';
import { UserPages } from '../models/user-pages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SearcherComponent implements OnInit {


  typeSelector: TypeSelectorComponent = new TypeSelectorComponent();
  headers = this.typeSelector.header;
  distances = [{ name: 'Local' }, { name: 'All'}]
  searchCriteria: SearchCriteria = new SearchCriteria();
  results: UserProfile[];
  userResults: User[];
  currentUserProfile: UserProfile;
  
  userPages: UserPages[];

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){

    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.searchCriteria.zipcode = currentUser.userProfile.zipcode;
    console.log(this.searchCriteria);

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.profileService.getProfile().subscribe(profile => this.currentUserProfile = profile);
    if (this.searchCriteria.distance === 'Local'){
      this.profileService.findLocalProfiles(this.searchCriteria.profileType, this.currentUserProfile)
      .subscribe(profiles => this.results = profiles);
    } else {
      this.profileService.findAllProfiles(this.searchCriteria.profileType)
      .subscribe(profiles => {this.results = profiles
        //console.log(this.results);
      });

      // this.profileService.findAllUserPages()
      // .subscribe(pages => this.userPages = pages);
      // console.log(this.results);
    }
    console.log(this.results);
    //this.router.navigate(['/searchResults']);
  }

  

}
