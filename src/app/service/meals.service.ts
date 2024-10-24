import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meals } from '../interfaces/meals';


@Injectable({
providedIn: 'root'
})
export class MealsService {
  private token!: string
  private headers!: HttpHeaders
  constructor( private http: HttpClient) {
    this.token = localStorage.getItem( 'token' ) || '';
    this.headers = new HttpHeaders().set('X-Token', this.token);
  }

  getAllMeals () {
    return this.http.get<any>('http://localhost:3000/api/recipes')
  }

  registerMeals ( newMeals: Meals ){
  return this.http.post<any>( 'http://localhost:3000/api/recipes', newMeals, {headers: this.headers} );
  }


}
