import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fii } from '../interface/fii';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FiiService {
  


  constructor(private http: HttpClient) { }
  
  api: string = environment.apiUrl + "fii"


  get(page: number = 0): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api + "/list/" + page)
  }

  getByName(name: string): Observable<Fii>{
    return this.http.get<Fii>(this.api + `/${name}`)
  }

  getHigh(): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api + "/high")
  }

  getLow(): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api + "/low")
  }

  getDividendoToday(data: string): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api + "/dividendos/" + data)
  }

  search(name : string): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api + "/search/" + name)
  }

  getAll(): Observable<Fii[]>{
    return this.http.get<Fii[]>(this.api)
  }
}
