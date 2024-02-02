import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricoDividendoAcoes } from '../interface/historico-acoes-dividendos';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoricoAcoesService {

  constructor(private http: HttpClient) { }

  api: string =  environment.apiUrl + "historico-dividendos-acoes"

  getByName(name: string): Observable<HistoricoDividendoAcoes[]>{
    return this.http.get<HistoricoDividendoAcoes[]>(this.api + "/" + name)
  }
}
