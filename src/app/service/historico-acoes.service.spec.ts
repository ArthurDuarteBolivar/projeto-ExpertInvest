import { TestBed } from '@angular/core/testing';

import { HistoricoAcoesService } from './historico-acoes.service';

describe('HistoricoAcoesService', () => {
  let service: HistoricoAcoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoAcoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
