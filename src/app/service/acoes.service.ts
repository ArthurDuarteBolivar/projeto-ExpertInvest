import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acoes } from '../interface/acoes';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://localhost:8090/api/v1/acoes/"


  getAcoes(name: string): Observable<Acoes>{
    return this.http.get<Acoes>(this.apiUrl + name)
  }

  search(name: string): Observable<Acoes[]>{
    return this.http.get<Acoes[]>("http://localhost:8090/api/v1/acoes/search/" + name)
  }


}
