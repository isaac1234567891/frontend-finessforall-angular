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

  loginUser( user: User ) {
    return this.http.post( 'http://localhost:3000/api/auth/login', user);
  }
  // getUser () {
  //   return this.http.get( 'http://localhost:3000/api/auth/')
  // }
  // getUserId ( userId: User) {
  //   return this.http.get<User>( 'http://localhost:3000/api/auth/{$userId}');
  // }
  // updateUser ( updateUser: User) {
  //   return this.http.patch( 'http://localhost:3000/api/auth/{$userId}', updateUser)
  // }
  // deleteUser ( deleteUser: User) {
  //   return this.http.delete( `http://localhost:3000/api/auth/{$userId}` )
  // }
}
