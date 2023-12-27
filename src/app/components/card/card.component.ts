import { Component, Input } from '@angular/core';
import { Fii } from 'src/app/interface/fii';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

@Input()
fii!: Fii;

}
