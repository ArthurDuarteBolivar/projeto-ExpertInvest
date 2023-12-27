import { Component, Input } from '@angular/core';
import { Acoes } from 'src/app/interface/acoes';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent {
 
    @Input()
    info!: Acoes;

}
