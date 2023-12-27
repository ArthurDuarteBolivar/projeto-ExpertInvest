import { Component, Input } from '@angular/core';
import { Fii } from 'src/app/interface/fii';

@Component({
  selector: 'app-dy-container',
  templateUrl: './dy-container.component.html',
  styleUrls: ['./dy-container.component.scss']
})
export class DyContainerComponent {

@Input()
fii!: Fii;

}
