import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }


  getEmployee(id: number){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${this.API_URL}/${id}`,{headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  getEmployeesList() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.API_URL}`);
  }
}
