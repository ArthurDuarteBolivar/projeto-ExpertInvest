import { TestBed } from '@angular/core/testing';

import { B3Service } from './b3.service';

describe('B3Service', () => {
  let service: B3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
