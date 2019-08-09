import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { UserService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'undergrowth';
  currentUser: User;


  constructor(private service: UserService){}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut(){
    this.currentUser = null;
    this.service.userLogout();
  }

}
