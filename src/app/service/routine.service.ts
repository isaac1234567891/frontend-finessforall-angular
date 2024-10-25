import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routine } from '../interfaces/routine';

@Injectable({
providedIn: 'root',
})
export class RoutineService {
  private token!: string;
  private headers!: HttpHeaders
  constructor(private request: HttpClient) {
    this.token = localStorage.getItem('token') || '';
    this.headers = new HttpHeaders().set('X-token', this.token)
  }

  getAllRoutines(){
    return this.request.get<any>('http://localhost:3000/api/routines')
  }
  registerRoutines(newRoutines: Routine) {
  return this.request.post<any>('http://localhost:3000/api/routines', newRoutines, {headers: this.headers});
  }
}
