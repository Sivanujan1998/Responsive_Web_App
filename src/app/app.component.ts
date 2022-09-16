import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inboundClick = true;
  title = 'Demo_Web_App';

  constructor() {}
  ngOnInit(): void {
    
  }

}
