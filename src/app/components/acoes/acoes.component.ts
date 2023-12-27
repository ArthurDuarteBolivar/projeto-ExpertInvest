import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fii } from 'src/app/interface/fii';
import { HistoricoFii } from 'src/app/interface/historico-fii';
import { FiiService } from 'src/app/service/fii.service';
import { HistoricoFiiService } from 'src/app/service/historico-fii.service';
import Chart from 'chart.js/auto';
import { getLocaleTimeFormat } from '@angular/common';
import { HistoricoFiiDividendo } from 'src/app/interface/historico-fii-dividendo';
import { DeepPartial, TimeChartOptions, createChart } from 'lightweight-charts';
import { B3Service } from 'src/app/service/b3.service';
import { B3, DailyFlucutiation } from 'src/app/interface/b3';
import { TopInfo } from 'src/app/interface/top-info';


@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent implements OnInit, AfterViewInit {


  historicoDividendos: HistoricoFiiDividendo[] = []
  newHistorico: HistoricoFii[] = []
  constructor(private route: ActivatedRoute, private fiiService: FiiService,
    private historicoFiiSerice: HistoricoFiiService, private b3Service: B3Service) { }

  numberVariacao: number = 0;
  numberValorizacaoMes: number = 0;
  numberValorizacao: number = 0;

  chartHistorico: Chart<'line', any, any> | undefined;
  name: string = "";
  fii!: Fii;
  info!: TopInfo;
  historico!: DailyFlucutiation;
  data: any[] = [];
  preco: Number[] = [];
  volume: Number[] = []

  @ViewChild('historico', { static: true })
  graphHistorico!: ElementRef;

  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Horas';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  fiisB3!: B3;
  timeLineChart: string = "1 dia"
  colorScheme: any = {
    domain: ["#014d9a", "#c1e0f4"]
  };

  multi: any[] = [
    {
      name: "preço",
      series: []
    }
  ]
  multis: any[] = [
    {
      name: "preço",
      series: []
    }
  ]

  multiDividendos: any[] = [
  ]

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.b3Service.getCodigo(this.name).subscribe(res => {
        this.fiisB3 = res;
        this.fiiService.getByName(this.name).subscribe(res => {
          this.fii = res;
          this.info = {
            curPrc: this.fiisB3.Trad[0].scty.SctyQtn.curPrc,
            prcFlcn: this.fiisB3.Trad[0].scty.SctyQtn.prcFlcn,
            min52: this.fii.min52semanas,
            minMonth: this.fii.minMes,
            max52: this.fii.max52semanas,
            maxMonth: this.fii.maxMes,
            dividendPercent: this.fii.dividendPercent,
            dividendLast12: this.fii.dividendLast,
            valorization12: this.fii.valorizacao12M,
            valorizationMonth: this.fii.valorizacaoMes
          }
        });
      })
      this.b3Service.getHistoricoCodigo(this.name.toUpperCase()).subscribe(res => {
        this.historico = res;
        this.historico.TradgFlr.scty.lstQtn.forEach(res => {
          this.multi[0].series.push({
            "name": new Date(this.historico.TradgFlr.date + " " + res.dtTm),
            "value": parseFloat(res.closPric.toFixed(2))
          })
        });
        this.multi = [...this.multi]
      });
      this.historicoFiiSerice.getByCodigoDividendos(this.name.toUpperCase()).subscribe(res => {
        this.historicoDividendos = res;
        this.historicoDividendos.forEach(res => {
          this.data.push(new Date(res.data).toLocaleDateString());
          this.multiDividendos.push({
            "time": new Date(res.data).toLocaleDateString('en-CA'),
            "value": parseFloat(res.dividendos.toFixed(3))
          })
        });
        setTimeout(() => {
          const chartOptions: DeepPartial<TimeChartOptions> = { autoSize: true, width: 700, height: 300 };
          const chart = createChart(document.getElementById('chart-container')!, chartOptions);
          const lineSeries = chart.addHistogramSeries();
          lineSeries.setData(this.multiDividendos);
          chart.timeScale().fitContent();
        }, 100);
      });
    });

    setInterval(() => {
      this.b3Service.getCodigo(this.name).subscribe(res => {
        this.fiisB3 = res;
      })
      // if (this.timeLineChart == "max") {
      //   this.historicoFiiSerice.getByCodigo(this.name).subscribe(res => {
      //     this.newHistorico = res;
      //     this.multis = []
      //     this.newHistorico.forEach(res => {
      //       this.multi[0].series.push({
      //         "name": new Date(res.data),
      //         "value": parseFloat(res.fechamento.toFixed(2))
      //       })
      //     });
      //     this.multi = [...this.multi]
      //   })
      // } else if (this.timeLineChart == "1 dia") {
      //   this.b3Service.getHistoricoCodigo(this.name.toUpperCase()).subscribe(res => {
      //     this.historico = res;
      //     this.multis = [
      //       {
      //         name: "preço",
      //         series: []
      //       }
      //     ]
      //     this.historico.TradgFlr.scty.lstQtn.forEach(res => {
      //       this.data.push(res.dtTm);
      //       this.multis[0].series.push({
      //         "name": new Date(this.historico.TradgFlr.date + " " + res.dtTm),
      //         "value": parseFloat(res.closPric.toFixed(2))
      //       })
      //     });
      //     this.multi = [...this.multis]
      //   });
      // }
    }, 5000)
  }

  changeGraph() {
    if (this.timeLineChart == "max") {
      this.historicoFiiSerice.getByCodigo(this.name).subscribe(res => {
        this.newHistorico = res;
        this.multi = [
          {
            name: "preço",
            series: []
          }
        ]
        this.newHistorico.forEach(res => {
          this.multi[0].series.push({
            "name": new Date(res.data),
            "value": parseFloat(res.fechamento.toFixed(2))
          })
        });
        this.multi = [...this.multi]
      })
    } else if (this.timeLineChart == "1 dia") {
      this.b3Service.getHistoricoCodigo(this.name.toUpperCase()).subscribe(res => {
        this.historico = res;
        this.multi = [
          {
            name: "preço",
            series: []
          }
        ]
        this.historico.TradgFlr.scty.lstQtn.forEach(res => {
          this.data.push(res.dtTm);
          this.multi[0].series.push({
            "name": new Date(this.historico.TradgFlr.date + " " + res.dtTm),
            "value": parseFloat(res.closPric.toFixed(2))
          })
        });
        this.multi = [...this.multi]
      });
    }
  }

}
