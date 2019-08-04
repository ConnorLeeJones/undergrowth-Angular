import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public currentUser: User;
  

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { 
    this.url = environment.baseUrl + '/users';
  }

  addUser(user: User) {
    this.http.post(this.url, user).subscribe();
  }


  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.url + `/${id}`);
  }

  userLogin(user: User){
    this.loginService.login(user).subscribe(user => 
      {this.currentUser = user;
        this.currentUser.password = null;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      });
      this.router.navigate(['/home']);

  }

  userLogout(){
    localStorage.setItem('currentUser', null);
    location.reload();
  }



}
