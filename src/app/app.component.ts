import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inboundClick = true;
  title = 'Demo_Web_App';

  public details: any = [];

  constructor(private service: AppService) {}
  ngOnInit(): void {
    
  }

  FetchUserDetails(): void {
    this.service.getUsersDetails().subscribe(details => {
      this.details = details;
      console.log(details)
    })
  }

}
