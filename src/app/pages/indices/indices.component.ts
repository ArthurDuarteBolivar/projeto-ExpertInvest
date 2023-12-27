import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { B3, DailyFlucutiation } from 'src/app/interface/b3';
import { TopInfo } from 'src/app/interface/top-info';
import { AcoesService } from 'src/app/service/acoes.service';
import { B3Service } from 'src/app/service/b3.service';
import { HistoricoAcoesService } from 'src/app/service/historico-acoes.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.scss']
})
export class IndicesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private b3Service: B3Service, private acoesService: AcoesService, private historicoAcoes: HistoricoAcoesService) { }

  legend: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  colorScheme: any = {
    domain: ["#014d9a", "#c1e0f4"]
  };

  multi: any[] = [
    {
      name: "",
      series: []
    }
  ]
  historico!: DailyFlucutiation;
  name: string = ""
  acoesB3!: B3;
  info!: TopInfo;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name')!;
      this.b3Service.getCodigo(this.name).subscribe(res => {
        this.acoesB3 = res
        if (this.acoesB3.Trad[0].scty.SctyQtn.curPrc) {
          this.info = {
            curPrc: this.acoesB3.Trad[0].scty.SctyQtn.curPrc,
            prcFlcn: this.acoesB3.Trad[0].scty.SctyQtn.prcFlcn,
            min52: 0,
            minMonth: 0,
            max52: 0,
            maxMonth: 0,
            dividendPercent: 0,
            dividendLast12: 0,
            valorization12: 0,
            valorizationMonth: 0
          }
        }
      })
      this.b3Service.getHistoricoCodigo(this.name).subscribe(res => {
        this.historico = res;
        this.multi = [
          {
            name: "Preço",
            series: []
          }
        ]

        this.historico.TradgFlr.scty.lstQtn.forEach(res => {
          this.multi[0].series.push({
            "name": new Date(this.historico.TradgFlr.date + " " + res.dtTm),
            "value": parseFloat(res.closPric.toFixed(2))
          })
        });
        this.multi = [...this.multi]
      });
    });
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
