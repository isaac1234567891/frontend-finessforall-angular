import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplements } from '../interfaces/supplement';


@Injectable({
providedIn: 'root',
})
export class SupplementsService {
  private token!: string;
  private headers!: HttpHeaders;
  constructor(private request: HttpClient) {
    this.token = localStorage.getItem( 'token' ) || '';
    this.headers = new HttpHeaders().set('X-Token', this.token);
  }
  getAllSupplements() {
    return this.request.get<any>('http://localhost:3000/api/supplements')
  }
  registerSupplements(newSupplements: Supplements){
    return this.request.post('http://localhost:3000/api/supplements', newSupplements, {headers: this.headers})
  }
}
