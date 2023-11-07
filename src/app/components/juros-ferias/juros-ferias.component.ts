import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto';
import { last } from 'rxjs';

@Component({
  selector: 'app-juros-ferias',
  templateUrl: './juros-ferias.component.html',
  styleUrls: ['./juros-ferias.component.scss']
})
export class JurosFeriasComponent implements OnInit {
  initialValue: number | null = null;
  monthValue: number | null = null;
  period: number | null = null;
  rate: any | null = null;
  resultado: number | null = null;
  rateTime: string = "Anual"
  periodTime: string = "Anos"
  resultadoTotal: any[] = []
  isResult: boolean = false
  totalInvestido: number = 0;
  totalJuros: number = 0;
  totalFinal: number = 0;
  startInitialValue: number = 0;
  chartProduction: Chart<'line', any, any> | undefined;
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
  }
  CalcularJurosCompostos() {
    if (
      this.initialValue !== null &&
      this.monthValue !== null &&
      this.period !== null &&
      this.rate !== null
      ) {
        this.startInitialValue = this.initialValue
        var rate = this.rate
        var period = this.period
        
        
        if (this.periodTime == "Meses") {
          var Iq = (((1 + rate / 100) ** (1 / 12) - 1) * 100).toFixed(2)
          rate = Iq
        }
        if (this.periodTime == "Anos") {
          period = period * 12
          var Iq = (((1 + rate / 100) ** (1 / 12) - 1) * 100).toFixed(2)
          rate = Iq
        }
        
        if (this.rateTime == "Mensal") {
          rate = rate.replace(",", ".")
          rate = parseFloat(rate)
          if (this.periodTime == "Anos") {
            period = period * 12
        }
      }
      this.resultadoTotal = []
      var jurosPassado = 0;
      this.newInitialValue = this.initialValue
      
      for (let i = 0; i <= period; i++) {
        this.labels.push(i)
        if (this.monthValue > 0 && i > 0) {
          this.resultado = ((this.initialValue!) * ((1 + (rate / 100)) ** 1)) + this.monthValue
        } else {
          this.resultado = this.initialValue! * ((1 + (rate / 100)) ** i)
        }
        if (i > 0 && this.monthValue > 0) {
          this.initialValue = this.resultado
          this.newInitialValue += this.monthValue
        }
        this.datasets.push(this.newInitialValue!);
        this.datasets1.push(this.resultado);
        this.resultadoTotal.push({
          juros: (this.resultado - this.newInitialValue!) - jurosPassado,
          totalInvestido: this.newInitialValue!,
          totalJuros: this.resultado - this.newInitialValue!,
          totalAcumulado: this.resultado,
        })
        if (i == period) {
          this.totalInvestido = this.newInitialValue!
          this.totalJuros = this.resultado - this.newInitialValue!
          this.totalFinal = this.resultado
        }
        jurosPassado = this.resultado - this.newInitialValue!;
      }
      this.isResult = true;
      this.chartProduction = new Chart(this.graphProduction.nativeElement, {
        type: 'line', // Tipo de gráfico de linha
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Valor Investido',
              data: this.datasets, // Dados para a primeira linha
              backgroundColor: 'rgba(1, 77, 154, 0.2)',
              borderColor: 'rgb(1, 77, 154)',
              borderWidth: 1,
            },
            {
              label: 'Total em juros',
              data: this.datasets1, // Dados para a segunda linha
              backgroundColor: 'rgba(255, 99, 71, 0.2)',
              borderColor: 'rgb(255, 99, 71)',
              borderWidth: 1,
            },
          ],
        },
      });


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
