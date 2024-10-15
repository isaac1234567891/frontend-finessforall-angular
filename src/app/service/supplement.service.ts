import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplements } from '../interfaces/supplement';
import { Observable } from 'rxjs';
import { tap, map, } from 'rxjs/operators';
import { Response } from '../interfaces/response';

@Injectable({
providedIn: 'root',
})
export class SupplementsService {

constructor(private request: HttpClient) { }

registerSupplements(newSupplements: Supplements): Observable<any> {
return this.request.post<Response>('http://localhost:3000/api/supplements', newSupplements)
.pipe(
tap((data) => {
console.log(data);
}),
map((data) => data) // Asegúrate de que esta propiedad exista
);
}
}
