import { Component, OnInit } from '@angular/core';
import { FetchDetailsSevice } from "./fetchdetails.service";

@Component({
  selector: 'app-fetchdetails',
  templateUrl: './fetchdetails.component.html',
  styleUrls: ['./fetchdetails.component.css']
})
export class FetchdetailsComponent implements OnInit {
  public details: any = [];

  constructor(private service: FetchDetailsSevice) { }

  ngOnInit(): void {
    
    this.service.getUsersDetails().subscribe(details => {
      this.details = details;
      console.log(details)
    })
  }

}
