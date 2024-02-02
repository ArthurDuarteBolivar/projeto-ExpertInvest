import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { HistoricoFii } from '../interface/historico-fii';
import { HistoricoFiiDividendo } from '../interface/historico-fii-dividendo';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricoFiiService {

  constructor(private http: HttpClient) { }

  api: string = environment.apiUrl + "historico-fii"
  apiDividendos: string = environment.apiUrl + "historico-dividendos-fii"


  getByCodigo(codigo: string): Observable<HistoricoFii[]>{
    return this.http.get<HistoricoFii[]>(this.api + "/" + codigo)
  }

  getByCodigoDividendos(codigo: string): Observable<HistoricoFiiDividendo[]>{
    return this.http.get<HistoricoFiiDividendo[]>(this.apiDividendos + "/" + codigo);
  }

}
