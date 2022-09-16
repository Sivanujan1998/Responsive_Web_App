import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Detail {
    userid: number
    id: number
    title: string
    body: string
    
  }

  
@Injectable({
  providedIn: 'root'
})

export class FetchDetailsSevice {
    public details: any = [];
  constructor(private http: HttpClient) { }

  getUsersDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getById(id:number){
     this.details = this.getUsersDetails(); 
    return this.details.find((p: { id: number; }) => p.id === id)
  }
}