import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service.service';
import { User } from '../models/user';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {


  beforeEach(() => TestBed.configureTestingModule({

    
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    
  }));

  it('should be created', () => {
    let user = new User();
    user.username = "test"; 
    localStorage.setItem('currentUser', JSON.stringify(user));
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('logged in should be false', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isLoggedIn()).toBeFalsy();
  });

  it('user should be null', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.currentUser).toBeFalsy();
  });


});
