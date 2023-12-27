import { Component, Input } from '@angular/core';
import { TopInfo } from 'src/app/interface/top-info';

@Component({
  selector: 'app-top-info-indice',
  templateUrl: './top-info-indice.component.html',
  styleUrls: ['./top-info-indice.component.scss']
})
export class TopInfoIndiceComponent {

  @Input()
  info!: TopInfo;

}
