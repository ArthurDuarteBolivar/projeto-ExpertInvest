import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acoes } from '../interface/acoes';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrl + "acoes/"


  getAcoes(name: string): Observable<Acoes>{
    return this.http.get<Acoes>(this.apiUrl + name)
  }

  search(name: string): Observable<Acoes[]>{
    return this.http.get<Acoes[]>(environment.apiUrl + "acoes/search/" + name)
  }

  getAll(){
    return this.http.get<Acoes[]>(environment.apiUrl + "acoes")
  }


}
