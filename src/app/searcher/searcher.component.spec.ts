import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ SearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let user = new User();
    user.username = "test"; 
    localStorage.setItem('currentUser', JSON.stringify(user));
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
