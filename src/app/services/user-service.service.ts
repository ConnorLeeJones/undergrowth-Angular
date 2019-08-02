import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders(
  {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json'
  }
  )
  //params: new HttpParams().set()
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  private currentUser: User;

  constructor(private http: HttpClient) { 
    this.url = environment.baseUrl + '/users';
    this.currentUser = new User();
  }

  addUser(user: User) {
    console.log(this.url);
    console.log(user);

    this.http.post(this.url, user, httpOptions).subscribe();
    
    // console.log(this.http.post<User>(this.url, user));
    // this.http.get(this.url).subscribe();
  }


  getUserById(id: number): Observable<User>{
    console.log(this.url + `/${id}`);
    console.log(this.http.get<User>(this.url + `/${id}`));
    return this.http.get<User>(this.url + `/${id}`);

  }


}
