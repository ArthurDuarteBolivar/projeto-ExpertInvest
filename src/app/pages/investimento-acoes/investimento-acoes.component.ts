import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Fii } from 'src/app/interface/fii';
import { FiiService } from 'src/app/service/fii.service';
import Chart from 'chart.js/auto';
import { min } from 'rxjs';
import { Component } from '@angular/core';
import { AcoesService } from 'src/app/service/acoes.service';
import { Acoes } from 'src/app/interface/acoes';

@Component({
  selector: 'app-investimento-acoes',
  templateUrl: './investimento-acoes.component.html',
  styleUrls: ['./investimento-acoes.component.scss']
})
export class InvestimentoAcoesComponent implements OnInit {

  constructor(private fiiService: FiiService, private acoesService: AcoesService) { }

  chartHistorico: Chart<'line', any, any> | undefined;
  lastAcoes: Acoes[] = []
  acoes: Acoes[] = []
  filter: string = ""
  variacoes: number[] = []
  segmentos: String[] = []
  subsetor: String[] = []
  setor: String[] = []
  dropdown: String = "Todos os setores"
  dropdownSubsetor: String = "Selecione um setor"
  dropdownSegmentos: String = "Selecione um subsetor"

  minDividendSearch: number = 0;
  maxDividendSearch: number = 25;

  minPL = 0
  maxPL = 100

  minPegRatio = -10
  maxPegRatio = 10

  minPvp = 0
  maxPvp = 20

  minPAtivos = 0
  maxPativos = 100

  minMargemBruta = 0
  maxMargemBruta = 100

  minMargemEbit = 0;
  maxnMargemEbit = 100;

  minMargLiquida = 0;
  maxMargLiquida = 100;

  minPEbit = 0;
  maxPEbit = 100;

  minEvEbit = 0;
  maxEvEbit = 100;

  minDividaLiquidaEbit = 0;
  maxDividaLiquidaEbit = 20;

  minDividaLiquidaPatrimonio = 0;
  maxDividaLiquidaPatrimonio = 20;

  minPsr = 0;
  maxPsr = 100;

  minPcapGiro = 0;
  maxPcapGiro = 100;

  minPrecoAtivoCirc = 0;
  maxPrecoAtivoCirc = 100;

  minRoe = 0;
  maxRoe = 100;

  minRoic = 0;
  maxRoic = 100;

  minRoa = 0;
  maxRoa = 100;

  minLiquidezCorrente = 0;
  maxLiquidezCorrente = 20;

  minPatrimonioAtivos = 0;
  maxPatrimonioAtivos = 1;

  minPassivosAtivos = 0;
  maxPassivosAtivos = 1;

  minGiroAtivos = 0;
  maxGiroAtivos = 100;

  minCagrReceitas = 0;
  maxCagrReceitas = 100;
  
  minCagrLucro = 0;
  maxCagrLucro = 100;


  minLiquidezMediaDiaria = 0;
  maxLiquidezMediaDiaria = 10000000;

  minVpa = 0;
  maxVpa = 100;

  minLpa = 0;
  maxLpa = 100;

  minValorMercado = 0;
  maxValorMercado = 100000000000;

  page = 0;
  @ViewChild('historico', { static: true })
  graphHistorico!: ElementRef;

