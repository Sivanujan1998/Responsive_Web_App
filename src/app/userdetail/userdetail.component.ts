import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FetchDetailsSevice, Detail } from "../fetchdetails/fetchdetails.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  
  public details: any = [];
  public user:any = {}
  public id: string | null | undefined

  constructor(private activateroute: ActivatedRoute, private service:FetchDetailsSevice,private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params['id'];
    this.service.getUsersDetails().subscribe(details => {
      this.details = details;
      this.user = this.details.find((i: { id: any; }) => i.id == this.id)
    })
    }  
  }

