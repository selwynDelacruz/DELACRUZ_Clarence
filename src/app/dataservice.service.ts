import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }
  fetchData(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  } 
  
}
