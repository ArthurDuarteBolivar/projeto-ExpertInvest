import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoDividendoAcoes } from '../interface/historico-acoes-dividendos';

@Injectable({
  providedIn: 'root'
})
export class HistoricoAcoesService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8090/api/v1/historico-dividendos-acoes"

  getByName(name: string): Observable<HistoricoDividendoAcoes[]>{
    return this.http.get<HistoricoDividendoAcoes[]>(this.api + "/" + name)
  }
}
