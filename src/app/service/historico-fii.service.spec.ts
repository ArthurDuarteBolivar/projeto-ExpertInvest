import { TestBed } from '@angular/core/testing';

import { HistoricoFiiService } from './historico-fii.service';

describe('HistoricoFiiService', () => {
  let service: HistoricoFiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoFiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
