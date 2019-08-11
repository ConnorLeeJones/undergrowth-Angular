import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../models/user';

describe('ProfileService', () => {

  beforeEach(() => {
   TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ]  
  })
});

  it('should be created', () => {
    let user = new User();
    user.username = "test"; 
    localStorage.setItem('currentUser', JSON.stringify(user));
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });


});
