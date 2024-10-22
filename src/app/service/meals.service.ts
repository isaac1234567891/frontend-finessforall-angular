import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meals } from '../interfaces/meals';


@Injectable({
providedIn: 'root'
})
export class MealsService {

constructor( private http: HttpClient) { }

registerMeals ( newMeals: Meals ){
return this.http.post( 'http://localhost:3000/api/recipes', newMeals);
}
}