  ngOnInit(): void {
    this.acoesService.getAll().subscribe(res => {
      this.lastAcoes = res
      this.lastAcoes.forEach(acao => {
        if (!this.setor.includes(acao.setor)) {
          this.setor.push(acao.setor)
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
    this.acoes = []
    for (let i = this.lastAcoes.length - 1; i >= 0; i--) {
      const acoes = this.lastAcoes[i];
      if (
        acoes.dividendYield >= this.minDividendSearch &&
        acoes.dividendYield <= this.maxDividendSearch &&
        acoes.priceProfit >= this.minPvp &&
        acoes.priceProfit <= this.maxPvp &&
        acoes.pegRatio >= this.minPegRatio &&
        acoes.pegRatio <= this.maxPegRatio &&
        acoes.priceActive >= this.minPAtivos &&
        acoes.priceActive <= this.maxPativos &&
        acoes.grossMargin >= this.minMargemBruta &&
        acoes.grossMargin <= this.maxMargemBruta &&
        acoes.marginEbitda >= this.minMargemEbit &&
        acoes.marginEbitda <= this.maxnMargemEbit &&
        acoes.netMargin >= this.minMargLiquida &&
        acoes.netMargin <= this.maxMargLiquida &&
        acoes.priceEbit >= this.minPEbit &&
        acoes.priceEbit <= this.maxPEbit &&
        acoes.enterpriseValueEbit >= this.minEvEbit &&
        acoes.enterpriseValueEbit <= this.maxEvEbit &&
        acoes.divideEbit >= this.minDividaLiquidaEbit &&
        acoes.divideEbit <= this.maxDividaLiquidaEbit &&
        acoes.divideAssets >= this.minDividaLiquidaPatrimonio &&
        acoes.divideAssets <= this.maxDividaLiquidaPatrimonio &&
        acoes.priceNetRevenue >= this.minPsr &&
        acoes.priceNetRevenue <= this.maxPsr &&
        acoes.workingCapitalPrice >= this.minPcapGiro &&
        acoes.workingCapitalPrice <= this.maxPcapGiro &&
        acoes.priceActive >= this.minPrecoAtivoCirc &&
        acoes.priceActive <= this.maxPrecoAtivoCirc &&
        acoes.roe >= this.minRoe &&
        acoes.roe <= this.maxRoe &&
        acoes.roic >= this.minRoic &&
        acoes.roic <= this.maxRoic &&
        acoes.roa >= this.minRoa &&
        acoes.roa <= this.maxRoa &&
        acoes.currentLiquidity >= this.minLiquidezCorrente &&
        acoes.currentLiquidity <= this.maxLiquidezCorrente &&
        acoes.activeLiabilities >= this.minPatrimonioAtivos &&
        acoes.activeLiabilities <= this.maxPatrimonioAtivos &&
        acoes.activeLiabilities >= this.minPassivosAtivos &&
        acoes.activeLiabilities <= this.maxPassivosAtivos &&
        acoes.assetTurnover >= this.minGiroAtivos &&
        acoes.assetTurnover <= this.maxGiroAtivos &&
        acoes.cagrRevenues >= this.minCagrReceitas &&
        acoes.cagrRevenues <= this.maxCagrReceitas &&
        acoes.cagrProfit >= this.minCagrLucro &&
        acoes.cagrProfit <= this.maxCagrLucro &&
        acoes.dailyLiquidityAverage >= this.minLiquidezMediaDiaria &&
        acoes.dailyLiquidityAverage <= this.maxLiquidezMediaDiaria &&
        acoes.assetValue >= this.minVpa &&
        acoes.assetValue <= this.maxVpa &&
        acoes.profitShares >= this.minLpa &&
        acoes.profitShares <= this.maxLpa
      ) {
        if (this.dropdown != "Todos os setores"){
          if (acoes.setor == this.dropdown && acoes.subsetor == this.dropdownSubsetor && acoes.segmento == this.dropdownSegmentos) {
            this.acoes.push(acoes);
          }
        }else{
          this.acoes.push(acoes);
        }
      }
    }
    console.log(this.acoes.length)
  }

  mudarSubsetor(){
    this.dropdownSubsetor = "Selecione um setor"
    this.dropdownSegmentos = "Selecione um subsetor"
    this.lastAcoes.forEach(acao => {
      if(acao.setor == this.dropdown){
        if (!this.subsetor.includes(acao.subsetor)) {
          this.subsetor.push(acao.subsetor)
        }
      }
    })
  }
  
  mudarSegmento(){
    this.lastAcoes.forEach(acao => {
      if(acao.subsetor == this.dropdownSubsetor){
        if (!this.segmentos.includes(acao.segmento)) {
          this.segmentos.push(acao.segmento)
        }
      }
    })
  }
}
