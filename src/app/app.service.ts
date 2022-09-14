import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsersDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}