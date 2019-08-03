import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {


  welcomeMessage = 'Welcome to undergrowth, a project currently being developed by Connor Jones.';
  missionStatement = 'The mission of undergrowth is to promote the growth of local art and music scenes, and provide a place for artists and musicians to gain exposure connect with one another.'


  constructor() {}

  ngOnInit() {}

}
