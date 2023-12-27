import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { HistoricoFii } from '../interface/historico-fii';
import { HistoricoFiiDividendo } from '../interface/historico-fii-dividendo';

@Injectable({
  providedIn: 'root'
})
export class HistoricoFiiService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8090/api/v1/historico-fii"
  apiDividendos: string = "http://localhost:8090/api/v1/historico-dividendos-fii"


  getByCodigo(codigo: string): Observable<HistoricoFii[]>{
    return this.http.get<HistoricoFii[]>(this.api + "/" + codigo)
  }

  getByCodigoDividendos(codigo: string): Observable<HistoricoFiiDividendo[]>{
    return this.http.get<HistoricoFiiDividendo[]>(this.apiDividendos + "/" + codigo);
  }

}
