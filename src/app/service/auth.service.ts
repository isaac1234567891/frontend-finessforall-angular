import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap, map } from 'rxjs';
import { User } from '../interfaces/user';
import { Response } from '../interfaces/response';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private router: Router) { }

  //credenciales { User}
  registerUser ( newUser: User ) : Observable<boolean>{
    return this.http.post<Response>( 'http://localhost:3000/api/auth/register', newUser )
      .pipe(
        map( ( data ) => data.ok )
      );
  }
  //credenciales { username, password}
  loginUser( user: User ) : Observable<string|boolean|undefined> {
    return this.http.post<Response>( 'http://localhost:3000/api/auth/login', user )
      .pipe(
        tap( ( data: Response ) => {
          console.log( data );
          if( data.token ){
            localStorage.setItem( 'token', data.token );
            this.router.navigateByUrl('dashboard/admin');
            // this.router.navigate(['meals']);
            // this.router.navigate(['dashboard', 'admin']);
          }
        }),
        map( data => data.msg ),
        catchError( error => of ( false ))

      );
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
