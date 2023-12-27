import { Component, Input } from '@angular/core';
import { B3 } from 'src/app/interface/b3';
import { Fii } from 'src/app/interface/fii';
import { TopInfo } from 'src/app/interface/top-info';

@Component({
  selector: 'app-top-info',
  templateUrl: './top-info.component.html',
  styleUrls: ['./top-info.component.scss']
})
export class TopInfoComponent {

  @Input()
  info!: TopInfo;

}
