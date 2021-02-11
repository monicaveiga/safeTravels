import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HdataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getHData(){
    return this.http.get('http://localhost:3000/hotels');
  }
}