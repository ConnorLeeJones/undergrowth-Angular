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


  private typeSelector: TypeSelectorComponent = new TypeSelectorComponent();
  private headers = this.typeSelector.header;
  private distances = [{ name: 'Local' }, { name: 'All'}]
  private searchCriteria: SearchCriteria = new SearchCriteria();
  public results: UserProfile[];
  private userResults: User[];
  private currentUserProfile: UserProfile;
  
  private userPages: UserPages[];

  constructor(private profileService: ProfileService, private router: Router) { }

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
