import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/user-profile';
import { HttpClient } from '@angular/common/http';
import { UserPages } from '../models/user-pages';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string;
  public currentUser: User;
  

  constructor(private http: HttpClient, private router: Router) { 
    this.url = environment.baseUrl + '/profiles';

  }


  editProfile(userProfile: UserProfile, id: number){
    this.http.put<UserProfile>(this.url + '/' + id, userProfile).subscribe();
  }

  findLocalProfiles(type: String){
    return this.http.get<UserProfile[]>(this.url + '/local/' + type);

  }

  findAllProfiles(type: String){
    return this.http.get<UserProfile[]>(this.url + '/all/' + type);
  }


  // findAllUserPages(){
  //   return this.http.get<UserPages[]>(environment.baseUrl + '/userPages?page=1');
  // }


  
}
