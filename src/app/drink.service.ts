import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  apiUrl: string = 'http://localhost:3000/api/drink'; 

  constructor(private http: HttpClient) {}

  public getDrink(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
}