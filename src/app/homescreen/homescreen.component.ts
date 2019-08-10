import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit, OnChanges {


  welcomeMessage = 'Welcome to undergrowth, a project currently being developed by Connor Jones.';
  missionStatement = 'The mission of undergrowth is to promote the growth of local art and music scenes, and provide a place for artists and musicians to gain exposure and connect with one another.'


  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
  }

}
