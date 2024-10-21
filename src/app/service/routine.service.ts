import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routine } from '../interfaces/routine';
import { Observable } from 'rxjs';
import { tap, map, } from 'rxjs/operators';
import { Response } from '../interfaces/response';

@Injectable({
providedIn: 'root',
})
export class RoutineService {

constructor(private request: HttpClient) { }

registerRoutines(newRoutines: Routine): Observable<any> {
return this.request.post<Response>('http://localhost:3000/api/routine', newRoutines)
.pipe(
tap((data) => {
console.log(data);
}),
map((data) => data) // Asegúrate de que esta propiedad exista
);
}
}
