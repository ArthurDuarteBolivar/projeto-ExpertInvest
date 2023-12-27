import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fii } from 'src/app/interface/fii';
import { FiiService } from 'src/app/service/fii.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent implements OnInit{
  
  constructor(private fiiService: FiiService){}
  
  chartHistorico: Chart<'line', any, any> | undefined;
  newFii: Fii[] = []
  lastFii: Fii[] = []
  fii: Fii[] = []
  filter: string = ""
  variacoes: number[] = []


  minDividendSearch: number = 0;
  maxDividendSearch: number = 20;

  page = 0;

  @ViewChild('historico', { static: true })
  graphHistorico!: ElementRef;

  ngOnInit(): void {
    this.fiiService.get().subscribe(res => {
      this.fii = res
      this.fii.forEach(fii => {
        if(fii.dividendPercent > 10){
          console.log(fii)
        }
      })
      this.lastFii = this.fii
    })
  }
  
  paginator(){
    setTimeout(() => {
      this.fiiService.get(this.page - 1).subscribe(res => {
        this.fii = res
        this.newFii = res;
      })
    }, 10);
  }

  pesquisar() {
    const termoPesquisa = this.filter.toLowerCase();
    // Filtra os dados com base no termo de pesquisa
    this.fii = this.lastFii
    console.log(this.fii)
    this.fii = this.fii.filter(item =>
      item.name.toLowerCase().includes(termoPesquisa)
    )
    if(termoPesquisa == ""){
      this.fii = this.newFii
    }
  }

}
