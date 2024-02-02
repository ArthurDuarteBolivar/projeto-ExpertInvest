import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { B3, B3PriceFlutuation, DailyFlucutiation } from '../interface/b3';
import { TradingFlor } from '../interface/trading-flor';
import { TradeVolume } from '../interface/trade-volume';
import { News } from '../interface/news';
import { Coin } from '../interface/coin';

@Injectable({
  providedIn: 'root'
})
export class B3Service {

  private apiKey = '8f1cbe6277msh4681f14422d4676p11f18ajsnb8f6f7a2b037';
  private apiUrlNews = 'https://news-api53.p.rapidapi.com/news/topics';

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/"

  getCodigo(codigo: string): Observable<B3> {
    return this.http.get<B3>(this.apiUrl + codigo)
  }

  getTradingFlor(): Observable<TradingFlor> {
    return this.http.get<TradingFlor>("https://cotacao.b3.com.br/mds/api/v1/TradingFloorInfo")
  }

  getHistoricoCodigo(codigo: string): Observable<DailyFlucutiation> {
    return this.http.get<DailyFlucutiation>("https://cotacao.b3.com.br/mds/api/v1/DailyFluctuationHistory/" + codigo)
  }

  getPriceFlutuation(codigo: string): Observable<B3PriceFlutuation> {
    return this.http.get<B3PriceFlutuation>("https://cotacao.b3.com.br/mds/api/v1/InstrumentPriceFluctuation/" + codigo)
  }

  getIndices() {
    return this.http.get("https://arquivos.b3.com.br/apinegocios/ticker/IFIX/2023-12-04")
  }

  getTradeVolume(): Observable<TradeVolume> {
    return this.http.get<TradeVolume>("https://cotacao.b3.com.br/mds/api/v1/InstrumentTradeVolume/vista")
  }

  autoComplete(nome: string) {
    return this.http.get("https://arquivos.b3.com.br/apinegocios/tickersymbol?q=" + nome)
  }


  getComposicaoCarteira() {
    const headers = new HttpHeaders()
      .set('Cookie', 'lumClientId=FF8080818C10F622018C183961471058; lumMonUid=PMGmzeDhxvSfDMZwzv0lcCYPooeyyKPz; visid_incap_2246223=imQyK31KSPWsgZHht1X7l/c1a2UAAAAAQUIPAAAAAADcgnYViWIN461oEdycjIRA; dtCookie=v_4_srv_28_sn_97A0510D4F27B1473E46C549D022CF85_perc_100000_ol_0_mul_1_app-3Afd69ce40c52bd20e_1_rcs-3Acss_0; BIGipServerpool_sistemaswebb3-listados_8443_WAF=1329140746.64288.0000; TS0171d45d=011d592ce1b7de8e1af9e032dc8a6accfb0b331cf2981d503a187c1e01333eefda0045e29ed2a3053701f73e15630f2ab916fc7bbb');
    const options = { headers: headers };
    return this.http.get("https://sistemaswebb3-listados.b3.com.br/indexProxy/indexCall/GetPortfolioDay/eyJsYW5ndWFnZSI6InB0LWJyIiwicGFnZU51bWJlciI6MSwicGFnZVNpemUiOjIwLCJpbmRleCI6IklCT1YiLCJzZWdtZW50IjoiMSJ9", { headers: headers })
  }

  derivation(name: string) {
    return this.http.get("https://cotacao.b3.com.br/mds/api/v1/DerivativeQuotation/" + name)
  }

  getNew(topic: string, page: number): Observable<News[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'news-api53.p.rapidapi.com',
    });

    const options = { headers };

    return this.http.get<News[]>(`${this.apiUrlNews}/${topic}/BR?page=${page}&itemsPerPage=16`, options);
  }


  getNewsList(page: number): Observable<News[]>{
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'news-api53.p.rapidapi.com',
    });

    const options = { headers };

    return this.http.get<News[]>(`https://news-api53.p.rapidapi.com/news/language/BR/?page=${page}&itemsPerPage=16`, options);
  }
}
