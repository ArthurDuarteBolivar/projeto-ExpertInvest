import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acoes } from 'src/app/interface/acoes';
import { B3, DailyFlucutiation } from 'src/app/interface/b3';
import { HistoricoDividendoAcoes } from 'src/app/interface/historico-acoes-dividendos';
import { TopInfo } from 'src/app/interface/top-info';
import { AcoesService } from 'src/app/service/acoes.service';
import { B3Service } from 'src/app/service/b3.service';
import { HistoricoAcoesService } from 'src/app/service/historico-acoes.service';
import { DeepPartial, TimeChartOptions, createChart } from 'lightweight-charts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ibov-acoes',
  templateUrl: './ibov-acoes.component.html',
  styleUrls: ['./ibov-acoes.component.scss']
})
export class IbovAcoesComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private b3Service: B3Service, private acoesService: AcoesService, private historicoAcoes: HistoricoAcoesService) { }
  
  name: string = ""
  acoesB3!: B3;
  
  multiDividendos: any[] = [
    {
      name: "",
      series: []
    }
  ]
  
  chartPriceValue: Number[] = [];
  chartPriceName: String[] = [];
  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  chartProduction: Chart<'bar', any, any> | undefined;
  chartPrice: Chart<'line', any, any> | undefined;
  timeline: boolean = true;
  fiisB3!: B3;
  historico!: DailyFlucutiation;
  info: TopInfo = {
    curPrc: 0,
    prcFlcn: 0,
    min52: 0,
    minMonth: 0,
    max52: 0,
    maxMonth: 0,
    dividendPercent: 0,
    dividendLast12: 0,
    valorization12: 0,
    valorizationMonth: 0
  }
  yearNow: string = new Date().getFullYear().toString()
  timeLineChartDividend: string = new Date().getFullYear().toString()
  chartValue: Number[] = []
  chartName: String[] = []
  chartName2: Number[] = []
  historicoDividendos: HistoricoDividendoAcoes[] = []
  acao!: Acoes;

  colorScheme: any = {
    domain: ["#014d9a", "#c1e0f4"]
  };

  multi: any[] = [
    {
      name: "Preço",
      series: []
    }
  ]

  @ViewChild('ControleProducao', { static: true })
  graphProduction!: ElementRef;

  @ViewChild('Price', { static: true })
  graphPrice!: ElementRef;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.acoesService.getAcoes(this.name).subscribe(res => {
        this.acao = res;
      })
      this.b3Service.getCodigo(this.name).subscribe(res => {
        this.acoesB3 = res
        if (this.acoesB3.Trad[0].scty.SctyQtn.curPrc) {
          this.info = {
            curPrc: this.acoesB3.Trad[0].scty.SctyQtn.curPrc,
            prcFlcn: this.acoesB3.Trad[0].scty.SctyQtn.prcFlcn,
            min52: this.acao.minWeek,
            minMonth: this.acao.minMonth,
            max52: this.acao.maxWeek,
            maxMonth: this.acao.maxMonth,
            dividendPercent: this.acao.dividendYield,
            dividendLast12: this.acao.dividendYieldMonth,
            valorization12: this.acao.valorizationAll,
            valorizationMonth: this.acao.valorizationMonth
          }
        }
      })
      this.b3Service.getHistoricoCodigo(this.name).subscribe(res => {
        this.historico = res;
        this.historico.TradgFlr.scty.lstQtn.forEach(res => {
          this.multi[0].series.push({
            "name": new Date(this.historico.TradgFlr.date + " " + res.dtTm),
            "value": parseFloat(res.closPric.toFixed(2))
          })
        });
        this.multi = [...this.multi]
      });
      this.historicoAcoes.getByName(this.name.toUpperCase()).subscribe(res => {
        this.chartName = []
        this.chartValue = []
        this.historicoDividendos = res;
        this.historicoDividendos.forEach(res => {
          const data = new Date(res.data);
          const formattedDate = data.toLocaleDateString("pt-BR");
          const year = data.getFullYear();
          const currentYear = new Date().getFullYear();

          // Filtra os dados para os anos desejados (2023 e 2022)
          if (year === currentYear) {
            this.chartName.push(formattedDate),
              this.chartValue.push(parseFloat(res.valor.toFixed(3)))
          }
        });
        this.chartName = this.chartName.reverse()
        this.chartValue = this.chartValue.reverse()
        this.chartProduction = new Chart(this.graphProduction.nativeElement, {
          type: 'bar', // Tipo de gráfico de barra
          data: {
            labels: this.chartName,
            datasets: [
              {
                maxBarThickness: 50,
                minBarLength: 1,
                label: '2023',
                data: this.chartValue, // Dados para a primeira barra
                backgroundColor: 'rgba(1, 77, 154)',
                borderColor: 'rgb(1, 77, 154)',
                borderWidth: 1,
              },
            ],
          },
        });
        
      });

    });
  }


  changeGraph() {
    if (this.timeLineChartDividend == this.yearNow) {
      this.chartProduction?.destroy()
      this.chartName = []
      this.chartValue = []
      this.historicoDividendos.forEach(res => {
        const data = new Date(res.data);
        const formattedDate = data.toLocaleDateString("pt-BR");
        const year = data.getFullYear();
        const currentYear = new Date().getFullYear();

        // Filtra os dados para os anos desejados (2023 e 2022)
        if (year === currentYear) {
          this.chartName.push(formattedDate),
            this.chartValue.push(parseFloat(res.valor.toFixed(3)))
        }
      });
      this.chartName = this.chartName.reverse()
      this.chartValue = this.chartValue.reverse()
      this.chartProduction = new Chart(this.graphProduction.nativeElement, {
        type: 'bar', // Tipo de gráfico de linha
        data: {
          labels: this.chartName,
          datasets: [
            {
              maxBarThickness: 50,
              minBarLength: 1,
              label: (new Date().getUTCFullYear()).toString(),
              data: this.chartValue, // Dados para a primeira barra
              backgroundColor: 'rgba(1, 77, 154)',
              borderColor: 'rgb(1, 77, 154)',
              borderWidth: 1,
            },
          ],
        },
      });
    } else if (this.timeLineChartDividend == "5 anos") {
      this.chartProduction?.destroy()
      this.chartName = []
      this.chartValue = []
      this.historicoDividendos.forEach(res => {
        const data = new Date(res.data);
        const formattedDate = data.toLocaleDateString("pt-BR");
        const year = data.getFullYear();
        const currentYear = new Date().getFullYear();

        // Filtra os dados para os anos desejados (2023 e 2022)
        if (year === currentYear || year === currentYear - 1 || year === currentYear - 2 || year === currentYear - 3 || year === currentYear - 4) {
          this.chartName.push(formattedDate),
            this.chartValue.push(parseFloat(res.valor.toFixed(3)))
        }
      });
      this.chartName = this.chartName.reverse()
      this.chartValue = this.chartValue.reverse()
      this.chartProduction = new Chart(this.graphProduction.nativeElement, {
        type: 'bar', // Tipo de gráfico de linha
        data: {
          labels: this.chartName,
          datasets: [
            {
              maxBarThickness: 50,
              minBarLength: 1,
              label: '5 anos',
              data: this.chartValue, // Dados para a primeira barra
              backgroundColor: 'rgba(1, 77, 154)',
              borderColor: 'rgb(1, 77, 154)',
              borderWidth: 1,
            },
          ],
        },
      });
    } else {
      this.chartProduction?.destroy()
      this.chartName = []
      this.chartValue = []
      this.historicoDividendos.forEach(res => {
        const data = new Date(res.data);
        const formattedDate = data.toLocaleDateString("pt-BR");
        const year = data.getFullYear();
        const currentYear = new Date().getFullYear();

        this.chartName.push(formattedDate),
        this.chartValue.push((parseFloat(res.valor.toFixed(3))))

      });
      this.chartName = this.chartName.reverse()
      this.chartValue = this.chartValue.reverse()
      this.chartProduction = new Chart(this.graphProduction.nativeElement, {
        type: 'bar', // Tipo de gráfico de linha
        data: {
          labels: this.chartName,
          datasets: [
            {
              maxBarThickness: 50,
              minBarLength: 1,
              label: 'máx',
              data: this.chartValue, // Dados para a primeira barra
              backgroundColor: 'rgba(1, 77, 154)',
              borderColor: 'rgb(1, 77, 154)',
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
