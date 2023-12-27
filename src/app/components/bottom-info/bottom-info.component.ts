import { Component, Input } from '@angular/core';
import { Fii } from 'src/app/interface/fii';

@Component({
  selector: 'app-bottom-info',
  templateUrl: './bottom-info.component.html',
  styleUrls: ['./bottom-info.component.scss']
})
export class BottomInfoComponent {

  @Input()
  fii!: Fii;
}
