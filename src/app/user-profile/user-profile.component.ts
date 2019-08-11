import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../models/user-profile';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  currentUser: User;
  @Input() profile: UserProfile;
  show: boolean;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { 
                this.profile = new UserProfile();
                this.show = false;
              }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getProfile();
  }

  getProfile(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(currentUser => {
    this.user = currentUser;
    this.profile = this.user.userProfile;

    if (this.currentUser.id === this.user.id){
      this.show = true;
    }

    });



  }

}
