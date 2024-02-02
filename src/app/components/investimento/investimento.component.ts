import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fii } from 'src/app/interface/fii';
import { FiiService } from 'src/app/service/fii.service';
import Chart from 'chart.js/auto';
import { min } from 'rxjs';


@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent implements OnInit {

  constructor(private fiiService: FiiService) { }

  chartHistorico: Chart<'line', any, any> | undefined;
  lastFii: Fii[] = []
  fii: Fii[] = []
  filter: string = ""
  variacoes: number[] = []
  segmentos: String[] = []
  dropdown: String = "Todos os segmentos"

  minDividendSearch: number = 0;
  maxDividendSearch: number = 20;

  minPvp: number = 0;
  maxPvp: number = 5;

  minPercentualdoCaixa: number = 0;
  maxPercentualdoCaixa: number = 100;

  minCotistas: number = 0;
  maxCotistas: number = 100000;

  minDY: number = 0;
  maxDY: number = 50;

  minLiquidez: number = 0;
  maxLiquidez: number = 5000000;

  minPatrimonio: number = 0;
  maxPatrimonio: number = 10000000000;

  page = 0;
  @ViewChild('historico', { static: true })
  graphHistorico!: ElementRef;

  ngOnInit(): void {
    this.fiiService.getAll().subscribe(res => {
      this.lastFii = res
      this.lastFii.forEach(fii => {
        if (!this.segmentos.includes(fii.segmento)) {
          this.segmentos.push(fii.segmento)
        }
      })
    })
  }

  // paginator(){
  //   setTimeout(() => {
  //     this.fiiService.get(this.page - 1).subscribe(res => {
  //       this.fii = res
  //     })
  //   }, 10);
  // }

  pesquisar() {
    this.fii = []
    for (let i = this.lastFii.length - 1; i >= 0; i--) {
      const fii = this.lastFii[i];
      if (
        fii.dividendPercent >= this.minDividendSearch &&
        fii.dividendPercent <= this.maxDividendSearch &&
        fii.precoSobreVP >= this.minPvp &&
        fii.precoSobreVP <= this.maxPvp &&
        fii.valorEmCaixa >= this.minPercentualdoCaixa &&
        fii.valorEmCaixa <= this.maxPercentualdoCaixa &&
        fii.ndeCotistas >= this.minCotistas &&
        fii.ndeCotistas <= this.maxCotistas &&
        fii.dyCagr3Anos >= this.minDY &&
        fii.dyCagr3Anos <= this.maxDY &&
        fii.liquidezMediaDiaria >= this.minLiquidez &&
        fii.liquidezMediaDiaria <= this.maxLiquidez &&
        fii.patrimonio >= this.minPatrimonio &&
        fii.patrimonio <= this.maxPatrimonio
      ) {
        if (this.dropdown != "Todos os segmentos"){
          if (fii.segmento == this.dropdown) {
            this.fii.push(fii);
            console.log(fii.variacao)
            
          }
        }else{
          this.fii.push(fii);
        }
      }
    }
  }


}
