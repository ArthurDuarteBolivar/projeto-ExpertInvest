import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto';
import { last } from 'rxjs';

@Component({
  selector: 'app-decimo-terceiro',
  templateUrl: './decimo-terceiro.component.html',
  styleUrls: ['./decimo-terceiro.component.scss']
})
export class DecimoTerceiroComponent implements OnInit {

  constructor(private location: Location) { }

  resultado: number | null = null;
  impostoDeRenda: number | null = null
  INSS: number | null = null
  salario: number | null = null
  dependentes: number | null = null
  mesesTrabalhados: number | null = null
  parcela: string = "Única"
  isResult: boolean = false;
  porcentagemIR: number = 0;
  porcentagemINSS: number = 0;

  ngOnInit(): void {

  }

  Voltar() {
    this.isResult = false
    this.INSS = 0;
    this.porcentagemINSS = 0;
    this.impostoDeRenda = 0;
    this.porcentagemIR = 0;
  }
  CalcularDecimoTerceiro() {



    if (this.salario !== null &&
      this.dependentes !== null &&
      this.mesesTrabalhados !== null) {

      if (this.parcela == "Primeira") {
        this.resultado = ((this.salario / 12) * this.mesesTrabalhados) / 2
      }else if(this.parcela != "Segunda"){
        this.resultado = (this.salario / 12) * this.mesesTrabalhados
      }else{
        this.resultado = this.salario
      }


      if (this.parcela != "Primeira") {
        if (this.resultado <= 1320.00) {
          this.INSS = this.resultado * 0.075;
          this.porcentagemINSS = 7.50
        } else if (this.resultado <= 2571.29) {
          this.INSS = this.resultado * 0.09;
          this.porcentagemINSS = 9
        } else if (this.resultado <= 3856.94) {
          this.INSS = this.resultado * 0.12;
          this.porcentagemINSS = 12
        } else if (this.resultado <= 7507.49) {
          this.INSS = this.resultado * 0.14;
          this.porcentagemINSS = 14
        } else if (this.resultado > 7507.49) {
          // Para salários acima de R$ 7.507,49, a alíquota é de 14%
          this.INSS = this.resultado * 0.14;
          this.porcentagemINSS = 14
        }

        if (this.resultado <= 2112.00) {
          this.impostoDeRenda = 0; // Isento
          this.porcentagemIR = 0;
        } else if (this.resultado <= 2826.65) {
          this.impostoDeRenda = this.resultado * 0.075;
          this.porcentagemIR = 7.50;
        } else if (this.resultado <= 3751.05) {
          this.impostoDeRenda = this.resultado * 0.15;
          this.porcentagemIR = 15;
        } else if (this.resultado <= 4664.68) {
          this.impostoDeRenda = this.resultado * 0.225;
          this.porcentagemIR = 22.50;
        } else {
          // Para salários acima de R$ 4.664,68, a alíquota é de 27,50%
          this.impostoDeRenda = this.resultado * 0.275;
          this.porcentagemIR = 27.50;
        }
      }

      if(this.parcela == "Segunda"){
        var newResultado = ((this.salario / 12) * this.mesesTrabalhados) / 2
        this.resultado = (this.resultado - this.impostoDeRenda! - this.INSS!) - newResultado
      }

      this.isResult = true
    } else {
      this.resultado = 0;
      this.isResult = false
    }
  }

  Limpar() {
    this.INSS = 0
    this.impostoDeRenda = 0
    this.porcentagemINSS = 0
    this.porcentagemIR = 0;
    this.salario = null;
    this.mesesTrabalhados = null
    this.dependentes = null
  }
}
