import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segmento',
  templateUrl: './segmento.component.html',
  styleUrls: ['./segmento.component.scss']
})
export class SegmentoComponent {

  @Input()
  segmento: string = ""

  @Input()
  setor: string = ""

  @Input()
  subsetor: string = ""

}
