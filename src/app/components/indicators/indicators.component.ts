import { Component, Input, OnInit } from '@angular/core';
import { Acoes } from 'src/app/interface/acoes';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit{

  @Input()
  indicadores!: Acoes;

  ngOnInit(): void {
  }

}
