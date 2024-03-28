import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Holiday } from './holiday.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<Holiday[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
  
}
