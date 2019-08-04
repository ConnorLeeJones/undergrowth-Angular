import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from '../models/user-profile';
import { ProfileService } from '../services/profile.service';
import { User } from '../models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public profile: UserProfile = new UserProfile();
  private currentUser: User;

  constructor(private service: ProfileService,
                  private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onSubmit(){
      this.service.editProfile(this.profile, this.currentUser.id);
  }

}
