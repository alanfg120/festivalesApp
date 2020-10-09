import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getdatos(): Observable<any> {
    return this.http.get('assets/datos/datos.json');
  }

  getImagen(): Observable<any> {
    return this.http.get('assets/datos/datos.json');
  }
}
