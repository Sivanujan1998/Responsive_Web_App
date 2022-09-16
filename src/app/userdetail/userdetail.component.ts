import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FetchDetailsSevice, Detail } from "../fetchdetails/fetchdetails.service";

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  public detail:Detail | undefined;

  constructor(private route: ActivatedRoute,private router: Router,private detailsService: FetchDetailsSevice) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.detail = this.detailsService.getById(+params['id']);
    });
   
  }
}

