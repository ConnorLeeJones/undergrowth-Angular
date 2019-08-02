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

  private user: User;
  @Input() profile: UserProfile;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { 
                this.profile = new UserProfile();
              }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(currentUser => {
    this.user = currentUser;
    this.profile = this.user.userProfile;
    });



  }

}
