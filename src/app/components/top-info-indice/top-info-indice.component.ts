import { Component, Input } from '@angular/core';
import { B3 } from 'src/app/interface/b3';
import { TopInfo } from 'src/app/interface/top-info';

@Component({
  selector: 'app-top-info-indice',
  templateUrl: './top-info-indice.component.html',
  styleUrls: ['./top-info-indice.component.scss']
})
export class TopInfoIndiceComponent {

  @Input()
  info!: B3;

}
