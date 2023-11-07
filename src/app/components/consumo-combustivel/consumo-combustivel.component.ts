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
  initialValue: number | null = null;
  monthValue: number | null = null;
  period: number | null = null;
  rate: any | null = null;
  resultado: number | null = null;
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


  @ViewChild('ControleProducao', { static: true })
  graphProduction!: ElementRef;

  Voltar() {
    this.isResult = false;
    this.chartProduction?.destroy()
    this.datasets = []
    this.datasets1 = []
    this.labels = []
  }

  CalcularJurosCompostos() {
    if (
      this.initialValue !== null &&
      this.period !== null &&
      this.rate !== null
    ) {
      this.startInitialValue = this.initialValue
      var rate = this.rate
      var period = this.period
      var jurosPassado = 0;
      for (let i = 0; i <= period; i++) {
        this.labels.push(i)
        this.resultado = this.initialValue * (this.rate / 100) * i
        this.datasets.push(this.initialValue);
        this.datasets1.push(this.resultado + this.initialValue);
        this.resultadoTotal.push({
          juros: this.resultado - jurosPassado,
          totalInvestido: this.initialValue,
          totalJuros: this.resultado,
          totalAcumulado: this.resultado + this.initialValue,
        })
        if (i == period) {
          this.totalInvestido = this.initialValue!
          this.totalJuros = this.resultado
          this.totalFinal = this.resultado + this.initialValue
        }
        jurosPassado = this.resultado;
      }

      this.chartProduction = new Chart(this.graphProduction.nativeElement, {
        type: 'bar', // Tipo de gráfico de linha
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Valor Investido',
              data: this.datasets, // Dados para a primeira linha
              backgroundColor: 'rgb(1, 77, 154)',
              borderColor: 'rgb(1, 77, 154)',
              borderWidth: 1,
            },
            {
              label: 'Total em juros',
              data: this.datasets1, // Dados para a segunda linha
              backgroundColor: 'rgb(255, 99, 71)',
              borderColor: 'rgb(255, 99, 71)',
              borderWidth: 1,
            },
          ],
        },
      });

      this.isResult = true;
    } else {
      this.resultado = null; // Se alguma das variáveis estiver nula, o resultado também é nulo
    }

  }


  CalcularTaxadeJuros() {
    // Iq = [(1 + It)^q/t – 1] x 100
    var Iq = (((1 + this.rate! / 100) ** (1 / 12) - 1) * 100).toFixed(2)
    this.rate = parseFloat(Iq).toString().replace(".", ",");
  }

  Limpar() {
    this.initialValue = null;
    this.monthValue = null;
    this.period = null;
    this.rate = null;
    this.resultado = null;
  }
}
