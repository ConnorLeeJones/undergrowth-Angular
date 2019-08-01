import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user: User = new User();

  constructor(private service: UserService,
              private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.addUser(this.user);
  }

}
