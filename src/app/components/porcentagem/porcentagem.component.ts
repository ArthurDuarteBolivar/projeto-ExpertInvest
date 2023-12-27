import { Component } from '@angular/core';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto';
import { last } from 'rxjs';

@Component({
  selector: 'app-porcentagem',
  templateUrl: './porcentagem.component.html',
  styleUrls: ['./porcentagem.component.scss']
})
export class PorcentagemComponent implements OnInit {


  constructor(private location: Location) { }

  valor1Calculadora1: number |null = null
  valor2Calculadora1: number |null = null
  valor1Calculadora2: number |null = null
  valor2Calculadora2: number |null = null
  valor1Calculadora3: number |null = null
  valor2Calculadora3: number |null = null
  valor1Calculadora4: number |null = null
  valor2Calculadora4: number |null = null
  resultado1:number |null = null
  resultado2:string |null = null
  resultado3:string |null = null
  resultado4:string |null = null

  ngOnInit(): void {

  }



  Calculadora1(): void {
    if (this.valor1Calculadora1 !== null && this.valor2Calculadora1 !== null) {
      this.resultado1 = this.valor1Calculadora1 * (this.valor2Calculadora1 / 100);
    }
  }

  Calculadora2(): void {
    if (
      this.valor1Calculadora2 !== null &&
      this.valor2Calculadora2 !== null &&
      this.valor2Calculadora2 !== 0
    ) {
      this.resultado2 = ((this.valor1Calculadora2 / this.valor2Calculadora2) * 100).toString();
      this.resultado2 = this.resultado2 + "%"
    }
  }

  Calculadora3(): void {
    if (
      this.valor1Calculadora3 !== null &&
      this.valor2Calculadora3 !== null &&
      this.valor1Calculadora3 !== 0
    ) {
      this.resultado3 = (((this.valor2Calculadora3 - this.valor1Calculadora3) / this.valor1Calculadora3) * 100).toString();
      this.resultado3 = this.resultado3 + "%"
    }
  }
  
  Calculadora4(): void {
    if (
      this.valor1Calculadora4 !== null &&
      this.valor2Calculadora4 !== null &&
      this.valor1Calculadora4 !== 0
      ) {
        this.resultado4 = (((this.valor1Calculadora4 - this.valor2Calculadora4) / this.valor1Calculadora4) * 100).toString();
        this.resultado4 = this.resultado4 + "%"
    }
  }
  Limpar4() {
    this.valor1Calculadora4 = null;
    this.valor2Calculadora4 = null;
    this.resultado4 = null;
  }
  Limpar1() {
    this.valor1Calculadora1 = null;
    this.valor2Calculadora1 = null;
    this.resultado1 = null;
  }
  Limpar2() {
    this.valor1Calculadora2 = null;
    this.valor2Calculadora2 = null;
    this.resultado2 = null;
  }
  Limpar3() {
    this.valor1Calculadora3 = null;
    this.valor2Calculadora3 = null;
    this.resultado3 = null;
  }
}
