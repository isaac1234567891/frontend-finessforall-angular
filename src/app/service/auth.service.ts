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
  private authUserData! : User;
  constructor( private http: HttpClient, private router: Router) { }
  // Getters
  get authUser () {
    return {...this.authUserData}
  }
  //credenciales { User }
  registerUser ( newUser: User ) : Observable<string|undefined>{
    return this.http.post<Response>( 'http://localhost:3000/api/auth/register', newUser )
      .pipe(
        map( ( data ) => {
          if(!data.ok){
            return data.msg;
          }
          return 'Se registro existasamente'
        }
        ),
        catchError( (error) => {
          return of ('Error en el servidor')
        })
      );
  }
  //credenciales { username, password}
  loginUser( user: User ) : Observable<string|boolean|undefined> {
    return this.http.post<Response>( 'http://localhost:3000/api/auth/login', user )
      .pipe(
        tap( ( data: Response ) => {
          console.log( data );
          if( data.token ){
            //Paso 1: Guardar el token en el localstorage
            localStorage.setItem( 'token', data.token );
            //Paso 2: Obtener los datos del usuario ( nombre, correo, roles)
            this.authUserData = data.data!;
            //Paso 3: Guardar datos del usuario en el localstorage
            this.router.navigateByUrl('dashboard/admin');
            // this.router.navigate(['meals']);
            // this.router.navigate(['dashboard', 'admin']);
          }
        }),
        map( (data) => {
          if(!data.ok){
            return data.msg;
          }
          return 'Se logeo correctamente'
        }  ),
        catchError( (error) => {
          console.error('error')
          return of ('Error en el servidor')
        })

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
