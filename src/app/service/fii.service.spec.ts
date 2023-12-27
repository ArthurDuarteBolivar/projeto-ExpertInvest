import { TestBed } from '@angular/core/testing';

import { FiiService } from './fii.service';

describe('FiiService', () => {
  let service: FiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
