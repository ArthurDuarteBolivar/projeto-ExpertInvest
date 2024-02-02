import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { B3, B3PriceFlutuation, DailyFlucutiation, Trad } from 'src/app/interface/b3';
import { Fii } from 'src/app/interface/fii';
import { News } from 'src/app/interface/news';
import { TradingFlor } from 'src/app/interface/trading-flor';
import { B3Service } from 'src/app/service/b3.service';
import { FiiService } from 'src/app/service/fii.service';
import { IAppState, setB3TradeVolume, setB3TradingFloor, setDividendosHoje, setFlutuationIfixAction, setHighIbovAction, setIbov, setIfix } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fiiService: FiiService, private b3Service: B3Service, private store: Store<{ app: IAppState }>) { }
  commodities: any = []
  moedas: any = []
  indices: any = []
  isOpen: boolean = true;
  news: News[] = []
  newNews: News[] = [] 

  historico!: DailyFlucutiation;
  isLoaded: boolean = false;
  dividendosFii$ = this.store.select('app').pipe(
    map(app => app.dividendosHoje)
  )
  b3$ = this.store.select('app').pipe(
    map(app => app.ibov.Trad)
  );
  ifix$ = this.store.select('app').pipe(
    map(app => app.ifix.Trad)
  );
  b3PriceFlutuation$ = this.store.select("app").pipe(
    map(app => app.flutuationIfix)
  )
  b3PriceFlutuationIbov$ = this.store.select('app').pipe(
    map(app => app.highIbov)
  );
  b3TradingFloor$: Observable<TradingFlor> = this.store.select('app').pipe(
    map(app => app.b3TradingFloor)
  );
  b3TradeVoluem$ = this.store.select('app').pipe(
    map(app => app.b3TradeVolume)
  );

  ngOnInit(): void {
    this.store.select('app').subscribe({
      next: (appState) => {
        if (appState.ibov.Trad.length === 0) {
          this.b3Service.getCodigo("ibov").subscribe(res => {
            this.store.dispatch(setIbov({ payload: res }));
          });
        } else if (appState.ifix.Trad.length === 0) {
          this.b3Service.getCodigo("ifix").subscribe(res => {
            this.store.dispatch(setIfix({ payload: res }));
          });
        } else if (appState.highIbov.SctyHghstDrpLst.length === 0) {
          this.b3Service.getPriceFlutuation("ibov").subscribe(res => {
            if(res.BizSts.desc == "InstrumentPriceFluctuation not available."){
              this.isOpen = false;
            }else{
              this.isOpen = true;
            }
            this.store.dispatch(setHighIbovAction({ payload: res }))
            // this.isLoaded = true;
          })
        } else if (appState.flutuationIfix.SctyHghstDrpLst.length === 0) {
          this.b3Service.getPriceFlutuation("ifix").subscribe(res => {
            if(res.BizSts.desc == "InstrumentPriceFluctuation not available."){
              this.isOpen = false;
            }else{
              this.isOpen = true;
            }
            this.store.dispatch(setFlutuationIfixAction({ payload: res }))
          })
        } else if (appState.b3TradingFloor.TradgFlr.grssAmt === 0) {
          this.b3Service.getTradingFlor().subscribe(res => {
            this.store.dispatch(setB3TradingFloor({ payload: res }))
          })
        } else if (appState.b3TradeVolume.Volume.length === 0) {
          this.b3Service.getTradeVolume().subscribe(res => {
            this.store.dispatch(setB3TradeVolume({ payload: res }))
          })
        } else if (appState.dividendosHoje[0] == undefined) {
          const today = new Date()
          var todayRight = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
          this.fiiService.getDividendoToday(todayRight).subscribe(res => {

            this.store.dispatch(setDividendosHoje({ payload: res }))
          })
        }
      }
    });
    // for(let i = 0; i < this.simbolos.length; i++) {
    //   this.b3Service.derivation(this.simbolos[i]).subscribe((res: any) => {
    //        if(i < 4){
    //           this.commodities.push(res)
    //        }else if(i < 7){
    //         this.moedas.push(res);
    //        }else{
    //         this.indices.push(res)
    //        }
    //   })

    // }
    this.b3Service.getNew("business", 1).subscribe(res => {
      this.isLoaded = true;
      this.news = res
    })
    
  }

  calcularDiferencaTempo(dataString: string): string {
    const agora = new Date();
    const data = new Date(dataString);
  
    if (isNaN(data.getTime())) {
      // Verifica se a conversão falhou
      return 'Data inválida';
    }
  
    const diferenca = agora.getTime() - data.getTime();
  
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    if (dias > 0) {
      return `${dias} dia${dias > 1 ? 's' : ''} atrás`;
    } else if (horas > 0) {
      return `${horas} hora${horas > 1 ? 's' : ''} atrás`;
    } else if (minutos > 0) {
      return `${minutos} minuto${minutos > 1 ? 's' : ''} atrás`;
    } else {
      return 'Agora mesmo';
    }
  }

  

}
