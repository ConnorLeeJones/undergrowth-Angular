import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile';
import { HttpClient } from '@angular/common/http';
import { UserPages } from '../models/user-pages';
import { UserService } from './user-service.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string;
  public currentUser: User;
  private userProfile: UserProfile;
  

  constructor(private http: HttpClient, private router: Router, private userService: UserService,
    private loginService: LoginService) { 
    this.url = environment.baseUrl + '/profiles';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userProfile = this.currentUser.userProfile;
  }


  getProfile(){
    return this.http.get<UserProfile>(this.url + '/' + this.currentUser.id);
  }




  editProfile(userProfile: UserProfile, id: number){
    console.log(this.currentUser);
    this.http.put<UserProfile>(this.url + '/' + id, userProfile).subscribe();
    // this.loginService.login(this.currentUser);
  }

  findLocalProfiles(type: String, profile: UserProfile){
    // this.getProfile().subscribe(profile => this.currentUse)
    console.log(profile);
    console.log(this.userService.currentUserProfile);
    console.log(this.userProfile);
    // this.getProfile().subscribe(profile => this.userProfile = profile);
    return this.http.put<UserProfile[]>(this.url + '/local/' + type, this.userProfile);

  }

  findAllProfiles(type: String){
    return this.http.get<UserProfile[]>(this.url + '/all/' + type);
  }


  // findAllUserPages(){
  //   return this.http.get<UserPages[]>(environment.baseUrl + '/userPages?page=1');
  // }


  
}
