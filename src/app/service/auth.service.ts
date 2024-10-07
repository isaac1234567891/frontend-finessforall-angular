import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface User {
  name: string,
  lastname:string,
  age: number,
  gender:string,
  weight: string,
  height: string,
  mobile: string,
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  registerUser ( newUser: User ){
    return this.http.post( 'http://localhost:3000/api/auth/register', newUser);
  }
}
