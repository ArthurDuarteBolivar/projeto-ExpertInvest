import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto';
import { last } from 'rxjs';

@Component({
  selector: 'app-consumo-combustivel',
  templateUrl: './consumo-combustivel.component.html',
  styleUrls: ['./consumo-combustivel.component.scss']
})
export class ConsumoCombustivelComponent implements OnInit {

  consumo: number | null = null;
  distancia: number | null = null;
  preco: any | null = null;
  resultado: number | null = null;


  idaEvolta: boolean = false

  rateTime: string = "km/ℓ"
  periodTime: string = "Anos"
  resultadoTotal: any[] = []
  isResult: boolean = false
  totalInvestido: number = 0;
  totalJuros: number = 0;
  totalFinal: number = 0;
  startInitialValue: number = 0;
  chartProduction: Chart<'bar', any, any> | undefined;
  labels: Number[] = [];
  datasets: Number[] = [];
  datasets1: Number[] = [];
  newInitialValue: number = 0;

  constructor(private location: Location) { }

  ngOnInit(): void {

  }


  Voltar() {
    this.isResult = false;
    this.chartProduction?.destroy()
    this.datasets = []
    this.datasets1 = []
    this.labels = []
  }

  CalcularJurosCompostos() {
    if (
      this.consumo !== null &&
      this.distancia !== null &&
      this.preco !== null
    ) {
      var consumo = this.consumo

      if(this.idaEvolta == true){
        this.distancia =  this.distancia * 2
      }

      if(this.rateTime == "ℓ/100km"){
        consumo = consumo / 100
        this.resultado = (this.distancia * consumo) * this.preco
      }else{
        this.resultado = (this.distancia / consumo) * this.preco
      }

      this.isResult = true;
    } else {
      this.resultado = null; // Se alguma das variáveis estiver nula, o resultado também é nulo
    }

  }


  Limpar() {
    this.preco = null;
    this.distancia = null;
    this.consumo = null;
    this.resultado = null;
  }
}
